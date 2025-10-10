import { Calendar, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {

  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const fullText = "Empowering Innovation through AI & Data Science";

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 0 : 2000;

    if (!isDeleting && typedText === fullText) {
      const timer = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timer);
    }

    if (isDeleting && typedText === '') {
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
    <section id="home" className="hero-gradient min-h-screen flex items-center text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          src="/lovable-uploads/12777808_2560_1440_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/lovable-uploads/placeholder.svg"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlayThrough={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        />
        {/* Loader/Poster overlay until video is ready */}
        {!videoReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 transition-opacity duration-700">
            <img
              src="/lovable-uploads/placeholder.svg"
              alt="Loading preview"
              className="w-full h-full object-cover animate-pulse"
              draggable="false"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-red-400 font-bold text-lg">
              Video failed to load or is not supported by your browser.
            </div>
          </div>
        )}
        {/* Gradient overlays above video */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-transparent to-primary/30 pointer-events-none" />
      </div>
      
  {/* Main Layout */}
  <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side: Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Zap className="w-4 h-4 mr-2 text-accent" />
              <span className="text-sm font-semibold">JHC 2025</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                National Research
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
                Conference
              </span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              className="text-lg md:text-xl text-white/90 font-light min-h-[2rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span>
                {typedText}
                <motion.span
                  className="inline-block w-0.5 h-5 bg-accent ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>

            {/* Details */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-medium">December 1-2, 2025</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-medium">Jai Hind College, Mumbai</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                  onClick={() => window.open('https://tinyurl.com/3p4s4zhj', '_blank', 'noopener,noreferrer')}
                >
                  Register Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Foreground video with controls */}
          <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black mx-auto mt-8 lg:mt-0 flex items-center justify-center">
            <video
              className="w-full h-full object-cover rounded-2xl"
              src="/lovable-uploads/8327799-uhd_3840_2160_25fps.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/lovable-uploads/placeholder.svg"
              style={{ background: '#000' }}
            />
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;