import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { RotateCcw, Star, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

type Card = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const emojis = ['🎯', '🎮', '🎲', '🎪', '🎨', '🎭', '🎸', '🎺'];

const MemoryCardGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [combo, setCombo] = useState(0);
  const [showCombo, setShowCombo] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, color: string}>>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(() => {
    const saved = localStorage.getItem('memory_best_score');
    return saved ? parseInt(saved) : null;
  });
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isPlaying && !gameWon) {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, gameWon]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const initializeGame = () => {
    const shuffledEmojis = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false
      }));
    setCards(shuffledEmojis);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setGameWon(false);
    setCombo(0);
    setShowCombo(false);
    setParticles([]);
    setTimer(0);
    setIsPlaying(false);
    setScore(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards[first];
      const secondCard = cards[second];

      if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
        // Match found - EPIC CELEBRATION!
        const newCombo = combo + 1;
        setCombo(newCombo);
        setShowCombo(true);
        setTimeout(() => setShowCombo(false), 1500);
        
        // INSANE particle explosion
        const colors = ['#ff00ff', '#00ffff', '#ffff00', '#00ff00', '#ff0080'];
        const particleCount = isMobile ? 8 : 15;
        for (let i = 0; i < particleCount; i++) {
          setTimeout(() => {
            setParticles(prev => [...prev, {
              id: Date.now() + i,
              x: Math.random() * 100,
              y: Math.random() * 100,
              color: colors[Math.floor(Math.random() * colors.length)]
            }]);
          }, i * 30);
        }
        setTimeout(() => setParticles([]), 2000);
        
        // Mini confetti
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: colors
        });
        
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === first || card.id === second
                ? { ...card, isMatched: true, isFlipped: false }
                : card
            )
          );
          setMatches(prev => prev + 1);
          setFlippedCards([]);
          
          // Calculate score: base 100 points + combo bonus - time penalty
          const comboBonus = newCombo * 50;
          const timePenalty = Math.floor(timer / 10) * 5;
          const points = Math.max(50, 100 + comboBonus - timePenalty);
          setScore(prev => prev + points);
        }, 600);
      } else {
        // Reset combo on miss
        setCombo(0);
        // No match
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matches === emojis.length && matches > 0) {
      setGameWon(true);
      
      // INSANE WIN CELEBRATION
      const duration = 5000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: NodeJS.Timeout = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#ff0080', '#00ffff', '#ffff00']
        }));
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#00ff00', '#ff00ff', '#0080ff']
        }));
      }, 250);

      // Update best score
      if (bestScore === null || moves < bestScore) {
        setBestScore(moves);
        localStorage.setItem('memory_best_score', moves.toString());
      }
    }
  }, [matches, moves, bestScore]);

  const handleCardClick = (id: number) => {
    const clickedCard = cards[id];
    
    // Prevent clicking if: 2 cards already flipped, card already flipped, or card is matched
    if (flippedCards.length >= 2 || clickedCard.isFlipped || clickedCard.isMatched) {
      return;
    }

    // Flip the card
    setCards(prev =>
      prev.map(card =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );
    
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    // Start timer on first click
    if (!isPlaying && moves === 0 && newFlippedCards.length === 1) {
      setIsPlaying(true);
    }

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Memory Challenge</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Memory Card Game
            </h1>
            <p className="text-muted-foreground">Match all the pairs in minimum moves!</p>
          </motion.div>

          {/* Combo Indicator */}
          <AnimatePresence>
            {showCombo && combo > 1 && (
              <motion.div
                initial={{ scale: 0, y: -50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 50 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-2xl shadow-2xl border-4 border-white">
                  <motion.div
                    animate={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 10, repeat: 2, repeatType: 'reverse' }}
                    className="text-5xl font-black text-center"
                  >
                    {combo}x COMBO! 🔥
                  </motion.div>
                  <div className="text-center text-xl font-bold mt-2">AMAZING!</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-8 max-w-4xl mx-auto px-2"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Time</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">{score}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Score</div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{moves}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Moves</div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/20 border border-accent/20 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">{matches}/{emojis.length}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Matches</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 text-center relative overflow-hidden">
              <motion.div
                animate={combo > 0 ? { 
                  scale: 1.1
                } : { scale: 1 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                className="text-3xl font-bold text-purple-600"
              >
                {combo}x
              </motion.div>
              <div className="text-sm text-muted-foreground">Combo</div>
              {combo > 1 && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-yellow-600">{bestScore ?? '-'}</div>
              <div className="text-sm text-muted-foreground">Best</div>
            </div>
          </motion.div>

          {/* Game Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-xl mb-6 relative overflow-hidden"
          >
            {/* Crazy Particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-3 h-3 rounded-full pointer-events-none z-50"
                style={{ 
                  left: `${particle.x}%`, 
                  top: `${particle.y}%`,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 10px ${particle.color}`
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ 
                  scale: 3,
                  opacity: 0,
                  y: -100,
                  rotate: 360
                }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            ))}
            
            <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto relative">
              <AnimatePresence>
                {cards.map((card) => (
                  <motion.button
                    key={card.id}
                    initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: card.id * 0.05, type: 'spring', stiffness: 200, damping: 15 }}
                    whileHover={{ 
                      scale: card.isMatched ? 1 : 1.05,
                      y: card.isMatched ? 0 : -5
                    }}
                    whileTap={{ scale: card.isMatched ? 1 : 0.95 }}
                    onClick={() => handleCardClick(card.id)}
                    disabled={card.isFlipped || card.isMatched}
                    className={`
                      aspect-square rounded-xl text-4xl md:text-5xl font-bold relative
                      transition-all duration-500
                      ${card.isMatched
                        ? 'bg-gradient-to-br from-green-500/30 to-green-600/30 border-2 border-green-500/50 animate-pulse'
                        : card.isFlipped
                        ? 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 border-2 border-purple-400 shadow-lg shadow-purple-500/50'
                        : 'bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 hover:border-purple-500 cursor-pointer hover:shadow-xl'
                      }
                      flex items-center justify-center
                    `}
                  >
                    {/* Glow effect for matched cards */}
                    {card.isMatched && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(34, 197, 94, 0.5)',
                            '0 0 40px rgba(34, 197, 94, 0.8)',
                            '0 0 20px rgba(34, 197, 94, 0.5)'
                          ]
                        }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                    )}
                    
                    {/* Rainbow glow for flipped cards */}
                    {card.isFlipped && !card.isMatched && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        animate={{
                          boxShadow: [
                            '0 0 15px rgba(168, 85, 247, 0.5)',
                            '0 0 25px rgba(236, 72, 153, 0.5)',
                            '0 0 15px rgba(239, 68, 68, 0.5)',
                            '0 0 25px rgba(168, 85, 247, 0.5)'
                          ]
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}
                    
                    <motion.span
                      initial={false}
                      animate={{
                        rotateY: card.isFlipped || card.isMatched ? 0 : 180,
                        opacity: card.isFlipped || card.isMatched ? 1 : 0,
                        scale: card.isFlipped || card.isMatched ? 1.1 : 1
                      }}
                      transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative z-10"
                    >
                      {card.isFlipped || card.isMatched ? card.emoji : '❓'}
                    </motion.span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Game Won Message */}
            <AnimatePresence>
              {gameWon && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="mt-8 text-center space-y-4"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                      Congratulations! 🎉
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    You completed the game in <span className="font-bold text-primary">{moves}</span> moves!
                  </p>
                  {bestScore === moves && (
                    <p className="text-yellow-600 font-semibold">🏆 New Best Score!</p>
                  )}
                  <Button onClick={initializeGame} size="lg" className="gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Play Again
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {!gameWon && (
              <div className="text-center mt-6">
                <Button onClick={initializeGame} variant="outline" className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Restart Game
                </Button>
              </div>
            )}
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 text-center"
          >
            <h3 className="font-semibold mb-2">How to Play</h3>
            <p className="text-sm text-muted-foreground">
              Click on cards to reveal them. Find matching pairs with the fewest moves possible. 
              Train your memory and beat your best score!
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MemoryCardGame;
