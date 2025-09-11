
import { motion } from 'framer-motion';
import { FileText, Award, CheckCircle, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CallForPapers = () => {
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
      icon: "🧠"
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
      icon: "📊"
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
      icon: "🧰"
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
      icon: "🚀"
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
      icon: "⚖️"
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
      icon: "🌐"
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
    <section id="call-for-papers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            📝 Call for Papers
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Submit Your Research</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your groundbreaking research and innovative solutions with the global academic and industry community
          </p>
        </motion.div>

        {/* Research Tracks as Accordion drop cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-2">Research Tracks</h3>
          <p className="text-center text-sm text-muted-foreground mb-10">Next-Gen Intelligence: AI, Analytics and Data Science Across Global Domains</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchTracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`track-${index}`}>
                        <AccordionTrigger className="px-4 py-4 hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            <span className="text-2xl">{track.icon}</span>
                            <span className="text-base font-semibold">{track.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="px-4 pb-4">
                            <ul className="space-y-2">
                              {track.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{topic}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4">
                              <Button size="sm" variant="outline">Submit to this track</Button>
                            </div>
                          </div>
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
