import { Calendar, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = "Empowering Innovation through AI & Data Science";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [typedText, fullText]);

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

        {/* Dynamic Floating Particles */}
        {Array.from({ length: window.innerWidth > 768 ? 20 : 10 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute pointer-events-none"
            initial={{
              x: Math.random() * (window.innerWidth || 400),
              y: Math.random() * (window.innerHeight || 600),
              opacity: 0
            }}
            animate={{
              x: Math.random() * (window.innerWidth || 400),
              y: Math.random() * (window.innerHeight || 600),
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${i % 2 === 0 ? 'from-accent/40 to-white/40' : 'from-primary/40 to-accent/40'}`} />
          </motion.div>
        ))}

        {/* Floating geometric shapes */}
        {Array.from({ length: window.innerWidth > 768 ? 8 : 4 }, (_, i) => (
          <motion.div
            key={`shape-geo-${i}`}
            className="absolute hidden sm:block"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
          >
            {i % 3 === 0 && <div className="w-3 h-3 sm:w-4 sm:h-4 bg-accent/40 rotate-45"></div>}
            {i % 3 === 1 && <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>}
            {i % 3 === 2 && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent/50 rounded-full"></div>}
          </motion.div>
        ))}

        {/* Pulsing energy lines - inspired by your WebGL threads */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={`energy-line-${i}`}
              className="absolute w-full h-px"
              style={{
                top: `${15 + i * 15}%`,
                background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: ['-100%', '0%', '100%'],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Liquid-style morphing shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }, (_, i) => (
            <motion.div
              key={`liquid-morph-${i}`}
              className="absolute blur-3xl"
              style={{
                width: `${150 + i * 50}px`,
                height: `${100 + i * 30}px`,
                background: `radial-gradient(ellipse, ${
                  ['rgba(82, 39, 255, 0.2)', 'rgba(255, 159, 252, 0.2)', 'rgba(177, 158, 239, 0.2)', 'rgba(59, 130, 246, 0.2)'][i]
                }, transparent)`,
                left: `${20 + i * 20}%`,
                top: `${10 + i * 20}%`,
                borderRadius: '50%',
              }}
              animate={{
                borderRadius: ['50%', '30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '50%'],
                scale: [1, 1.3, 0.8, 1],
                x: [0, Math.sin(i * 2) * 100, 0],
                y: [0, Math.cos(i * 2) * 80, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Interactive cursor follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 10,
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
