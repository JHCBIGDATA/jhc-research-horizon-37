import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Gamepad2, Sparkles, Trophy, Zap } from 'lucide-react';

const AIGamesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Interactive AI Experience
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI & Games
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the intersection of artificial intelligence and interactive gaming. 
              Challenge AI systems, test your skills, and experience cutting-edge technology in action.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6">
              <Gamepad2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Interactive Gameplay</h3>
              <p className="text-muted-foreground">
                Engage with AI-powered games designed to challenge and entertain.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-6">
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Real-time AI</h3>
              <p className="text-muted-foreground">
                Experience machine learning algorithms adapting to your strategy in real-time.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-2xl p-6">
              <Trophy className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Compete & Learn</h3>
              <p className="text-muted-foreground">
                Test your skills, earn achievements, and discover AI capabilities.
              </p>
            </div>
          </motion.div>

          {/* Games Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Available Games</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Research Paper Quiz Game */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => window.location.href = '/#/ai-games/research-quiz'}
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-6 h-full hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Gamepad2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Research Paper Quiz</h3>
                  <p className="text-muted-foreground mb-4">
                    Test your knowledge about writing and publishing research papers. Perfect for aspiring researchers!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <span>10 Questions</span>
                    <span>•</span>
                    <span>~5 minutes</span>
                  </div>
                </div>
              </motion.div>

              {/* More games placeholder cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-muted/20 to-muted/10 border-2 border-dashed border-muted rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center"
              >
                <Sparkles className="w-12 h-12 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">More Games Coming Soon</h3>
                <p className="text-sm text-muted-foreground/70">Stay tuned for more AI-powered challenges</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-muted/20 to-muted/10 border-2 border-dashed border-muted rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center"
              >
                <Trophy className="w-12 h-12 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">More Games Coming Soon</h3>
                <p className="text-sm text-muted-foreground/70">New challenges will be added regularly</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIGamesPage;
