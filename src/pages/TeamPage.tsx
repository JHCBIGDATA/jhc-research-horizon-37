
import { motion } from 'framer-motion';
import { User, Crown, Award, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TeamPage = () => {
  const leadership = [
    {
      name: "Prof. (Dr.) Vijay Dabholkar",
      role: "Patron & Principal",
      icon: Crown,
      description: "Leading the institution with vision and academic excellence",
      email: "principal@jaihindcollege.edu.in",
      department: "Principal's Office"
    },
    {
      name: "Mr. Wilson Rao",
      role: "Convenor, HOD & Coordinator",
      icon: Award,
      description: "Head of Department and Conference Coordinator",
      email: "wilson.rao@jaihindcollege.edu.in",
      department: "Big Data Analytics"
    }
  ];

  const coreCommittee = [
    {
      name: "Ms. Sunita Jena",
      role: "Assistant Professor",
      department: "Big Data Analytics"
    },
    {
      name: "Ms. Tejashree Parab",
      role: "Assistant Professor", 
      department: "Big Data Analytics"
    },
    {
      name: "Ms. Fatima Shaikh",
      role: "Assistant Professor",
      department: "Big Data Analytics"
    },
    {
      name: "Ms. Shraddhadevi Singh",
      role: "Assistant Professor",
      department: "Big Data Analytics"
    },
    {
      name: "Ms. Rohana Deshpande",
      role: "Assistant Professor",
      department: "Big Data Analytics"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Organizing Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated faculty and staff members ensuring the success of JHC 2025 National Research Conference
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Leadership Section */}
            <motion.div
              variants={itemVariants}
              className="mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-4 sm:mb-8">Leadership</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our esteemed leadership team continues to guide JHC 2025 with the same vision and dedication
              </p>
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {leadership.map((leader, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                          <leader.icon className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl mb-2">{leader.name}</CardTitle>
                        <p className="text-accent font-semibold text-lg">{leader.role}</p>
                        <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{leader.department}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{leader.description}</p>
                        <div className="flex items-center justify-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors">
                          <Mail className="h-4 w-4" />
                          <a href={`mailto:${leader.email}`} className="hover:underline">
                            {leader.email}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Core Committee Section */}
            <motion.div
              variants={itemVariants}
              className="mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-4 sm:mb-8">Core Committee Members</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                The same dedicated core committee members from our successful 2024 conference continue for JHC 2025
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                {coreCommittee.map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 text-center">
                      <CardContent className="p-6">
                        <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                          <User className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{member.name}</h3>
                        <p className="text-sm text-accent font-medium mb-1">{member.role}</p>
                        <p className="text-xs text-muted-foreground">{member.department}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Team Photo Section */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">JHC 2024 Organizing Team</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                The successful organizing team from our 2024 conference. While the organizing team structure will evolve for 2025, 
                our core leadership and committee members remain committed to delivering another exceptional conference experience.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/lovable-uploads/1d3f69d9-45ec-45a7-a1fd-2b2c47667a56.png" 
                  alt="JHC 2024 Organizing Team" 
                  className="rounded-xl shadow-2xl mx-auto max-w-5xl w-full"
                />
              </motion.div>
              <div className="mt-6 bg-primary/5 rounded-lg p-4 max-w-3xl mx-auto">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-primary">JHC 2024 Conference Team:</span> This photo showcases our dedicated 2024 organizing team. 
                  For JHC 2025, we maintain our proven leadership structure while preparing an enhanced organizing framework to deliver 
                  an even more impactful conference experience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
