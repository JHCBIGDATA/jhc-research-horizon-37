
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { FileText, Award, CheckCircle, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CallForPapers = () => {
  // No hover or open state needed
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

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border-0 shadow-lg">
            <span className="mr-2">📝</span>
            Call for Papers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Submit Your Research
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Share your groundbreaking research and innovative solutions with the global academic and industry community
          </p>
        </div>

        {/* Research Tracks as Simple Cards (no animation) */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent border-0 px-4 py-2 rounded-full mb-4 shadow-lg">
              <span className="text-white text-sm font-bold">🔬 Research Areas</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Research Tracks
            </h3>
            <p className="text-center text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-4">
              Next-Gen Intelligence: AI, Analytics and Data Science Across Global Domains
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {researchTracks.map((track, idx) => (
              <Card key={track.title} className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-primary/5 border-0 shadow-lg">
                <CardContent className="p-0 relative z-10">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`track-${idx}`}>
                      <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 text-left">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20">
                            <span className="text-xl sm:text-2xl">{track.icon}</span>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 leading-tight block">
                              {track.title}
                            </span>
                            <span className="text-xs text-muted-foreground block mt-1">
                              {track.topics.length} research areas
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        {/* Topics grid */}
                        <div className="grid gap-2 sm:gap-3 mt-4 mb-2">
                          {track.topics.map((topic) => (
                            <div key={topic} className="flex items-start space-x-3 p-2 sm:p-3 rounded-lg border border-transparent">
                              <span className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0">✔️</span>
                              <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                                {topic}
                              </span>
                            </div>
                          ))}
                        </div>
                        {/* Track info */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20 backdrop-blur-sm mt-4 p-4 sm:p-5">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">✨</span>
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
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Removed Important Dates grid as per request (kept in Registration section) */}

        {/* Removed Submission Guidelines block as per request */}

        {/* Publication Opportunities */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-accent border-0 overflow-hidden shadow-xl">
            <CardContent className="p-8 relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <Award className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Publication Opportunities</h3>
                <p className="text-white/90 mb-6">
                  Selected high-quality papers will be recommended for publication in:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-primary">UGC CARE Listed Journals</h4>
                    <p className="text-sm text-muted-foreground">Peer-reviewed publication in recognized journals</p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-primary">International Journals</h4>
                    <p className="text-sm text-muted-foreground">Global reach with international editorial boards</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
