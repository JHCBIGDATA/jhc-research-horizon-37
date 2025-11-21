import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Music, Zap, RotateCcw, Trophy, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Note {
  id: number;
  lane: number;
  y: number;
  hit: boolean;
  missed: boolean;
}

interface HitEffect {
  id: number;
  lane: number;
  text: string;
  color: string;
}

const RhythmBeatGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [hitEffects, setHitEffects] = useState<HitEffect[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [difficulty, setDifficulty] = useState<'easy' | 'normal' | 'hard'>('normal');
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef<number>();
  const noteIdRef = useRef(0);
  const lastNoteTimeRef = useRef(0);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const LANES = 4;
  const LANE_COLORS = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];
  const KEYS = ['d', 'f', 'j', 'k'];
  const NOTE_SPEED = difficulty === 'easy' ? 2 : difficulty === 'normal' ? 3 : 4;
  const HIT_ZONE_Y = 500;

  const initAudio = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      analyserRef.current.connect(audioContextRef.current.destination);
    }
  }, []);

  const playHitSound = useCallback((frequency: number, duration: number = 0.1) => {
    if (!audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  }, []);

  const createNote = useCallback(() => {
    const lane = Math.floor(Math.random() * LANES);
    const newNote: Note = {
      id: noteIdRef.current++,
      lane,
      y: -50,
      hit: false,
      missed: false
    };
    setNotes(prev => [...prev, newNote]);
  }, []);

  const startGame = () => {
    initAudio();
    setIsPlaying(true);
    setScore(0);
    setCombo(0);
    setNotes([]);
    setHitEffects([]);
    lastNoteTimeRef.current = Date.now();
  };

  const stopGame = () => {
    setIsPlaying(false);
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
    }
  };

  const hitNote = useCallback((lane: number) => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Find closest note in this lane
    const laneNotes = notes.filter(n => n.lane === lane && !n.hit && !n.missed);
    if (laneNotes.length === 0) return;

    const closestNote = laneNotes.reduce((prev, curr) => 
      Math.abs(curr.y - HIT_ZONE_Y) < Math.abs(prev.y - HIT_ZONE_Y) ? curr : prev
    );

    const distance = Math.abs(closestNote.y - HIT_ZONE_Y);
    
    if (distance < 100) {
      // HIT!
      closestNote.hit = true;
      
      let points = 0;
      let hitText = '';
      let hitColor = '';

      if (distance < 25) {
        hitText = 'PERFECT!';
        hitColor = '#ffff00';
        points = 100;
      } else if (distance < 50) {
        hitText = 'GREAT!';
        hitColor = '#00ff00';
        points = 75;
      } else if (distance < 75) {
        hitText = 'GOOD';
        hitColor = '#00ffff';
        points = 50;
      } else {
        hitText = 'OK';
        hitColor = '#ffffff';
        points = 25;
      }

      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > bestCombo) {
        setBestCombo(newCombo);
      }

      const comboMultiplier = Math.floor(newCombo / 10) + 1;
      const totalPoints = points * comboMultiplier;
      setScore(prev => prev + totalPoints);

      // Hit effect
      setHitEffects(prev => [...prev, {
        id: Date.now(),
        lane,
        text: hitText,
        color: hitColor
      }]);
      setTimeout(() => {
        setHitEffects(prev => prev.slice(1));
      }, 800);

      // Play sound
      const frequencies = [261.63, 329.63, 392.00, 523.25]; // C, E, G, C
      playHitSound(frequencies[lane], 0.15);

      // Particles
      if (!isMobile) {
        confetti({
          particleCount: 15,
          angle: 90,
          spread: 45,
          origin: { x: (lane + 0.5) / LANES, y: 0.8 },
          colors: [LANE_COLORS[lane]]
        });
      }

      // Mega combo celebration
      if (newCombo % 50 === 0 && newCombo > 0) {
        const duration = 2000;
        const end = Date.now() + duration;
        (function frame() {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: LANE_COLORS
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: LANE_COLORS
          });
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      }
    } else {
      // MISS - too far
      setCombo(0);
      setHitEffects(prev => [...prev, {
        id: Date.now(),
        lane,
        text: 'MISS',
        color: '#ff0000'
      }]);
      setTimeout(() => {
        setHitEffects(prev => prev.slice(1));
      }, 500);
    }

    setNotes(notes.filter(n => n.id !== closestNote.id));
  }, [notes, combo, bestCombo, isPlaying, playHitSound]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const keyIndex = KEYS.indexOf(e.key.toLowerCase());
      if (keyIndex !== -1) {
        hitNote(keyIndex);
      }
      if (e.key === ' ') {
        e.preventDefault();
        if (isPlaying) {
          stopGame();
        } else {
          startGame();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [hitNote, isPlaying]);

  // Game loop
  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      // Clear
      ctx.fillStyle = 'rgba(10, 10, 30, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lanes
      const laneWidth = canvas.width / LANES;
      for (let i = 0; i < LANES; i++) {
        ctx.strokeStyle = LANE_COLORS[i] + '33';
        ctx.lineWidth = 2;
        ctx.strokeRect(i * laneWidth, 0, laneWidth, canvas.height);

        // Lane labels
        ctx.fillStyle = LANE_COLORS[i];
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(KEYS[i].toUpperCase(), (i + 0.5) * laneWidth, canvas.height - 30);
      }

      // Draw hit zone
      ctx.fillStyle = '#ffffff22';
      ctx.fillRect(0, HIT_ZONE_Y - 40, canvas.width, 80);
      ctx.strokeStyle = '#ffffff88';
      ctx.lineWidth = 3;
      ctx.strokeRect(0, HIT_ZONE_Y - 40, canvas.width, 80);

      // Update and draw notes
      const updatedNotes = notes.map(note => {
        note.y += NOTE_SPEED;
        
        // Check if missed (with proper threshold)
        if (note.y > HIT_ZONE_Y + 120 && !note.hit && !note.missed) {
          note.missed = true;
          setCombo(0);
        }

        // Draw note
        if (!note.hit && !note.missed) {
          const x = (note.lane + 0.5) * laneWidth;
          
          // Glow effect
          const gradient = ctx.createRadialGradient(x, note.y, 0, x, note.y, 30);
          gradient.addColorStop(0, LANE_COLORS[note.lane]);
          gradient.addColorStop(0.5, LANE_COLORS[note.lane] + '88');
          gradient.addColorStop(1, LANE_COLORS[note.lane] + '00');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, note.y, 30, 0, Math.PI * 2);
          ctx.fill();

          // Core
          ctx.fillStyle = LANE_COLORS[note.lane];
          ctx.beginPath();
          ctx.arc(x, note.y, 15, 0, Math.PI * 2);
          ctx.fill();

          // Inner highlight
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(x, note.y, 8, 0, Math.PI * 2);
          ctx.fill();
        }

        return note;
      });

      setNotes(updatedNotes.filter(n => n.y < canvas.height + 50));

      // Spawn notes
      const now = Date.now();
      const noteInterval = (60 / bpm) * 1000; // Convert BPM to ms
      if (now - lastNoteTimeRef.current > noteInterval) {
        createNote();
        lastNoteTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, notes, bpm, createNote]);

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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-4">
              <Music className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Web Audio API</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Rhythm Beat Master
            </h1>
            <p className="text-gray-400">Hit the notes with perfect timing!</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 max-w-4xl mx-auto px-2"
          >
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">{score}</div>
              <div className="text-xs md:text-sm text-gray-400">Score</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">{combo}</div>
              <div className="text-xs md:text-sm text-gray-400">Combo</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">{bestCombo}</div>
              <div className="text-xs md:text-sm text-gray-400">Best</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">{bpm}</div>
              <div className="text-xs md:text-sm text-gray-400">BPM</div>
            </div>
          </motion.div>

          {/* Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-6 relative"
          >
            <canvas
              ref={canvasRef}
              width={isMobile ? 400 : 800}
              height={isMobile ? 500 : 600}
              className="w-full border-4 border-purple-500/50 rounded-2xl shadow-2xl shadow-purple-500/30 bg-gradient-to-b from-gray-900 to-purple-900/30"
            />

            {/* Hit Effects Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <AnimatePresence>
                {hitEffects.map(effect => (
                  <motion.div
                    key={effect.id}
                    initial={{ opacity: 1, scale: 0, y: 0 }}
                    animate={{ opacity: 0, scale: 2, y: -100 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      position: 'absolute',
                      left: `${(effect.lane + 0.5) * 25}%`,
                      top: '80%',
                      color: effect.color,
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      textShadow: `0 0 20px ${effect.color}`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    {effect.text}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Combo Display */}
              {combo > 5 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.5 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 rounded-full text-2xl font-black"
                  style={{
                    boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)'
                  }}
                >
                  {combo}X COMBO!
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Controls
              </h3>
              <div className="space-y-3">
                <Button
                  onClick={isPlaying ? stopGame : startGame}
                  className="w-full gap-2"
                  variant={isPlaying ? "destructive" : "default"}
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlaying ? 'Stop' : 'Start Game'}
                </Button>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>D - F - J - K to hit notes</p>
                  <p>Space to pause/resume</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Difficulty</h3>
              <div className="space-y-2">
                {(['easy', 'normal', 'hard'] as const).map(diff => (
                  <Button
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className="w-full"
                    variant={difficulty === diff ? "default" : "outline"}
                    disabled={isPlaying}
                  >
                    {diff.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">BPM</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="60"
                  max="200"
                  step="10"
                  value={bpm}
                  onChange={(e) => setBpm(parseInt(e.target.value))}
                  disabled={isPlaying}
                  className="w-full"
                />
                <div className="text-center text-gray-400 text-sm">
                  Slower ← → Faster
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scoring Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-purple-400">Scoring</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-yellow-400 font-bold">PERFECT:</span>
                <span className="text-gray-300"> 100 points</span>
              </div>
              <div>
                <span className="text-green-400 font-bold">GREAT:</span>
                <span className="text-gray-300"> 75 points</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">GOOD:</span>
                <span className="text-gray-300"> 50 points</span>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Build combos for score multipliers! Every 10 combo = +1x multiplier. Every 50 combo = MEGA celebration! 🎉
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RhythmBeatGame;
