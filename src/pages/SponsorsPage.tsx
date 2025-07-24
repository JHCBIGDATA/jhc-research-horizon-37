
import { motion } from 'framer-motion';
import { Clock, Star, Sparkles, Building2, Mail, Calendar, MapPin, ArrowRight, Zap, Trophy, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SponsorsPage = () => {
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

  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
  };

  const floatingTransition = {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const
  };

  const sponsorTiers = [
    {
      name: "Platinum Sponsors",
      icon: Star,
      color: "text-yellow-400",
      bgColor: "from-yellow-400/10 to-yellow-600/5",
      borderColor: "border-yellow-400/20",
      description: "Premier partnership opportunities",
      benefits: ["Logo on all materials", "Keynote speaking slot", "Premium booth space"]
    },
    {
      name: "Gold Sponsors", 
      icon: Building2,
      color: "text-yellow-500",
      bgColor: "from-yellow-500/10 to-yellow-700/5",
      borderColor: "border-yellow-500/20",
      description: "Strategic conference partners",
      benefits: ["Conference materials", "Exhibition space", "Networking access"]
    },
    {
      name: "Silver Sponsors",
      icon: Sparkles,
      color: "text-gray-400",
      bgColor: "from-gray-400/10 to-gray-600/5",
      borderColor: "border-gray-400/20",
      description: "Supporting academic excellence",
      benefits: ["Logo placement", "Digital recognition", "Event access"]
    }
  ];

  const features = [
    {
      icon: Users,
      title: "500+ Attendees",
      description: "Connect with researchers and students"
    },
    {
      icon: Trophy,
      title: "Premium Exposure",
      description: "Brand visibility across all channels"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Align with cutting-edge research"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-primary/15 to-accent/15 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative Elements */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center space-x-4 mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <motion.div
                animate={floatingAnimation}
                transition={floatingTransition}
                className="inline-block"
              >
                <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6">
                Coming Soon
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-4">
                We're preparing an amazing lineup of sponsors for JHC 2025
              </p>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <feature.icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
                <motion.div
                  className="flex items-center justify-center space-x-3 text-accent mb-4"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="h-6 w-6" />
                  <span className="text-xl font-semibold">Sponsorship opportunities will be announced soon!</span>
                  <Sparkles className="h-6 w-6" />
                </motion.div>

                <motion.p 
                  className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto"
                  variants={itemVariants}
                >
                  Join us as a sponsor and be part of India's premier research conference on 
                  <span className="text-primary font-semibold"> Generative AI, Data Science, and Analytics</span>. 
                  Connect with leading researchers, students, and industry professionals while showcasing your commitment to innovation.
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Sponsor Tiers */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4"
            >
              {sponsorTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <Card className={`h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${tier.bgColor} border-2 ${tier.borderColor} backdrop-blur-sm relative overflow-hidden`}>
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl"></div>
                    
                    <CardHeader className="text-center pb-4 relative z-10">
                      <motion.div 
                        className={`mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-xl transition-shadow duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <tier.icon className={`h-8 w-8 ${tier.color}`} />
                      </motion.div>
                      <CardTitle className="text-xl text-foreground mb-2">{tier.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-r from-card via-card/95 to-card border-t-4 border-primary rounded-2xl p-8 mx-4 relative overflow-hidden shadow-2xl">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Trophy className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">Interested in Sponsoring?</h3>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                    Get early access to sponsorship packages and partnership opportunities. 
                    Be part of shaping the future of AI and data science education.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <a href="/contact" className="flex items-center space-x-2">
                          <span>Contact Us for Partnership</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </motion.div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>Quick Response</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Flexible Packages</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsorsPage;
