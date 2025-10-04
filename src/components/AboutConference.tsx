
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, TrendingUp, Users, Calendar } from 'lucide-react';

const AboutConference = () => {
  const stats = [
    { 
      value: "500+", 
      label: "Expected Participants", 
      delay: 0.1,
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    { 
      value: "50+", 
      label: "Research Papers", 
      delay: 0.2,
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    { 
      value: "20+", 
      label: "Industry Experts", 
      delay: 0.3,
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    { 
      value: "2", 
      label: "Conference Days", 
      delay: 0.4,
      icon: Calendar,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="about-conference" className="py-12 bg-gradient-to-br from-primary/5 via-accent/3 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-accent/15 to-primary/15 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-accent/20"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mr-2"
            >
              🎯
            </motion.span>
            About Conference
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            JHC 2025 Research Conference
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
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
              <Card className={`text-center bg-gradient-to-br ${stat.bgGradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-4 md:p-6 relative z-10">
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <motion.div
                    className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: stat.delay + 0.3, type: "spring", stiffness: 400 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium leading-tight">{stat.label}</p>
                </CardContent>
                
                {/* Floating particles effect */}
                <motion.div
                  className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60`}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className={`absolute bottom-2 left-2 w-1.5 h-1.5 bg-gradient-to-r ${stat.gradient} rounded-full opacity-40`}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutConference;
