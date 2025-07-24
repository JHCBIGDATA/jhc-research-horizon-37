
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SpeakersSection = () => {
  const keynoteSpeeakers = [
    {
      name: "Dr. Rajeev Rastogi",
      title: "Vice President of Machine Learning",
      company: "Amazon",
      image: "/lovable-uploads/1d3f69d9-45ec-45a7-a1fd-2b2c47667a56.png",
      expertise: ["Machine Learning", "AI Systems", "Data Science"],
      session: "Future of Generative AI in Industry",
      bio: "Leading expert in machine learning with 20+ years of experience in developing AI systems at scale."
    },
    {
      name: "Prof. Sunita Sarawagi",
      title: "Professor & Research Scientist",
      company: "IIT Bombay",
      image: "/lovable-uploads/49ef0f2c-2f2a-4f3a-bc3f-3dc7fcb42a61.png",
      expertise: ["Natural Language Processing", "Information Extraction", "Deep Learning"],
      session: "Advances in NLP for Indian Languages",
      bio: "Renowned researcher in NLP and machine learning with numerous publications in top-tier conferences."
    },
    {
      name: "Dr. Amit Kumar",
      title: "Chief Data Scientist",
      company: "Microsoft Research India",
      image: "/lovable-uploads/55c0f04d-04fc-434a-8d75-12316a82aab8.png",
      expertise: ["Computer Vision", "AI Ethics", "Responsible AI"],
      session: "Ethical AI and Responsible Innovation",
      bio: "Leading voice in responsible AI development with focus on ethical implications of emerging technologies."
    }
  ];

  const industryExperts = [
    {
      name: "Ms. Priya Sharma",
      title: "Head of Analytics",
      company: "Flipkart",
      expertise: ["E-commerce Analytics", "Big Data", "Customer Intelligence"]
    },
    {
      name: "Dr. Neha Gupta",
      title: "Research Director",
      company: "TCS Innovation Labs",
      expertise: ["IoT", "Edge Computing", "Industry 4.0"]
    },
    {
      name: "Prof. Rajesh Patel",
      title: "Dean of Technology",
      company: "BITS Pilani",
      expertise: ["Blockchain", "Cybersecurity", "Fintech"]
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
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
            🎤 Distinguished Speakers
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Keynote Speakers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry leaders and renowned researchers who are shaping the future of AI and Data Science
          </p>
        </motion.div>

        {/* Keynote Speakers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {keynoteSpeeakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader className="text-center">
                  <motion.img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {speaker.name}
                  </CardTitle>
                  <p className="text-accent font-medium">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground">{speaker.company}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Session Topic
                    </h4>
                    <p className="text-sm text-muted-foreground">{speaker.session}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Industry Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Industry Expert Panel</h3>
            <p className="text-muted-foreground">
              Join our panel discussion with industry leaders sharing real-world insights and trends
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryExperts.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary">{expert.name}</h4>
                        <p className="text-sm text-accent font-medium">{expert.title}</p>
                        <p className="text-sm text-muted-foreground mb-3">{expert.company}</p>
                        <div className="flex flex-wrap gap-1">
                          {expert.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
            <Award className="h-12 w-12 text-accent mx-auto mb-4" />
            <h4 className="text-xl font-bold text-primary mb-2">Don't Miss Out!</h4>
            <p className="text-muted-foreground mb-4">
              Secure your seat to learn from these distinguished speakers and network with industry leaders
            </p>
            <div className="text-sm text-muted-foreground">
              Limited seats available for interactive Q&A sessions
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;
