
import { motion } from 'framer-motion';
import { User, Crown, Award, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect, useMemo, memo } from 'react';

const TypingText = memo(({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}<span className="animate-pulse">_</span></span>;
});

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

  const studentTeam = useMemo(() => [
    {
      name: "Prasad",
      role: "Overall Coordinator",
      department: "Event Management",
      command: "sudo run event.coordinator --mode=overall",
      ascii: "█▓▒░ EVENT",
      stats: { cpu: 98, ram: 87, network: 95 },
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Pooja",
      role: "Overall Coordinator",
      department: "Event Management",
      command: "sudo run event.coordinator --mode=overall",
      ascii: "█▓▒░ COORD",
      stats: { cpu: 96, ram: 91, network: 89 },
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Musab",
      role: "Overall Coordinator",
      department: "Event Management",
      command: "sudo run event.coordinator --mode=overall",
      ascii: "█▓▒░ LEAD",
      stats: { cpu: 94, ram: 88, network: 92 },
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Vishesh",
      role: "Website Manager",
      department: "Technical Team",
      command: "npm run dev:website --port=3000 --turbo",
      ascii: "⚡ WEB DEV",
      stats: { cpu: 99, ram: 95, network: 100 },
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Sonakshi",
      role: "Social Media Manager",
      department: "Marketing Team",
      command: "python social_ai.py --auto-post --analytics",
      ascii: "🔥 SOCIAL",
      stats: { cpu: 85, ram: 78, network: 97 },
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Pranay",
      role: "PR Manager",
      department: "Public Relations",
      command: "node pr_outreach.js --target=all --priority=high",
      ascii: "📢 PR OPS",
      stats: { cpu: 88, ram: 82, network: 94 },
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Priyanshu",
      role: "PR Manager",
      department: "Public Relations",
      command: "python media_reach.py --boost --engagement=max",
      ascii: "📡 REACH",
      stats: { cpu: 90, ram: 85, network: 96 },
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Pranav",
      role: "Publishing Head",
      department: "Publications Team",
      command: "git push origin papers --force && deploy --prod",
      ascii: "📚 PUBLISH",
      stats: { cpu: 92, ram: 89, network: 91 },
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Rudra",
      role: "Publishing Manager",
      department: "Publications Team",
      command: "pdflatex main.tex && bibtex refs && compile --optimize",
      ascii: "✍️ WRITER",
      stats: { cpu: 87, ram: 84, network: 88 },
      color: "from-amber-500 to-yellow-500"
    }
  ], []);

  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5
    })), []
  );

  const prefersReducedMotion = useMemo(() => 
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []
  );

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

      <section className="py-24 relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-green-500/20 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">

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
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      rotateX: 5,
                      rotateY: 5,
                      transformPerspective: 1000
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Card className="hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-500 border-2 border-green-500/30 hover:border-green-400 bg-gradient-to-br from-black via-gray-900 to-black text-green-400 overflow-hidden group relative hover:scale-[1.03]">
                      {/* Animated grid background */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, .05) 25%, rgba(34, 197, 94, .05) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .05) 75%, rgba(34, 197, 94, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, .05) 25%, rgba(34, 197, 94, .05) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .05) 75%, rgba(34, 197, 94, .05) 76%, transparent 77%, transparent)',
                        backgroundSize: '50px 50px'
                      }}></div>
                      
                      {/* Neon glow pulse */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 blur-xl"
                        animate={{ 
                          opacity: [0, 0.15, 0],
                          scale: [0.95, 1.05, 0.95]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      ></motion.div>
                      
                      {/* Scanline effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent pointer-events-none"
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      ></motion.div>
                      
                      {/* Matrix Digital Rain Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-xs font-mono text-green-400"
                            style={{ left: `${20 * i}%` }}
                            animate={{ 
                              y: ['-100%', '100%'],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                              ease: "linear"
                            }}
                          >
                            {Array(20).fill(0).map((_, idx) => (
                              <div key={idx}>{Math.random() > 0.5 ? '1' : '0'}</div>
                            ))}
                          </motion.div>
                        ))}
                      </div>
                      
                      <CardContent className="p-0 relative z-10">
                        { /* Terminal Header */ }
                        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-2 flex items-center space-x-2 border-b border-green-500/30">
                          <div className="flex space-x-2">
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-red-500"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-yellow-500"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                            />
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-green-500"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                            />
                          </div>
                          <span className="text-xs text-green-400 font-mono flex-1 text-center group-hover:text-green-300 transition-colors">
                            {member.name.toLowerCase()}@jhc2026:~
                          </span>
                          <span className="text-xs text-green-500 animate-pulse">●</span>
                        </div>
                        
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-2 flex items-center justify-between text-xs font-mono text-green-400 border-b border-green-500/20">
                          <div className="flex gap-4">
                            <div className="flex items-center gap-1">
                              <span className="opacity-70">CPU:</span>
                              <motion.span 
                                className="font-bold"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {member.stats.cpu}%
                              </motion.span>
                              <div className="w-12 h-1 bg-black/30 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-green-400"
                                  initial={{ width: '0%' }}
                                  animate={{ width: member.stats.cpu + '%' }}
                                  transition={{ duration: 1.5, delay: index * 0.1 }}
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="opacity-70">RAM:</span>
                              <span className="font-bold">{member.stats.ram}%</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="opacity-70">NET:</span>
                              <motion.span 
                                className="font-bold"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              >
                                {member.stats.network}%
                              </motion.span>
                            </div>
                          </div>
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            ⚡ LIVE
                          </motion.span>
                        </div>
                        
                        {/* Terminal Content */}
                        <div className="p-5 font-mono text-sm space-y-3 bg-gradient-to-br from-black via-gray-950 to-black">
                          {/* Whoami command with typewriter effect */}
                          <motion.div 
                            className="flex items-start space-x-2 relative"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="text-cyan-400 animate-pulse">❯</span>
                            <div className="flex-1">
                              <p className="text-green-400 group-hover:text-green-300 transition-colors">
                                <span className="text-purple-400">whoami</span>
                                <motion.span
                                  animate={{ opacity: [0, 1, 0] }}
                                  transition={{ duration: 0.8, repeat: Infinity }}
                                  className="text-green-400"
                                >
                                  _
                                </motion.span>
                              </p>
                              <motion.p 
                                className="text-white font-bold text-lg mt-1 tracking-wider group-hover:text-green-300 transition-colors"
                                initial={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {member.name}
                              </motion.p>
                            </div>
                          </motion.div>
                          
                          {/* Cat role command with glitch effect */}
                          <motion.div 
                            className="flex items-start space-x-2 pt-2 border-t border-green-500/10 pt-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            <span className="text-cyan-400 animate-pulse">❯</span>
                            <div className="flex-1">
                              <p className="text-green-400 group-hover:text-green-300 transition-colors">
                                <span className="text-purple-400">cat</span>{" "}
                                <span className="text-blue-400">role.txt</span>
                                <motion.span
                                  animate={{ opacity: [0, 1, 0] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                                  className="text-green-400"
                                >
                                  _
                                </motion.span>
                              </p>
                              <div className="mt-2 p-2 bg-green-500/5 border-l-2 border-yellow-400 rounded">
                                <motion.p 
                                  className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors"
                                  whileHover={{ x: 5 }}
                                >
                                  » {member.role}
                                </motion.p>
                                <p className="text-gray-500 text-xs mt-1 italic flex items-center gap-1">
                                  <span className="text-blue-400">📁</span> {member.department}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Execute command with compilation log */}
                          <motion.div 
                            className="flex items-start space-x-2 pt-3 border-t border-green-500/20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            <span className="text-cyan-400 animate-pulse">❯</span>
                            <div className="flex-1">
                              <motion.p 
                                className="text-green-400 group-hover:text-green-300 transition-colors break-all text-xs leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, delay: index * 0.1 + 0.6 }}
                              >
                                <TypingText text={member.command} speed={30} />
                              </motion.p>
                              
                              {/* Compilation output */}
                              <div className="mt-2 space-y-1 text-xs">
                                <motion.p 
                                  className="text-blue-400"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: index * 0.1 + 0.8 }}
                                >
                                  <span className="text-gray-600">[INFO]</span> Initializing environment...
                                </motion.p>
                                <motion.p 
                                  className="text-purple-400"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: index * 0.1 + 1.0 }}
                                >
                                  <span className="text-gray-600">[COMPILE]</span> Building modules... ████████ 100%
                                </motion.p>
                                <motion.div 
                                  className="flex items-center gap-2 text-green-500"
                                  animate={{ opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                                  <span><span className="text-gray-600">[SUCCESS]</span> Process executing...</span>
                                  <span className="text-green-400 font-bold">[✓ OK]</span>
                                </motion.div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Bottom status bar with data visualization */}
                        <motion.div 
                          className="bg-gradient-to-r from-green-900/20 via-green-800/20 to-green-900/20 px-4 py-2 border-t-2 border-green-500/30 text-xs font-mono"
                          whileHover={{ borderTopColor: 'rgba(34, 197, 94, 0.6)' }}
                        >
                          <div className="flex items-center justify-between text-green-400">
                            <div className="flex items-center gap-2">
                              <motion.span
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                ●
                              </motion.span>
                              <span className="font-bold">ONLINE</span>
                            </div>
                            <span className="opacity-50">|</span>
                            <span className="font-semibold">JHC2026</span>
                            <span className="opacity-50">|</span>
                            <motion.div 
                              className="flex items-center gap-1"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <span>⚡</span>
                              <span>{member.stats.cpu}%</span>
                            </motion.div>
                            <span className="opacity-50">|</span>
                            <motion.div
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="flex items-center gap-1"
                            >
                              <span>🔥</span>
                              <span className="font-bold">ACTIVE</span>
                            </motion.div>
                            <span className="opacity-50">|</span>
                            <div className="flex items-center gap-1">
                              <span>💻</span>
                              <motion.span
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                EXECUTING
                              </motion.span>
                            </div>
                          </div>
                        </motion.div>
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
                  loading="lazy"
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

TeamPage.displayName = 'TeamPage';

export default memo(TeamPage);
