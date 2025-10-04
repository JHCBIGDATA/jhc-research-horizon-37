
import { motion } from 'framer-motion';
import { FileText, Award, CheckCircle, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

const CallForPapers = () => {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [openTrack, setOpenTrack] = useState<string | null>(null);

  // Auto-open/close functionality
  const handleTrackHover = (index: number) => {
    setHoveredTrack(index);
    setOpenTrack(`track-${index}`);
  };

  const handleTrackLeave = () => {
    setHoveredTrack(null);
    // Fast close with slight delay to prevent flickering
    setTimeout(() => {
      setOpenTrack(null);
    }, 150);
  };
  const researchTracks = [
    {
      title: "Artificial Intelligence & Machine Learning",
      topics: [
        "Deep Learning architectures & applications",
        "Explainable AI (XAI) & ethical AI",
        "Reinforcement learning techniques",
        "Generative AI & foundation models",
        "AI in natural language processing (NLP, LLMs)",
        "AI in robotics & autonomous systems",
        "AI for sustainability & environmental monitoring",
        "Hybrid AI models (symbolic + neural)"
      ],
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "Data Science & Big Data Analytics",
      topics: [
        "Predictive & prescriptive analytics",
        "Data visualization & storytelling techniques",
        "Social media analytics & sentiment analysis",
        "Real-time stream analytics (Kafka, Spark)",
        "Big data storage & management (Hadoop ecosystem, cloud)",
        "Educational data mining & learning analytics",
        "Business intelligence frameworks & dashboards",
        "Data-driven decision making in various domains"
      ],
      icon: "📊",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Data Engineering & Infrastructure",
      topics: [
        "Data pipelines & ETL optimization",
        "Cloud-based data platforms (AWS, Azure, GCP)",
        "Data lakes & data warehouses",
        "Data integration & interoperability",
        "Edge computing & IoT data processing",
        "High-performance computing for big data",
        "Database optimization & query performance",
        "Open-source tools for data engineering"
      ],
      icon: "🧰",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Emerging Technologies in AI & Analytics",
      topics: [
        "Quantum machine learning",
        "AI in blockchain & decentralized systems",
        "AI for cybersecurity & threat intelligence",
        "Computer vision in industrial applications",
        "Digital twins & simulation modeling",
        "AI in healthcare & bioinformatics",
        "AI for smart cities & IoT ecosystems",
        "AI in climate change research"
      ],
      icon: "🚀",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "Ethics, Privacy & Governance in AI",
      topics: [
        "Responsible AI frameworks & governance models",
        "AI policy, law, and regulation",
        "Data privacy & anonymization techniques",
        "Bias detection & mitigation in AI models",
        "Security & trust in AI systems",
        "Impact of AI on employment & society",
        "Ethical challenges in autonomous decision-making",
        "AI transparency & accountability measures"
      ],
      icon: "⚖️",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      title: "Applications of AI & Analytics in Diverse Domains",
      topics: [
        "AI in finance & risk management",
        "AI in agriculture & food security",
        "AI in supply chain & logistics optimization",
        "AI in education & personalized learning",
        "AI in media & entertainment",
        "AI in healthcare diagnostics & treatment planning",
        "AI for disaster prediction & management",
        "AI for public policy & governance"
      ],
      icon: "🌐",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50"
    }
  ];

  const submissionTypes = [
    {
      type: "Call for Papers & Registration",
      description: "Announcement and registration start",
      requirements: ["Follow conference template", "Ensure originality", "Max 15% similarity"],
      deadline: "September 5, 2025"
    },
    {
      type: "Abstract Submission",
      description: "Max 300 words (Title, Author info, Keywords, Abstract)",
      requirements: ["Clarity and relevance", "Original contribution", "Adhere to word limit"],
      deadline: "September 25, 2025"
    },
    {
      type: "Abstract Acceptance Notification",
      description: "Decision on submitted abstracts",
      requirements: ["Check email notification", "Prepare full paper if accepted"],
      deadline: "September 30, 2025"
    },
    {
      type: "Full Paper Submission",
      description: "6–8 pages, conference template, plagiarism ≤ 15%",
      requirements: ["Follow template strictly", "Include methodology & results", "Ensure proper citations"],
      deadline: "October 15, 2025"
    }
  ];

  return (
    <section id="call-for-papers" className="py-12 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
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
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-primary/15 to-accent/15 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mr-2"
            >
              📝
            </motion.span>
            Call for Papers
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Submit Your Research
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Share your groundbreaking research and innovative solutions with the global academic and industry community
          </motion.p>
        </motion.div>

        {/* Research Tracks as Enhanced Cards */}
        <div className="mb-12">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-primary text-sm font-medium">🔬 Research Areas</span>
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Research Tracks
            </h3>
            <p className="text-center text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-4">
              Next-Gen Intelligence: AI, Analytics and Data Science Across Global Domains
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {researchTracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                onMouseEnter={() => handleTrackHover(index)}
                onMouseLeave={handleTrackLeave}
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:shadow-primary/10">
                  {/* Gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredTrack === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Decorative corner elements */}
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-full"
                    initial={{ x: 10, y: -10, scale: 1 }}
                    animate={{ 
                      x: hoveredTrack === index ? 10 : 10,
                      y: hoveredTrack === index ? -10 : -10,
                      scale: hoveredTrack === index ? 1.5 : 1 
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/10 to-transparent rounded-full"
                    initial={{ x: -8, y: 8, scale: 1 }}
                    animate={{ 
                      x: hoveredTrack === index ? -8 : -8,
                      y: hoveredTrack === index ? 8 : 8,
                      scale: hoveredTrack === index ? 1.25 : 1 
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  
                  <CardContent className="p-0 relative z-10">
                    <Accordion 
                      type="single" 
                      collapsible 
                      value={openTrack || undefined}
                      onValueChange={() => {}} // Disable manual control
                    >
                      <AccordionItem value={`track-${index}`} className="border-0">
                        <AccordionTrigger 
                          className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline transition-all duration-300 rounded-t-lg pointer-events-none"
                          style={{
                            backgroundColor: hoveredTrack === index ? 'rgba(255,255,255,0.3)' : 'transparent'
                          }}
                        >
                          <div className="flex items-center gap-3 sm:gap-4 text-left">
                            <motion.div
                              className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20 transition-all duration-300"
                              animate={{ 
                                borderColor: hoveredTrack === index ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.2)',
                                rotate: hoveredTrack === index ? 360 : 0
                              }}
                              transition={{ duration: 0.6 }}
                            >
                              <motion.span 
                                className="text-xl sm:text-2xl"
                                animate={{ 
                                  scale: hoveredTrack === index ? 1.1 : 1 
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {track.icon}
                              </motion.span>
                            </motion.div>
                            <div className="flex-1">
                              <motion.span 
                                className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 transition-colors duration-300 leading-tight block"
                                animate={{ 
                                  color: hoveredTrack === index ? '#3b82f6' : '#1f2937' 
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {track.title}
                              </motion.span>
                              <motion.span 
                                className="text-xs text-muted-foreground block mt-1"
                                animate={{ 
                                  opacity: hoveredTrack === index ? 1 : 0.7 
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {track.topics.length} research areas
                              </motion.span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <motion.div 
                            className="px-4 sm:px-6 pb-4 sm:pb-6 bg-gradient-to-br from-white/80 to-gray-50/50"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: openTrack === `track-${index}` ? 1 : 0,
                              height: openTrack === `track-${index}` ? 'auto' : 0
                            }}
                            transition={{ 
                              duration: 0.4, 
                              ease: "easeInOut",
                              opacity: { duration: 0.2 }
                            }}
                          >
                            {/* Topics grid */}
                            <div className="grid gap-2 sm:gap-3 mb-4">
                              {track.topics.map((topic, topicIndex) => (
                                <motion.div
                                  key={topic}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ 
                                    opacity: openTrack === `track-${index}` ? 1 : 0,
                                    x: openTrack === `track-${index}` ? 0 : -20
                                  }}
                                  transition={{ 
                                    delay: openTrack === `track-${index}` ? topicIndex * 0.03 : 0, 
                                    duration: 0.3 
                                  }}
                                  className="group/topic"
                                >
                                  <div className="flex items-start space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 border border-transparent hover:border-primary/10">
                                    <motion.div
                                      whileHover={{ scale: 1.2, rotate: 360 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                                    </motion.div>
                                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium group-hover/topic:text-primary transition-colors duration-300">
                                      {topic}
                                    </span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                            
                            {/* Enhanced track info with better styling */}
                            <motion.div 
                              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20 backdrop-blur-sm"
                              initial={{ opacity: 0, y: 20, scale: 0.95 }}
                              animate={{ 
                                opacity: openTrack === `track-${index}` ? 1 : 0,
                                y: openTrack === `track-${index}` ? 0 : 20,
                                scale: openTrack === `track-${index}` ? 1 : 0.95
                              }}
                              transition={{ delay: 0.2, duration: 0.4 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              {/* Animated background elements */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                              
                              <div className="relative p-4 sm:p-5">
                                <div className="flex items-center gap-3">
                                  <motion.div
                                    animate={{ 
                                      scale: [1, 1.1, 1],
                                      rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{ 
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                    className="flex-shrink-0"
                                  >
                                    <span className="text-lg">✨</span>
                                  </motion.div>
                                  <div>
                                    <p className="text-sm sm:text-base text-primary font-bold mb-1">
                                      Ready to contribute?
                                    </p>
                                    <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                                      Submit your groundbreaking research in this track via our comprehensive registration portal
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Removed Important Dates grid as per request (kept in Registration section) */}

        {/* Removed Submission Guidelines block as per request */}

        {/* Publication Opportunities */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Publication Opportunities</h3>
              <p className="text-muted-foreground mb-6">
                Selected high-quality papers will be recommended for publication in:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-primary">UGC CARE Listed Journals</h4>
                  <p className="text-sm text-muted-foreground">Peer-reviewed publication in recognized journals</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-primary">International Journals</h4>
                  <p className="text-sm text-muted-foreground">Global reach with international editorial boards</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CallForPapers;
