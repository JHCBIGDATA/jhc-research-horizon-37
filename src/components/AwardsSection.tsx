
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Gift, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AwardsSection = () => {
  const awards = [
    {
      title: "Best Research Paper Award",
      prize: "Recognition Certificate",
      description: "Recognizing outstanding original research with significant contribution to the field",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      criteria: [
        "Novel methodology or approach",
        "Significant experimental results",
        "Clear presentation and writing quality",
        "Potential for real-world impact"
      ]
    },
    {
      title: "Best Student Paper Award",
      prize: "Recognition Certificate",
      description: "Encouraging young researchers and recognizing exceptional student contributions",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      criteria: [
        "First author must be a student",
        "Innovative research approach",
        "Quality of experimental work",
        "Clarity of presentation"
      ]
    },
    {
      title: "Best Industry Case Study",
      prize: "Recognition Certificate",
      description: "Honoring practical applications and real-world implementations",
      icon: Star,
      color: "text-green-600",
      bgColor: "bg-green-50",
      criteria: [
        "Practical implementation details",
        "Measurable business impact",
        "Scalability and sustainability",
        "Innovation in application"
      ]
    },
    {
      title: "Best Presentation Award",
      prize: "Recognition Certificate",
      description: "Recognizing excellence in research communication and presentation skills",
      icon: Medal,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      criteria: [
        "Clear and engaging presentation",
        "Effective use of visuals",
        "Handling of Q&A session",
        "Time management"
      ]
    },
    {
      title: "Innovation in AI Award",
      prize: "Recognition Certificate",
      description: "Celebrating breakthrough innovations in artificial intelligence applications",
      icon: Gift,
      color: "text-red-600",
      bgColor: "bg-red-50",
      criteria: [
        "Novel AI application or technique",
        "Potential for societal impact",
        "Technical innovation",
        "Feasibility and scalability"
      ]
    },
    {
      title: "People's Choice Award",
      prize: "Recognition Certificate",
      description: "Decided by conference participants through voting",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      criteria: [
        "Audience engagement",
        "Practical relevance",
        "Presentation quality",
        "Interactive discussion"
      ]
    }
  ];

  const previousWinners = [
    {
      year: "2024",
      award: "Best Research Paper",
      title: "Federated Learning for Healthcare Data Privacy",
      authors: "Dr. Anita Sharma, Prof. Vikram Singh",
      institution: "IIT Delhi"
    },
    {
      year: "2024",
      award: "Best Student Paper",
      title: "Explainable AI for Financial Fraud Detection",
      authors: "Rahul Verma, Dr. Priya Nair",
      institution: "BITS Pilani"
    },
    {
      year: "2023",
      award: "Best Industry Case Study",
      title: "AI-Powered Supply Chain Optimization at Scale",
      authors: "Tech Team, Flipkart",
      institution: "Flipkart Labs"
    }
  ];

  const selectionProcess = [
    {
      step: 1,
      title: "Initial Screening",
      description: "All submitted papers undergo initial quality check and relevance assessment"
    },
    {
      step: 2,
      title: "Peer Review",
      description: "Double-blind review by expert panel with detailed evaluation criteria"
    },
    {
      step: 3,
      title: "Committee Evaluation",
      description: "Award committee reviews top papers and presentations during the conference"
    },
    {
      step: 4,
      title: "Final Selection",
      description: "Winners announced during the closing ceremony with rationale"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            🏆 Awards & Recognition
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Excellence Awards</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognizing outstanding contributions to research, innovation, and knowledge sharing in our community
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${award.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <award.icon className={`h-8 w-8 ${award.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {award.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {award.prize}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {award.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-primary mb-2">Selection Criteria:</h4>
                    <ul className="space-y-1">
                      {award.criteria.map((criterion, criterionIndex) => (
                        <li key={criterionIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Selection Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Selection Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {process.step}
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{process.title}</h4>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Previous Winners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Previous Award Winners</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {previousWinners.map((winner, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">{winner.year}</Badge>
                    <Badge className="bg-accent/10 text-accent">{winner.award}</Badge>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{winner.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{winner.authors}</p>
                  <p className="text-xs text-accent">{winner.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
