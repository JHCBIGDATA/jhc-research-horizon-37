
import { motion } from 'framer-motion';
import { GraduationCap, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Participation = () => {
  const participants = [
    {
      icon: GraduationCap,
      title: "Students & Academics",
      categories: [
        "B.Sc/M.Sc in IT, Computer Science, Data Science",
        "B.Voc Software Development", 
        "M.Sc Big Data Analytics",
        "Engineering students from tech institutions"
      ]
    },
    {
      icon: Users,
      title: "Professionals & Researchers",
      categories: [
        "Industry professionals in AI/ML/Data Science",
        "Research scientists and Ph.D. scholars",
        "Data analysts and cybersecurity experts",
        "Cloud computing specialists"
      ]
    }
  ];

  return (
    <section id="participation" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Clean Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Who Can Participate</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Open to students, professionals, researchers, and academicians from diverse backgrounds 
            in technology, science, and related fields
          </p>
        </motion.div>

        {/* Simplified Participant Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {participants.map((participant, index) => (
            <motion.div
              key={participant.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <participant.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{participant.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {participant.categories.map((category, idx) => (
                      <div 
                        key={category}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-medium leading-relaxed">
                          {category}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participation;
