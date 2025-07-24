
import { motion } from 'framer-motion';
import { FileText, Award, CheckCircle, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CallForPapers = () => {
  const researchTracks = [
    {
      title: "Generative AI & Large Language Models",
      topics: [
        "Foundation Models and Pre-training",
        "Prompt Engineering and Fine-tuning",
        "Multimodal AI Systems",
        "AI Safety and Alignment",
        "Generative AI Applications"
      ],
      icon: "🤖"
    },
    {
      title: "Data Science & Analytics",
      topics: [
        "Big Data Processing and Management",
        "Predictive Analytics and Forecasting",
        "Data Visualization and Storytelling",
        "Statistical Learning Methods",
        "Real-time Analytics Systems"
      ],
      icon: "📊"
    },
    {
      title: "Machine Learning & Deep Learning",
      topics: [
        "Neural Network Architectures",
        "Reinforcement Learning",
        "Transfer Learning and Domain Adaptation",
        "Federated Learning",
        "Explainable AI (XAI)"
      ],
      icon: "🧠"
    },
    {
      title: "Computer Vision & Image Processing",
      topics: [
        "Object Detection and Recognition",
        "Medical Image Analysis",
        "Autonomous Systems and Robotics",
        "Augmented Reality Applications",
        "3D Vision and Reconstruction"
      ],
      icon: "👁️"
    },
    {
      title: "Natural Language Processing",
      topics: [
        "Sentiment Analysis and Opinion Mining",
        "Information Extraction",
        "Machine Translation",
        "Conversational AI and Chatbots",
        "Multilingual NLP for Indian Languages"
      ],
      icon: "💬"
    },
    {
      title: "IoT & Edge Computing",
      topics: [
        "Smart Cities and Infrastructure",
        "Industrial IoT and Industry 4.0",
        "Edge AI and Distributed Computing",
        "Sensor Networks and Data Fusion",
        "IoT Security and Privacy"
      ],
      icon: "🌐"
    }
  ];

  const submissionTypes = [
    {
      type: "Abstract Submission",
      description: "Submit your research abstract (up to 500 words)",
      requirements: ["Novel methodology or significant findings", "Clear research objectives", "Preliminary results or expected outcomes"],
      deadline: "25th August 2025"
    },
    {
      type: "Full Research Papers",
      description: "Complete research papers (8-12 pages)",
      requirements: ["Comprehensive literature review", "Detailed methodology", "Experimental validation and results"],
      deadline: "25th September 2025"
    },
    {
      type: "Revised Paper Submission",
      description: "Final camera-ready papers with revisions",
      requirements: ["Address reviewer feedback", "Final formatting compliance", "Complete registration payment"],
      deadline: "25th October 2025"
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

        {/* Research Tracks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Research Tracks</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchTracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="text-3xl mb-2">{track.icon}</div>
                    <CardTitle className="text-lg">{track.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {track.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submission Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Submission Timeline</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {submissionTypes.map((submission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <Badge variant="secondary">{submission.deadline}</Badge>
                    </div>
                    <CardTitle className="text-xl">{submission.type}</CardTitle>
                    <p className="text-muted-foreground">{submission.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary">Requirements:</h4>
                      <ul className="space-y-1">
                        {submission.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <motion.div
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Submission Guidelines</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Papers must be original and not published elsewhere</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Use IEEE format for paper submission</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Double-blind review process</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Plagiarism check will be conducted</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Download Paper Template
              </Button>
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Submission Guidelines PDF
              </Button>
            </div>
          </div>
        </motion.div>

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
