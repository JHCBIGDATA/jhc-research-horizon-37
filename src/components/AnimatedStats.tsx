
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem = ({ end, label, suffix = '', duration = 2 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const now = Date.now();
        const elapsed = (now - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.15)"
      }}
    >
      <motion.div
        className="text-4xl font-bold text-accent mb-2"
        animate={{ scale: count > 0 ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-white/90 font-medium">{label}</div>
    </motion.div>
  );
};

const AnimatedStats = () => {
  const stats = [
    { end: 500, label: 'Expected Participants', suffix: '+' },
    { end: 50, label: 'Research Papers', suffix: '+' },
    { end: 20, label: 'Industry Experts', suffix: '+' },
    { end: 15, label: 'Academic Sessions', suffix: '+' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          end={stat.end}
          label={stat.label}
          suffix={stat.suffix}
          duration={2 + index * 0.2}
        />
      ))}
    </div>
  );
};

export default AnimatedStats;
