
import { motion } from 'framer-motion';

const LogoLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center">
        {/* Main logo container with elegant animations */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          {/* Logo with subtle glow */}
          <motion.div
            className="relative z-10"
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/lovable-uploads/72b76a7a-0668-4558-8e4b-58623c4cf83d.png" 
              alt="Jai Hind College Logo" 
              className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
            />
          </motion.div>

          {/* Elegant rotating rings */}
          <motion.div
            className="absolute inset-0 border-2 border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute inset-[-8px] border border-white/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Subtle pulsing glow */}
          <motion.div
            className="absolute inset-[-16px] bg-white/5 rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Modern loading text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
            JAI HIND COLLEGE
          </h2>
          
          {/* Elegant loading indicator */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0
              }}
            />
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.2
              }}
            />
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.4
              }}
            />
          </div>

          <motion.p
            className="text-white/70 text-sm tracking-wider uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Conference
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default LogoLoader;
