
import { motion } from 'framer-motion';

interface VisualSeparatorProps {
  variant: 'wave' | 'lines' | 'dots';
}

const VisualSeparator = ({ variant }: VisualSeparatorProps) => {
  const WaveVariant = () => (
    <div className="relative h-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"
        animate={{
          x: [-100, 100],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="currentColor"
            className="text-gradient-to-r from-primary/30 to-accent/30"
            animate={{
              d: [
                "M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z",
                "M0,30 Q300,60 600,30 T1200,30 L1200,0 L0,0 Z",
                "M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </div>
  );

  const LinesVariant = () => (
    <div className="relative h-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );

  const DotsVariant = () => (
    <div className="relative h-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center space-x-3">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-br from-primary/60 to-accent/60"
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {variant === 'wave' && <WaveVariant />}
      {variant === 'lines' && <LinesVariant />}
      {variant === 'dots' && <DotsVariant />}
    </motion.div>
  );
};

export default VisualSeparator;
