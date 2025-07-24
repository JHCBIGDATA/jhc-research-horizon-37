
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Building, Calendar, MapPin, Globe, Target, Lightbulb, Network, GraduationCap, Trophy, Briefcase, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const achievements = [
    {
      icon: Award,
      title: "NAAC A++ Grade",
      description: "Accredited with the highest grade for academic excellence and quality",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "75+ Years Legacy",
      description: "Seven and a half decades of educational excellence and innovation",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Leading institution in research and academic publications",
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: Building,
      title: "Empowered Autonomous",
      description: "Recognized autonomous status with academic freedom",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const conferenceFeatures = [
    {
      icon: Calendar,
      title: "2-Day Intensive Program",
      description: "Comprehensive conference spanning two full days with keynote sessions, technical presentations, panel discussions, and networking events.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: MapPin,
      title: "Hybrid Format",
      description: "Both in-person and virtual participation options, enabling global accessibility while maintaining the benefits of face-to-face interactions.",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Attracting participants from across India and internationally, creating a diverse platform for cross-cultural academic exchange.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Target,
      title: "Research Focus",
      description: "Emphasis on practical applications, real-world problem solving, and translating research into industry-relevant solutions.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Showcasing cutting-edge research, prototype demonstrations, and breakthrough technologies in AI, ML, and Data Analytics.",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: Network,
      title: "Collaboration Platform",
      description: "Facilitating meaningful connections between researchers, industry experts, startups, and academic institutions for future collaborations.",
      color: "bg-teal-50 border-teal-200"
    }
  ];

  const highlights = [
    {
      image: "/lovable-uploads/138790b0-7483-4f48-ae16-2db2f83b5253.png",
      title: "Paper Presentation Sessions",
      description: "Outstanding research presentations from 2024 conference"
    },
    {
      image: "/lovable-uploads/1d3f69d9-45ec-45a7-a1fd-2b2c47667a56.png",
      title: "Organizing Team Excellence",
      description: "Dedicated faculty and staff ensuring conference success"
    },
    {
      image: "/lovable-uploads/49ef0f2c-2f2a-4f3a-bc3f-3dc7fcb42a61.png",
      title: "Academic Collaboration",
      description: "Industry experts and academicians sharing insights"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Participants", gradient: "from-blue-500 to-cyan-500" },
    { icon: BookOpen, value: "150+", label: "Research Papers", gradient: "from-green-500 to-emerald-500" },
    { icon: Award, value: "25+", label: "Best Paper Awards", gradient: "from-yellow-500 to-orange-500" },
    { icon: Trophy, value: "95%", label: "Satisfaction Rate", gradient: "from-purple-500 to-pink-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const staggeredVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center bg-white/15 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/30 shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
            >
              <span className="mr-2">✨</span>
              Premier Research Conference 2025
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              About{" "}
              <motion.span 
                className="bg-gradient-to-r from-accent via-yellow-300 to-orange-400 bg-clip-text text-transparent inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                JHC 2025
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl max-w-4xl mx-auto text-white/95 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              Discover the legacy of excellence behind our premier research conference, 
              where innovation meets tradition in the heart of academic brilliance.
            </motion.p>
            
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20 text-sm">
                <span className="font-semibold">🎓 Academic Excellence</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20 text-sm">
                <span className="font-semibold">🚀 Innovation Hub</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20 text-sm">
                <span className="font-semibold">🌍 Global Reach</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About College Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-muted/40 to-primary/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-primary/15 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-bold mb-6 border border-primary/30 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(var(--primary), 0.2)"
              }}
            >
              <span className="mr-2">🏛️</span>
              About Our Institution
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Jai Hind College
            </h2>
            
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-orange-400 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A premier educational institution committed to academic excellence, innovation, 
              and holistic development for over seven decades.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/55c0f04d-04fc-434a-8d75-12316a82aab8.png" 
                alt="Jai Hind College Campus" 
                className="rounded-xl shadow-xl w-full relative z-10 hover:scale-105 transition-all duration-500 border border-white/20"
              />
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  Legacy of Excellence
                </h3>
                
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1948, Jai Hind College stands as a beacon of educational excellence in Mumbai, Maharashtra. Named after the patriotic salutation "Jai Hind," the institution embodies the spirit of national pride and academic integrity.
                  </p>
                  
                  <p>
                    Accredited with the coveted NAAC A++ grade and granted empowered autonomous status, Jai Hind College has established itself as a center of academic excellence and innovation.
                  </p>
                  
                  <p>
                    The college's commitment extends beyond academics to encompass research, innovation, and community service with state-of-the-art infrastructure and modern facilities.
                  </p>
                </div>
              </div>
              
              <motion.div 
                className="space-y-4"
                variants={staggeredVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "🏆 NAAC A++ Accredited Institution with Autonomous Status",
                  "🎓 75+ Years of Academic Excellence and Innovation",
                  "🔬 State-of-the-art Research Facilities",
                  "🌟 4,000+ Students and Distinguished Alumni Network"
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 group"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <p className="text-muted-foreground text-base group-hover:text-primary transition-colors duration-300">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02
                }}
                transition={{ 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  
                  <CardHeader className="pb-4 relative z-10">
                    <motion.div 
                      className={`mx-auto w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <achievement.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conference Overview Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-orange-400/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-accent/15 backdrop-blur-sm text-accent px-6 py-3 rounded-full text-sm font-bold mb-6 border border-accent/30 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(var(--accent), 0.2)"
              }}
            >
              <span className="mr-2">🚀</span>
              Conference Overview
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              About the Conference
            </h2>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-accent via-primary to-orange-400 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A premier 2-day National Research Conference fostering innovation, collaboration, and 
              knowledge exchange in Generative AI, Machine Learning, Data Science, and Advanced Analytics.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="space-y-6"
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  Conference Vision & Mission
                </h3>
                
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    The JHC 2025 National Research Conference represents a groundbreaking initiative that brings together the brightest minds in artificial intelligence, data science, and analytics.
                  </p>
                  
                  <p>
                    Our mission extends beyond traditional academic conferences by fostering meaningful dialogue between researchers, industry practitioners, and students.
                  </p>
                  
                  <p>
                    The conference features comprehensive sessions covering generative AI applications, machine learning algorithms, and their applications across various domains.
                  </p>
                </div>
              </div>
              
              <motion.div 
                className="space-y-3"
                variants={staggeredVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "🎯 Foster breakthrough innovations in AI and data science",
                  "🔬 Promote interdisciplinary collaboration",
                  "🤝 Create lasting partnerships between researchers",
                  "🌟 Showcase cutting-edge research and prototypes"
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 group"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-accent to-orange-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <p className="text-muted-foreground text-base leading-relaxed group-hover:text-primary transition-colors duration-300">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/49ef0f2c-2f2a-4f3a-bc3f-3dc7fcb42a61.png" 
                alt="Conference Highlights" 
                className="rounded-xl shadow-xl w-full relative z-10 hover:scale-105 transition-all duration-500 border border-white/20"
              />
            </motion.div>
          </div>

          {/* Conference Features */}
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Conference Features</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conferenceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02
                  }}
                  transition={{ 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <Card className={`hover:shadow-lg transition-all duration-500 h-full border-2 ${feature.color} group relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardHeader className="pb-4 relative z-10">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-white/90 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-bold mb-6 border border-primary/30 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.95)"
              }}
            >
              <span className="mr-2">📊</span>
              Past Success
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Conference Highlights 2024
            </h2>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-orange-400 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Last year's conference was a tremendous success, bringing together brilliant minds 
              and fostering groundbreaking research collaborations across the globe.
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05
                }}
                transition={{ 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <Card className="text-center bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <motion.div 
                      className={`mx-auto w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 10
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-2xl md:text-3xl font-bold text-primary mb-2"
                      initial={{ scale: 0.3, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <p className="text-muted-foreground font-semibold text-sm">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Gallery */}
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02
                }}
                transition={{ 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <Card className="overflow-hidden bg-white/95 shadow-lg hover:shadow-xl transition-all duration-500 border-0 group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-white font-bold text-sm">Featured Moment</div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
