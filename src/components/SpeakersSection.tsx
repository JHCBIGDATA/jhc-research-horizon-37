
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
    <section id="speakers" className="py-12 bg-gradient-to-br from-primary/5 via-accent/3 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"
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
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
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
            className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border-0 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="mr-2">
              🎤
            </span>
            Distinguished Speakers
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Keynote Speakers
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Learn from industry leaders and renowned researchers who are shaping the future of AI and Data Science
          </motion.p>
        </motion.div>

        {/* Keynote Speakers */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keynoteSpeeakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-gray-50/50 to-primary/5 h-full flex flex-col border-0 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="text-center relative z-10 p-4 sm:p-6">
                  <motion.div className="relative">
                    <motion.img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-4 border-primary/20 shadow-lg"
                      whileHover={{ scale: 1.05, rotateY: 10 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {speaker.name}
                  </CardTitle>
                  <p className="text-accent font-medium">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground">{speaker.company}</p>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col grow">
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
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{speaker.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SpeakersSection;
