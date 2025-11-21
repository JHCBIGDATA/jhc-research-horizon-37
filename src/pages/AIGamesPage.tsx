import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Gamepad2, Sparkles, Trophy, Zap, Atom, Music } from 'lucide-react';

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

              {/* Tic-Tac-Toe AI Game */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => window.location.href = '/#/ai-games/tic-tac-toe'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20 rounded-2xl p-6 h-full hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tic-Tac-Toe vs AI</h3>
                  <p className="text-muted-foreground mb-4">
                    Challenge an unbeatable AI using the Minimax algorithm. Can you force a draw?
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                    <span>AI Powered</span>
                    <span>•</span>
                    <span>Strategy Game</span>
                  </div>
                </div>
              </motion.div>

              {/* Memory Card Game */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => window.location.href = '/#/ai-games/memory-card'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-purple-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Memory Card Game</h3>
                  <p className="text-muted-foreground mb-4">
                    Test your memory! Match all the pairs with minimum moves and beat your best score.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-purple-500 font-medium">
                    <span>16 Cards</span>
                    <span>•</span>
                    <span>Memory Challenge</span>
                  </div>
                </div>
              </motion.div>

              {/* Snake Game with AI */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => window.location.href = '/#/ai-games/snake-ai'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-2 border-green-500/20 rounded-2xl p-6 h-full hover:border-green-500/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-green-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Snake AI</h3>
                  <p className="text-muted-foreground mb-4">
                    Classic snake game with AI autopilot mode! Watch AI play or take control yourself.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
                    <span>AI Pathfinding</span>
                    <span>•</span>
                    <span>Power-ups</span>
                  </div>
                </div>
              </motion.div>

              {/* 2048 Game */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => window.location.href = '/#/ai-games/2048'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/20 rounded-2xl p-6 h-full hover:border-yellow-500/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-yellow-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">2048 Extreme</h3>
                  <p className="text-muted-foreground mb-4">
                    Merge tiles to reach 2048 with insane particle effects and animations!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-yellow-500 font-medium">
                    <span>Puzzle</span>
                    <span>•</span>
                    <span>Crazy Effects</span>
                  </div>
                </div>
              </motion.div>

              {/* Particle Physics Game */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => window.location.href = '/#/ai-games/particle-physics'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-cyan-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Atom className="w-8 h-8 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Particle Physics</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time collision detection with custom physics engine and WebGL rendering!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-cyan-500 font-medium">
                    <span>Physics</span>
                    <span>•</span>
                    <span>WebGL</span>
                  </div>
                </div>
              </motion.div>

              {/* Rhythm Beat Game */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => window.location.href = '/#/ai-games/rhythm-beat'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-500/20 rounded-2xl p-6 h-full hover:border-pink-500/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-pink-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Music className="w-8 h-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Rhythm Beat Master</h3>
                  <p className="text-muted-foreground mb-4">
                    Hit notes with perfect timing! Features Web Audio API and real-time sound synthesis!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-pink-500 font-medium">
                    <span>Web Audio</span>
                    <span>•</span>
                    <span>Music</span>
                  </div>
                </div>
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
