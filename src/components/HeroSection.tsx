import { Calendar, MapPin, Users, Award, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {

  const [videoReady, setVideoReady] = useState(false);
  const [foregroundVideoReady, setForegroundVideoReady] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const fgVideoRef = useRef<HTMLVideoElement>(null);

  // Aggressive video preloading and optimization
  useEffect(() => {
    // Preload both videos immediately
    if (bgVideoRef.current) {
      bgVideoRef.current.load();
    }
    if (fgVideoRef.current) {
      fgVideoRef.current.load();
    }

    // Prefetch video resources
    const linkBg = document.createElement('link');
    linkBg.rel = 'prefetch';
    linkBg.as = 'video';
    linkBg.href = 'https://res.cloudinary.com/dhrixwtfw/video/upload/q_auto:low,w_1920,f_mp4/v1760102494/12777808_2560_1440_30fps_rwfmun.mp4';
    document.head.appendChild(linkBg);

    const linkFg = document.createElement('link');
    linkFg.rel = 'prefetch';
    linkFg.as = 'video';
    linkFg.href = 'https://res.cloudinary.com/dhrixwtfw/video/upload/q_auto:low,w_1280,f_mp4/v1760102488/8327799-uhd_3840_2160_25fps_qaftbp.mp4';
    document.head.appendChild(linkFg);

    return () => {
      document.head.removeChild(linkBg);
      document.head.removeChild(linkFg);
    };
  }, []);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.playbackRate = 1.2;
    }
  }, [videoReady]);



  return (
    <section id="home" className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Poster Image */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${videoReady ? 'opacity-0' : 'opacity-100'}`}>
          <img
            src="https://res.cloudinary.com/dhrixwtfw/video/upload/q_auto:low,w_1920,f_jpg/v1760102494/12777808_2560_1440_30fps_rwfmun.jpg"
            alt="Conference background"
            className="w-full h-full object-cover"
            draggable="false"
            loading="eager"
            fetchpriority="high"
            onLoad={() => setPosterLoaded(true)}
          />
        </div>
        
        {/* Video */}
        <video
          ref={bgVideoRef}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          src="https://res.cloudinary.com/dhrixwtfw/video/upload/q_auto:low,w_1920,f_mp4/v1760102494/12777808_2560_1440_30fps_rwfmun.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.playbackRate = 1.2;
              bgVideoRef.current.play().catch(() => {});
            }
          }}
          onError={() => setVideoReady(false)}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/70 to-accent/70"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/25 via-transparent to-primary/30"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top info bar - hidden on mobile */}
          <motion.div
            className="hidden md:flex flex-wrap items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="font-medium">February 7, 2026</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-medium">Jai Hind College, Mumbai</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Users className="w-4 h-4 text-accent" />
              <span className="font-medium">Research • Academia • Industry</span>
            </div>
          </motion.div>

          {/* Main hero content - centered */}
          <div className="text-center max-w-5xl mx-auto space-y-4">
            
            {/* NRC Logo Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex justify-center"
            >
              <video 
                src="/lovable-uploads/rr.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-2xl rounded-full bg-white/10 backdrop-blur-sm"
              />
            </motion.div>
            
            {/* Conference badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">National Research Conference 2026</span>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-[1.2]">
                <span className="block bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent pb-1">
                  Next Gen Intelligence
                </span>
                <span className="block text-white mt-3">
                  AI, Analytics & Data Science
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-medium mt-4">
                Across Global Domains
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join leading researchers, academicians, and industry experts to present cutting-edge research and explore transformative applications across global domains.
            </motion.p>

            {/* Key Highlights - hidden on mobile */}
            <motion.div
              className="hidden md:flex flex-wrap items-center justify-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: "🎓", text: "Research Presentations" },
                { icon: "🏆", text: "Best Paper Awards" },
                { icon: "🤝", text: "Networking" },
                { icon: "📜", text: "Publication Opportunity" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-white/90">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="group bg-accent hover:bg-yellow-400 text-black font-bold px-8 py-4 text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                onClick={() => window.open('https://tinyurl.com/3p4s4zhj', '_blank', 'noopener,noreferrer')}
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-4 text-base rounded-lg backdrop-blur-sm transition-all duration-300"
                onClick={() => window.open('/Nationalconference_JHC_MSc_BDA.pdf', '_blank', 'noopener,noreferrer')}
              >
                <FileText className="mr-2 w-4 h-4" />
                View Brochure
              </Button>
            </motion.div>

            {/* Countdown timer */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <CountdownTimer compact />
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;