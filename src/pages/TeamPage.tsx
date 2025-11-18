
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

  const studentTeam = [
    {
      name: "Prasad",
      role: "Overall Coordinator",
      department: "Event Management",
      command: "sudo run event.coordinator --mode=overall"
    },
    {
      name: "Pooja",
      role: "Overall Coordinator",
      department: "Event Management",
      command: "sudo run event.coordinator --mode=overall"
    },
    {
      name: "Musab",
      role: "Overall Coordinator",
      department: "Event Management",
      command: "sudo run event.coordinator --mode=overall"
    },
    {
      name: "Vishesh",
      role: "Website Manager",
      department: "Technical Team",
      command: "npm run dev:website --port=3000"
    },
    {
      name: "Sonakshi",
      role: "Social Media Manager",
      department: "Marketing Team",
      command: "sh run-social-media.sh --platform=all"
    },
    {
      name: "Pranay",
      role: "PR Manager",
      department: "Public Relations",
      command: "python pr_manager.py --mode=outreach"
    },
    {
      name: "Priyanshu",
      role: "PR Manager",
      department: "Public Relations",
      command: "python pr_manager.py --mode=outreach"
    },
    {
      name: "Pranav",
      role: "Publishing Head",
      department: "Publications Team",
      command: "git push publications main --force"
    },
    {
      name: "Rudra",
      role: "Publishing Manager",
      department: "Publications Team",
      command: "latex compile paper.tex && pdf generate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Meet the dedicated faculty, staff, and student coordinators who are working tirelessly 
              to make JHC 2026 National Research Conference a grand success
            </p>
          </motion.div>
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">

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
                Our esteemed leadership team continues to guide JHC 2026 with the same vision and dedication
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
                The same dedicated core committee members from our successful 2024 conference continue for JHC 2026
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

            {/* Student Coordinators Section - Terminal Style */}
            <motion.div
              variants={itemVariants}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-mono">
                  <span className="text-green-500">student@jhc2026:~$</span>{" "}
                  <span className="text-primary">cat team_coordinators.json</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
                  {"{"} "message": "Loading student coordination team..." {"}"}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentTeam.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 border-2 border-green-500/30 bg-gradient-to-br from-black via-gray-900 to-black text-green-400 overflow-hidden group relative">
                      {/* Scanline effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none animate-pulse"></div>
                      
                      {/* Matrix rain effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"></div>
                        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                      </div>
                      
                      <CardContent className="p-0 relative z-10">
                        {/* Terminal Header */}
                        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-2 flex items-center space-x-2 border-b border-green-500/30">
                          <div className="flex space-x-2">
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-red-500 group-hover:animate-ping"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            ></motion.div>
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-yellow-500"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                            ></motion.div>
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-green-500"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                            ></motion.div>
                          </div>
                          <span className="text-xs text-green-400 font-mono flex-1 text-center group-hover:text-green-300 transition-colors">
                            {member.name.toLowerCase()}@jhc2026:~
                          </span>
                          <span className="text-xs text-green-500 animate-pulse">●</span>
                        </div>
                        
                        {/* Terminal Content */}
                        <div className="p-5 font-mono text-sm space-y-3 bg-gradient-to-br from-black via-gray-950 to-black">
                          {/* Whoami command */}
                          <motion.div 
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="text-cyan-400 animate-pulse">❯</span>
                            <div className="flex-1">
                              <p className="text-green-400 group-hover:text-green-300 transition-colors">
                                <span className="text-purple-400">whoami</span>
                              </p>
                              <p className="text-white font-bold text-lg mt-1 tracking-wider group-hover:text-green-300 transition-colors">
                                {member.name}
                              </p>
                            </div>
                          </motion.div>
                          
                          {/* Cat role command */}
                          <motion.div 
                            className="flex items-start space-x-2 pt-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            <span className="text-cyan-400 animate-pulse">❯</span>
                            <div className="flex-1">
                              <p className="text-green-400 group-hover:text-green-300 transition-colors">
                                <span className="text-purple-400">cat</span> role.txt
                              </p>
                              <p className="text-yellow-400 font-semibold mt-1 group-hover:text-yellow-300 transition-colors">
                                » {member.role}
                              </p>
                              <p className="text-gray-500 text-xs mt-1 italic">
                                // {member.department}
                              </p>
                            </div>
                          </motion.div>
                          
                          {/* Execute command */}
                          <motion.div 
                            className="flex items-start space-x-2 pt-2 border-t border-green-500/20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            <span className="text-cyan-400 animate-pulse">❯</span>
                            <div className="flex-1">
                              <p className="text-green-400 group-hover:text-green-300 transition-colors break-all text-xs leading-relaxed">
                                {member.command}
                              </p>
                              <motion.p 
                                className="text-green-500 text-xs mt-2 flex items-center space-x-2"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                                <span>Process Running...</span>
                                <span className="text-green-400">[✓ OK]</span>
                              </motion.p>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Bottom status bar */}
                        <div className="bg-gradient-to-r from-green-900/20 via-green-800/20 to-green-900/20 px-4 py-1 border-t border-green-500/30 flex items-center justify-between text-xs font-mono">
                          <span className="text-green-400">ONLINE</span>
                          <span className="text-gray-500">|</span>
                          <span className="text-cyan-400">JHC2026</span>
                          <span className="text-gray-500">|</span>
                          <motion.span 
                            className="text-green-400"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {index % 3 === 0 ? '⚡ 99% CPU' : index % 3 === 1 ? '🔥 ACTIVE' : '💻 EXECUTING'}
                          </motion.span>
                        </div>
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
                The successful organizing team from our 2024 conference. For JHC 2026, we maintain our proven leadership structure 
                along with an energetic student coordination team to deliver an even more exceptional conference experience.
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
