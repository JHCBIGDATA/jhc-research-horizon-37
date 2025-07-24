
import { motion } from 'framer-motion';
import { Brain, Database, BarChart3, Cpu, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutConference = () => {
  const themes = [
    {
      icon: Brain,
      title: "Generative AI",
      description: "Exploring the frontiers of artificial intelligence and machine learning",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Advanced analytics and big data processing techniques",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Business intelligence and predictive modeling",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Cpu,
      title: "Cloud Computing",
      description: "Scalable computing solutions and infrastructure",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "IoT & Edge Computing",
      description: "Connected devices and distributed computing",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Information security and digital privacy",
      color: "from-red-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "500+", label: "Expected Participants", delay: 0.1 },
    { value: "50+", label: "Research Papers", delay: 0.2 },
    { value: "20+", label: "Industry Experts", delay: 0.3 },
    { value: "2", label: "Conference Days", delay: 0.4 }
  ];

  return (
    <section id="about-conference" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
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
            🎯 About Conference
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">JHC 2025 Research Conference</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier platform for showcasing cutting-edge research and fostering innovation 
            in the rapidly evolving fields of technology and data science
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.delay }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: stat.delay + 0.2, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Themes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Research Themes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${theme.color} flex items-center justify-center mb-4`}>
                      <theme.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {theme.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {theme.description}
                    </p>
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

export default AboutConference;
