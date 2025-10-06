import { Calendar, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Empowering Innovation through AI & Data Science";

  // Memoize viewport-based calculations
  const { isMobile, particleCount, shapeCount } = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    return {
      isMobile,
      particleCount: isMobile ? 6 : 12, // Reduced from 10/20
      shapeCount: isMobile ? 3 : 6, // Reduced from 4/8
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse movement updates
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 0 : 2000;

    if (!isDeleting && typedText === fullText) {
      // Pause at full text before starting to delete
      const timer = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timer);
    }

    if (isDeleting && typedText === '') {
      // Start typing again after deleting all text
      setIsDeleting(false);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypedText(current => current.slice(0, -1));
      } else {
        setTypedText(current => fullText.slice(0, current.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, fullText]);

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-transparent to-primary/30"></div>
      
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: '10%',
            top: '20%',
          }}
        />
        
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-l from-primary/15 to-accent/25 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            right: '10%',
            bottom: '20%',
          }}
        />

        {/* Dynamic Floating Particles - Optimized */}
        {Array.from({ length: particleCount }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute pointer-events-none will-change-transform"
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 600,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 400,
              y: Math.random() * 600,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3, // Reduced duration
              repeat: Infinity,
              delay: Math.random() * 3, // Reduced delay
              ease: "linear", // More performant than easeInOut
            }}
          >
            <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-accent/40' : 'bg-primary/40'}`} />
          </motion.div>
        ))}

        {/* Floating geometric shapes - Optimized */}
        {Array.from({ length: shapeCount }, (_, i) => (
          <motion.div
            key={`shape-geo-${i}`}
            className="absolute hidden sm:block will-change-transform"
            animate={{
              y: [0, -20, 0], // Reduced movement
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i, // Reduced duration
              repeat: Infinity,
              ease: "linear", // More performant
              delay: i,
            }}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 10}%`,
            }}
          >
            {i % 3 === 0 && <div className="w-3 h-3 bg-accent/30 rotate-45"></div>}
            {i % 3 === 1 && <div className="w-2 h-2 bg-white/20 rounded-full"></div>}
            {i % 3 === 2 && <div className="w-2 h-2 bg-accent/40 rounded-full"></div>}
          </motion.div>
        ))}

        {/* Pulsing energy lines - Optimized */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }, (_, i) => ( // Reduced from 6 to 4
            <motion.div
              key={`energy-line-${i}`}
              className="absolute w-full h-px will-change-transform"
              style={{
                top: `${20 + i * 20}%`,
                background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3 + i * 0.5, // Reduced duration
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        {/* Liquid-style morphing shapes - Simplified */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }, (_, i) => ( // Reduced from 4 to 3
            <motion.div
              key={`liquid-morph-${i}`}
              className="absolute blur-2xl will-change-transform" // Reduced blur from blur-3xl
              style={{
                width: `${120 + i * 40}px`, // Smaller sizes
                height: `${80 + i * 25}px`,
                background: `radial-gradient(ellipse, ${
                  ['rgba(82, 39, 255, 0.15)', 'rgba(255, 159, 252, 0.15)', 'rgba(59, 130, 246, 0.15)'][i]
                }, transparent)`,
                left: `${25 + i * 25}%`,
                top: `${15 + i * 25}%`,
                borderRadius: '50%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 12 + i * 2, // Reduced duration
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        {/* Interactive cursor follower - Simplified */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-xl pointer-events-none will-change-transform"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{
            type: "spring",
            stiffness: 50, // Increased stiffness for better performance
            damping: 20,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glassmorphism container */}
          <motion.div
            className="relative backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            }}
          >
            {/* Conference Year Badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-accent" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">JHC 2025</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                National Research
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
                Conference
              </span>
            </motion.h1>

            {/* Animated Tagline */}
            <motion.div
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 text-white/90 font-light min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-center">
                {typedText}
                <motion.span
                  className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-accent ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>

            {/* Conference Details */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="font-medium text-sm sm:text-base">December 1-2, 2025</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="font-medium text-sm sm:text-base">Jai Hind College, Mumbai</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="mt-2 sm:mt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-black font-bold px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto"
                  onClick={() => window.open('https://tinyurl.com/3p4s4zhj', '_blank', 'noopener,noreferrer')}
                >
                  <span className="relative z-10">Register Now</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
