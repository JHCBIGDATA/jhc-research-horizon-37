import { Calendar, MapPin, ChevronDown, Sparkles, Zap } from 'lucide-react';
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

  const scrollToNext = () => {
    const element = document.querySelector('#about-conference');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
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
            {i % 3 === 0 && <div className="w-4 h-4 bg-accent/40 rotate-45"></div>}
            {i % 3 === 1 && <div className="w-3 h-3 bg-white/30 rounded-full"></div>}
            {i % 3 === 2 && <Sparkles className="w-5 h-5 text-accent/50" />}
          </motion.div>
        ))}

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
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glassmorphism container */}
          <motion.div
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            {/* Conference Year Badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 px-6 py-3 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 mr-2 text-accent" />
              <span className="text-sm font-semibold tracking-wide">JHC 2025</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                Research
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
                Conference
              </span>
            </motion.h1>

            {/* Animated Tagline */}
            <motion.div
              className="text-xl md:text-2xl mb-8 text-white/90 font-light h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {typedText}
              <motion.span
                className="inline-block w-0.5 h-6 bg-accent ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            {/* Conference Details */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-medium">December 1-2, 2025</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-medium">Jai Hind College, Mumbai</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-black font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 relative overflow-hidden group"
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <ChevronDown className="h-6 w-6 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
