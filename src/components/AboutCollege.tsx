
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Building, Calendar, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutCollege = () => {
  const achievements = [
    {
      icon: Award,
      title: "75 Years of Excellence",
      description: "Established in 1948, celebrating 75 years of academic excellence and innovation",
      year: "1948-2023"
    },
    {
      icon: Users,
      title: "Empowered Autonomous Status",
      description: "Granted autonomous status, ensuring academic freedom and innovation",
      year: "2019"
    },
    {
      icon: BookOpen,
      title: "NAAC A+ Accreditation",
      description: "Highest grade accreditation from National Assessment and Accreditation Council",
      year: "2020"
    },
    {
      icon: Building,
      title: "State-of-the-Art Infrastructure",
      description: "Modern facilities including advanced computer labs and research centers",
      year: "Ongoing"
    }
  ];

  const departments = [
    {
      name: "B.Sc. Information Technology",
      description: "Comprehensive undergraduate program in IT with focus on emerging technologies",
      highlights: ["AI/ML Specialization", "Industry Projects", "Internship Programs"]
    },
    {
      name: "B.Voc. Software Development",
      description: "Skill-based vocational program designed for industry-ready professionals",
      highlights: ["Hands-on Training", "Industry Partnerships", "Job Placement Support"]
    },
    {
      name: "M.Sc. Big Data Analytics",
      description: "Advanced postgraduate program focusing on data science and analytics",
      highlights: ["Research Opportunities", "Industry Collaborations", "Advanced Computing"]
    }
  ];

  return (
    <section id="about-college" className="py-20 bg-white">
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
            🏛️ About College
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Jai Hind College</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier educational institution fostering excellence in higher education and research 
            for over seven decades
          </p>
        </motion.div>

        {/* College Overview */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.img
              src="/lovable-uploads/d2f7f0e5-4f0d-4bb2-aa0d-4878f59f8133.png"
              alt="Jai Hind College Logo"
              className="w-24 h-24 mb-6"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-2xl font-bold text-primary mb-4">Legacy of Excellence</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Jai Hind College, established in 1948, stands as a beacon of academic excellence 
              in Mumbai. With its recent autonomous status and NAAC A+ accreditation, the college 
              continues to innovate and lead in higher education.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div 
                className="bg-primary/5 rounded-lg p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-primary">Founded</p>
                    <p className="text-sm text-muted-foreground">1948</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-accent/5 rounded-lg p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3">
                  <Trophy className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-accent">Status</p>
                    <p className="text-sm text-muted-foreground">Autonomous</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative">
            <motion.img
              src="/lovable-uploads/55c0f04d-04fc-434a-8d75-12316a82aab8.png"
              alt="Jai Hind College Campus"
              className="rounded-lg shadow-lg w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </div>
        </motion.div>

        {/* Achievements Timeline */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <p className="text-sm font-medium text-accent">{achievement.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Departments */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Academic Departments</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {dept.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {dept.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-primary">Key Highlights:</p>
                      <ul className="space-y-1">
                        {dept.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCollege;
