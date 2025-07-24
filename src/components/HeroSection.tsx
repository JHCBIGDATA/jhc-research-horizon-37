
import { Calendar, MapPin, Award, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const scrollToRegistration = () => {
    const element = document.querySelector('#registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector('#participation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* New floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div 
              className="flex items-center space-x-4 mb-6"
              variants={itemVariants}
            >
              <motion.img 
                src="/lovable-uploads/d2f7f0e5-4f0d-4bb2-aa0d-4878f59f8133.png" 
                alt="Jai Hind College Logo" 
                className="h-16 w-auto"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.img 
                src="/lovable-uploads/b5dc686a-cb70-4b46-8f4f-01bc0708af76.png" 
                alt="75th Anniversary Logo" 
                className="h-16 w-auto"
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                JHC 2025
                <motion.span 
                  className="block text-3xl md:text-5xl text-accent bg-clip-text bg-gradient-to-r from-accent to-accent/80"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  National Research Conference
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-6 text-white/90"
                variants={itemVariants}
              >
                "Empowering Innovation through Generative AI, Data Science, and Analytics"
              </motion.p>
              <motion.p 
                className="text-lg text-white/80 mb-8"
                variants={itemVariants}
              >
                Presented by the Department of Big Data Analytics, Jai Hind College (Empowered Autonomous)
              </motion.p>
            </motion.div>

            {/* Enhanced cards with better animations */}
            <motion.div 
              className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              variants={itemVariants}
            >
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }} 
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-5 flex items-center space-x-4 relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Calendar className="h-10 w-10 text-accent group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-lg">Conference Dates</p>
                      <p className="text-sm text-white/90 font-medium">21st-22nd November 2025</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }} 
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-5 flex items-center space-x-4 relative z-10">
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <MapPin className="h-10 w-10 text-accent group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-lg">Venue</p>
                      <p className="text-sm text-white/90 font-medium">Jai Hind College, Mumbai</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Add countdown timer */}
            <motion.div variants={itemVariants}>
              <CountdownTimer />
            </motion.div>

            <motion.div 
              className="space-y-4 mb-8"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-start space-x-4 p-5 bg-white/10 rounded-xl backdrop-blur-md border border-white/20"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.18)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Award className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <p className="text-base font-semibold mb-1">
                    Publication Opportunity
                  </p>
                  <p className="text-sm text-white/90">
                    Selected research papers will be published in UGC CARE or International Journals
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4 p-5 bg-white/10 rounded-xl backdrop-blur-md border border-white/20"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.18)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Users className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <p className="text-base font-semibold mb-1">
                    Registration Status
                  </p>
                  <p className="text-sm text-white/90">
                    Abstract Submission & Registration opening soon
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-accent text-black hover:bg-accent/90 text-lg px-10 py-4 shadow-2xl hover:shadow-accent/25 transition-all duration-300 font-semibold relative overflow-hidden group"
                  onClick={scrollToRegistration}
                >
                  <span className="relative z-10">Register Now</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-10 py-4 backdrop-blur-sm font-semibold transition-all duration-300 relative overflow-hidden group"
                  onClick={scrollToRegistration}
                >
                  <span className="relative z-10">Submit Abstract</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced right column with better image effects */}
          <motion.div 
            className="hidden lg:block relative"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-2xl group">
              <motion.img 
                src="/lovable-uploads/55c0f04d-04fc-434a-8d75-12316a82aab8.png" 
                alt="Conference Venue" 
                className="rounded-2xl shadow-2xl w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <motion.div 
                className="absolute bottom-6 left-6 right-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.p 
                  className="text-lg font-bold mb-2"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Jai Hind College Campus
                </motion.p>
                <p className="text-sm opacity-90 font-medium">Where innovation meets excellence in research</p>
              </motion.div>
              
              {/* Enhanced floating elements */}
              <motion.div
                className="absolute top-6 right-6 w-3 h-3 bg-accent rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-16 right-12 w-2 h-2 bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <ChevronDown className="h-6 w-6 text-white/60 hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
