
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PastHighlights = () => {
  const highlights = [
    {
      image: "/lovable-uploads/138790b0-7483-4f48-ae16-2db2f83b5253.png",
      title: "Paper Presentation Sessions",
      description: "Outstanding research presentations from 2024 conference"
    },
    {
      image: "/lovable-uploads/1d3f69d9-45ec-45a7-a1fd-2b2c47667a56.png",
      title: "Organizing Team Excellence",
      description: "Dedicated faculty and staff ensuring conference success"
    },
    {
      image: "/lovable-uploads/49ef0f2c-2f2a-4f3a-bc3f-3dc7fcb42a61.png",
      title: "Academic Collaboration",
      description: "Industry experts and academicians sharing insights"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Participants", delay: 0.1 },
    { icon: BookOpen, value: "150+", label: "Research Papers", delay: 0.2 },
    { icon: Award, value: "25+", label: "Best Paper Awards", delay: 0.3 },
    { icon: TrendingUp, value: "95%", label: "Satisfaction Rate", delay: 0.4 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
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
            🏆 Building on Success
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Conference Highlights from 2024</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Last year's conference was a tremendous success, bringing together brilliant minds 
            and fostering groundbreaking research collaborations
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <motion.div
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: stat.delay, duration: 0.5 }}
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

        {/* Image Gallery */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    className="absolute top-4 right-4 bg-accent/90 text-black px-3 py-1 rounded-full text-xs font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    2024 Success
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-12 max-w-4xl mx-auto border border-primary/20">
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Ready for JHC 2025?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Building on the success of 2024, we're preparing an even more impactful conference experience. 
                Join leading researchers, innovative thinkers, and industry pioneers as we shape the future of 
                technology and research together.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">600+</div>
                  <div className="text-sm text-muted-foreground">Expected Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Research Presentations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">3 Days</div>
                  <div className="text-sm text-muted-foreground">Of Innovation</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-medium">
                🚀 Be part of the next chapter in academic excellence
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastHighlights;
