
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
    <section id="participation" className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Users className="w-4 h-4 mr-2" />
            Who Can Participate
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Research Community</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Open to students, professionals, researchers, and academicians from diverse backgrounds 
            in technology, science, and related fields
          </p>
        </motion.div>

        {/* Enhanced Participant Categories */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {participants.map((participant, index) => (
            <motion.div
              key={participant.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5 hover:border-primary/40 hover:scale-[1.02]">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <participant.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {participant.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {participant.categories.map((category, idx) => (
                      <div 
                        key={category}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-white/80 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-200 border border-gray-100 hover:border-primary/30 group"
                      >
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                        <span className="text-gray-700 font-medium leading-relaxed">
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
