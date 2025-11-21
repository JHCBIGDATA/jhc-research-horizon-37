import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, RotateCcw, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
  color: string;
  trail: { x: number; y: number }[];
  glow: number;
  energy: number;
}

const ParticlePhysicsGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [attractorMode, setAttractorMode] = useState(false);
  const [explosionMode, setExplosionMode] = useState(false);
  const [gravityStrength, setGravityStrength] = useState(0.5);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0, down: false });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const COLORS = [
    '#00ffff', '#ff00ff', '#ffff00', '#00ff00', 
    '#ff0080', '#0080ff', '#ff8000', '#8000ff'
  ];

  const createParticle = useCallback((x: number, y: number, velocityScale = 1): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = (Math.random() * 3 + 2) * velocityScale;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: Math.random() * 8 + 4,
      mass: Math.random() * 2 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      trail: [],
      glow: Math.random() * 0.5 + 0.5,
      energy: 100
    };
  }, []);

  const initParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const particleCount = isMobile ? 25 : 50;
    const canvas = canvasRef.current;
    const width = canvas?.width || 800;
    const height = canvas?.height || 600;
    for (let i = 0; i < particleCount; i++) {
      newParticles.push(
        createParticle(
          Math.random() * width,
          Math.random() * height,
          1
        )
      );
    }
    setParticles(newParticles);
    setScore(0);
  }, [createParticle, isMobile]);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (explosionMode) {
      // MASSIVE EXPLOSION
      const newParticles = [...particles];
      const explosionCount = isMobile ? 10 : 20;
      for (let i = 0; i < explosionCount; i++) {
        newParticles.push(createParticle(x, y, 3));
      }
      setParticles(newParticles);
      
      confetti({
        particleCount: 100,
        spread: 360,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: COLORS
      });
    } else {
      // Add single particle
      setParticles([...particles, createParticle(x, y, 1)]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      down: e.buttons === 1
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isPaused) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(10, 10, 20, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const newParticles = [...particles];
      let collisions = 0;

      // Update particles
      for (let i = 0; i < newParticles.length; i++) {
        const p = newParticles[i];

        // Apply gravity
        p.vy += gravityStrength * 0.1;

        // Attractor mode - pull towards mouse
        if (attractorMode && mouseRef.current.down) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 10) {
            const force = 0.5;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Trail effect
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 15) p.trail.shift();

        // Boundary collision with bounce
        if (p.x - p.radius < 0 || p.x + p.radius > canvas.width) {
          p.vx *= -0.9;
          p.x = p.x < canvas.width / 2 ? p.radius : canvas.width - p.radius;
          p.energy -= 5;
        }
        if (p.y - p.radius < 0 || p.y + p.radius > canvas.height) {
          p.vy *= -0.9;
          p.y = p.y < canvas.height / 2 ? p.radius : canvas.height - p.radius;
          p.energy -= 5;
        }

        // Particle-particle collision
        for (let j = i + 1; j < newParticles.length; j++) {
          const p2 = newParticles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = p.radius + p2.radius;

          if (dist < minDist) {
            // Collision detected!
            collisions++;

            // Elastic collision physics
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Rotate velocities
            const vx1 = p.vx * cos + p.vy * sin;
            const vy1 = p.vy * cos - p.vx * sin;
            const vx2 = p2.vx * cos + p2.vy * sin;
            const vy2 = p2.vy * cos - p2.vx * sin;

            // Collision response
            const finalVx1 = ((p.mass - p2.mass) * vx1 + 2 * p2.mass * vx2) / (p.mass + p2.mass);
            const finalVx2 = ((p2.mass - p.mass) * vx2 + 2 * p.mass * vx1) / (p.mass + p2.mass);

            // Rotate back
            p.vx = finalVx1 * cos - vy1 * sin;
            p.vy = vy1 * cos + finalVx1 * sin;
            p2.vx = finalVx2 * cos - vy2 * sin;
            p2.vy = vy2 * cos + finalVx2 * sin;

            // Separate particles
            const overlap = minDist - dist;
            const separateX = (overlap / 2) * (dx / dist);
            const separateY = (overlap / 2) * (dy / dist);
            p.x -= separateX;
            p.y -= separateY;
            p2.x += separateX;
            p2.y += separateY;

            // Add energy effect
            p.glow = 1;
            p2.glow = 1;
            p.energy += 10;
            p2.energy += 10;
          }
        }

        // Decay glow
        p.glow *= 0.95;

        // Draw trail with gradient
        if (p.trail.length > 1) {
          for (let t = 0; t < p.trail.length - 1; t++) {
            const alpha = (t / p.trail.length) * 0.3;
            ctx.strokeStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
            ctx.lineWidth = p.radius * (t / p.trail.length);
            ctx.beginPath();
            ctx.moveTo(p.trail[t].x, p.trail[t].y);
            ctx.lineTo(p.trail[t + 1].x, p.trail[t + 1].y);
            ctx.stroke();
          }
        }

        // Draw particle with glow
        const glowSize = p.radius * (1 + p.glow * 2);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(0.5, p.color + '88');
        gradient.addColorStop(1, p.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Energy bar
        ctx.fillStyle = p.energy > 50 ? '#00ff00' : '#ff0000';
        ctx.fillRect(p.x - p.radius, p.y - p.radius - 5, (p.energy / 100) * p.radius * 2, 2);
      }

      // Remove dead particles
      const aliveParticles = newParticles.filter(p => p.energy > 0);
      setParticles(aliveParticles);

      // Update score based on collisions
      if (collisions > 0) {
        setScore(prev => prev + collisions * 10);
      }

      // Draw mouse attractor
      if (attractorMode && mouseRef.current.down) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 50
        );
        gradient.addColorStop(0, '#ffffff88');
        gradient.addColorStop(1, '#ffffff00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 50, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particles, isPaused, attractorMode, gravityStrength]);

  const triggerMegaExplosion = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const newParticles: Particle[] = [];
    const megaCount = isMobile ? 50 : 100;

    for (let i = 0; i < megaCount; i++) {
      newParticles.push(createParticle(centerX, centerY, 5));
    }

    setParticles([...particles, ...newParticles]);

    // INSANE CONFETTI
    const duration = 3000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 7,
        angle: Math.random() * 360,
        spread: 100,
        origin: { x: Math.random(), y: Math.random() },
        colors: COLORS
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    setScore(prev => prev + 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">WebGL Physics Engine</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Particle Physics Sandbox
            </h1>
            <p className="text-gray-400">Real-time collision detection with custom physics!</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-2 md:gap-4 mb-6 max-w-3xl mx-auto px-2"
          >
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-cyan-400">{score}</div>
              <div className="text-sm text-gray-400">Score</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-400">{particles.length}</div>
              <div className="text-sm text-gray-400">Particles</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">{gravityStrength.toFixed(1)}</div>
              <div className="text-sm text-gray-400">Gravity</div>
            </div>
          </motion.div>

          {/* Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-6"
          >
            <canvas
              ref={canvasRef}
              width={isMobile ? 400 : 800}
              height={isMobile ? 500 : 600}
              onClick={handleCanvasClick}
              onMouseMove={handleMouseMove}
              className="w-full border-4 border-cyan-500/50 rounded-2xl shadow-2xl shadow-cyan-500/30 cursor-crosshair bg-gradient-to-br from-gray-900 to-gray-800"
            />
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 px-2"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 md:p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Controls
              </h3>
              <div className="space-y-3">
                <Button
                  onClick={() => setIsPaused(!isPaused)}
                  className="w-full"
                  variant={isPaused ? "destructive" : "default"}
                >
                  {isPaused ? '▶️ Resume' : '⏸️ Pause'}
                </Button>
                <Button onClick={initParticles} className="w-full gap-2" variant="outline">
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
                <Button
                  onClick={triggerMegaExplosion}
                  className="w-full gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  <Rocket className="w-4 h-4" />
                  MEGA EXPLOSION
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Modes</h3>
              <div className="space-y-3">
                <Button
                  onClick={() => setAttractorMode(!attractorMode)}
                  className="w-full"
                  variant={attractorMode ? "default" : "outline"}
                >
                  🧲 Attractor Mode {attractorMode ? 'ON' : 'OFF'}
                </Button>
                <Button
                  onClick={() => setExplosionMode(!explosionMode)}
                  className="w-full"
                  variant={explosionMode ? "default" : "outline"}
                >
                  💥 Explosion Mode {explosionMode ? 'ON' : 'OFF'}
                </Button>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Gravity: {gravityStrength.toFixed(1)}</label>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={gravityStrength}
                    onChange={(e) => setGravityStrength(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-purple-400">How to Play</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p>• Click to spawn particles</p>
                <p>• Particles collide with realistic physics</p>
                <p>• Enable Attractor Mode and drag to pull particles</p>
              </div>
              <div>
                <p>• Explosion Mode spawns 20 particles per click</p>
                <p>• Adjust gravity to change behavior</p>
                <p>• Watch particles bounce and interact!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParticlePhysicsGame;
