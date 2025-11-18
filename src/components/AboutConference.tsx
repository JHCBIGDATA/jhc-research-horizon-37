import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, TrendingUp, Users, Calendar } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AboutConference = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  
  const statsConfig = [
    { 
      end: 500,
      suffix: "+",
      label: "Expected Participants", 
      delay: 0.1,
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    { 
      end: 50,
      suffix: "+",
      label: "Research Papers", 
      delay: 0.2,
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    { 
      end: 20,
      suffix: "+",
      label: "Industry Experts", 
      delay: 0.3,
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    { 
      end: 2,
      suffix: "",
      label: "Conference Days", 
      delay: 0.4,
      icon: Calendar,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];
  
  const [stats, setStats] = useState(
    statsConfig.map(s => ({ ...s, current: 0 }))
  );

  useEffect(() => {
    if (isInView) {
      statsConfig.forEach((stat, index) => {
        const duration = 2000;
        const startTime = Date.now();
        
        const animate = () => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(stat.end * easeOutQuart);
          
          setStats(prev => {
            const newStats = [...prev];
            newStats[index] = { ...newStats[index], current: currentValue };
            return newStats;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        setTimeout(() => animate(), index * 200);
      });
    }
  }, [isInView]);

  return (
    <section id="about-conference" className="py-12 bg-gradient-to-br from-primary/5 via-accent/3 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-16 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border-0 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="mr-2">
              🎯
            </span>
            About Conference
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            JHC 2026 Research Conference
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A premier platform for showcasing cutting-edge research and fostering innovation 
            in the rapidly evolving fields of technology and data science
          </motion.p>
        </motion.div>

        {/* Enhanced Statistics */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: stat.delay, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className={`text-center bg-gradient-to-br ${stat.bgGradient} border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center transition-transform hover:scale-110 duration-300`}
                  >
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <motion.div
                    className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 sm:mb-2`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: stat.delay + 0.3, type: "spring", stiffness: 400 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.current}{stat.suffix}
                  </motion.div>
                  <p className="text-xs sm:text-sm md:text-sm text-muted-foreground font-medium leading-tight">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutConference;
