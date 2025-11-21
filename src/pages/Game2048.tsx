import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Grid3x3, RotateCcw, Trophy, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

type Tile = number;
type Board = Tile[][];

const GRID_SIZE = 4;
const TILE_COLORS: Record<number, string> = {
  0: 'bg-gray-800/50',
  2: 'bg-gradient-to-br from-cyan-500 to-blue-500',
  4: 'bg-gradient-to-br from-blue-500 to-purple-500',
  8: 'bg-gradient-to-br from-purple-500 to-pink-500',
  16: 'bg-gradient-to-br from-pink-500 to-red-500',
  32: 'bg-gradient-to-br from-red-500 to-orange-500',
  64: 'bg-gradient-to-br from-orange-500 to-yellow-500',
  128: 'bg-gradient-to-br from-yellow-500 to-green-500',
  256: 'bg-gradient-to-br from-green-500 to-cyan-500',
  512: 'bg-gradient-to-br from-cyan-500 to-blue-600',
  1024: 'bg-gradient-to-br from-blue-600 to-purple-600',
  2048: 'bg-gradient-to-br from-purple-600 to-pink-600',
};

const Game2048 = () => {
  const [board, setBoard] = useState<Board>(() => initializeBoard());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('2048_best_score');
    return saved ? parseInt(saved) : 0;
  });
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, value: number}>>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [rainbowMode, setRainbowMode] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  function initializeBoard(): Board {
    const newBoard: Board = Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0));
    addRandomTile(newBoard);
    addRandomTile(newBoard);
    return newBoard;
  }

  function addRandomTile(board: Board) {
    const emptyTiles: [number, number][] = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (board[i][j] === 0) emptyTiles.push([i, j]);
      }
    }
    if (emptyTiles.length > 0) {
      const [i, j] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      board[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
  }

  const move = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (gameOver || won) return;

    let newBoard = board.map(row => [...row]);
    let moved = false;
    let scoreGained = 0;
    const mergedPositions: Array<{x: number, y: number, value: number}> = [];

    const moveAndMerge = (arr: Tile[]): Tile[] => {
      const filtered = arr.filter(val => val !== 0);
      const merged: Tile[] = [];
      let i = 0;

      while (i < filtered.length) {
        if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
          const mergedValue = filtered[i] * 2;
          merged.push(mergedValue);
          scoreGained += mergedValue;
          i += 2;
        } else {
          merged.push(filtered[i]);
          i++;
        }
      }

      while (merged.length < GRID_SIZE) {
        merged.push(0);
      }

      return merged;
    };

    if (direction === 'left') {
      newBoard = newBoard.map(row => moveAndMerge(row));
    } else if (direction === 'right') {
      newBoard = newBoard.map(row => moveAndMerge([...row].reverse()).reverse());
    } else if (direction === 'up') {
      for (let j = 0; j < GRID_SIZE; j++) {
        const column = newBoard.map(row => row[j]);
        const merged = moveAndMerge(column);
        for (let i = 0; i < GRID_SIZE; i++) {
          newBoard[i][j] = merged[i];
        }
      }
    } else if (direction === 'down') {
      for (let j = 0; j < GRID_SIZE; j++) {
        const column = newBoard.map(row => row[j]);
        const merged = moveAndMerge([...column].reverse()).reverse();
        for (let i = 0; i < GRID_SIZE; i++) {
          newBoard[i][j] = merged[i];
        }
      }
    }

    // Check if board changed
    moved = JSON.stringify(board) !== JSON.stringify(newBoard);

    if (moved) {
      addRandomTile(newBoard);
      setBoard(newBoard);
      
      const newScore = score + scoreGained;
      setScore(newScore);
      
      if (newScore > bestScore) {
        setBestScore(newScore);
        localStorage.setItem('2048_best_score', newScore.toString());
      }

      // Particle effects for merges
      if (scoreGained > 0) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        
        // Activate rainbow mode on 5+ streak
        if (newStreak >= 5 && !rainbowMode) {
          setRainbowMode(true);
          setTimeout(() => setRainbowMode(false), 10000);
        }
        
        if (!isMobile) {
          setParticles(prev => [...prev, {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            value: scoreGained * (newStreak > 3 ? 2 : 1)
          }]);
          setTimeout(() => setParticles(prev => prev.slice(1)), 1000);
        }

        confetti({
          particleCount: Math.min(scoreGained / (isMobile ? 20 : 10), isMobile ? 25 : 50),
          spread: 50,
          colors: rainbowMode ? ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'] : ['#00ffff', '#ff00ff', '#ffff00']
        });
      } else {
        setStreak(0);
      }

      // Check for win
      if (newBoard.some(row => row.some(tile => tile === 2048))) {
        setWon(true);
        // MEGA WIN CELEBRATION
        const duration = 3000;
        const end = Date.now() + duration;
        (function frame() {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00']
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00']
          });
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      }

      // Check for game over
      if (!canMove(newBoard)) {
        setGameOver(true);
      }
    }
  }, [board, gameOver, won, score, bestScore]);

  function canMove(board: Board): boolean {
    // Check for empty tiles
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (board[i][j] === 0) return true;
      }
    }

    // Check for possible merges
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const current = board[i][j];
        if (j < GRID_SIZE - 1 && board[i][j + 1] === current) return true;
        if (i < GRID_SIZE - 1 && board[i + 1][j] === current) return true;
      }
    }

    return false;
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          move('up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          move('down');
          break;
        case 'ArrowLeft':
          e.preventDefault();
          move('left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          move('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [move]);

  const resetGame = () => {
    setBoard(initializeBoard());
    setScore(0);
    setGameOver(false);
    setWon(false);
    setParticles([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-4">
              <Grid3x3 className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Puzzle Challenge</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2048 Extreme
            </h1>
            <p className="text-gray-400">Merge tiles to reach 2048 with crazy effects!</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-2 md:gap-4 mb-8 px-2"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">{score}</div>
              <div className="text-xs md:text-sm text-gray-400">Score</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">{bestScore}</div>
              <div className="text-xs md:text-sm text-gray-400">Best</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                {Math.max(...board.flat())}
              </div>
              <div className="text-xs md:text-sm text-gray-400">Max Tile</div>
            </div>
          </motion.div>

          {/* Game Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-purple-500/50 rounded-3xl p-4 shadow-2xl shadow-purple-500/30 mb-8"
          >
            {/* Crazy Particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute text-2xl font-bold z-50 pointer-events-none"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  color: '#ffff00',
                  textShadow: '0 0 10px #ffff00'
                }}
                initial={{ opacity: 1, scale: 0 }}
                animate={{
                  opacity: 0,
                  scale: 2,
                  y: -50
                }}
                transition={{ duration: 1 }}
              >
                +{particle.value}
              </motion.div>
            ))}

            <div className="grid grid-cols-4 gap-3 bg-gray-900/50 p-3 rounded-2xl">
              {board.map((row, i) =>
                row.map((tile, j) => (
                  <motion.div
                    key={`${i}-${j}`}
                    className="relative aspect-square rounded-xl flex items-center justify-center overflow-hidden"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: (i * GRID_SIZE + j) * 0.03 }}
                  >
                    <div className={`absolute inset-0 ${tile === 0 ? TILE_COLORS[0] : ''}`} />
                    <AnimatePresence mode="wait">
                      {tile !== 0 && (
                        <motion.div
                          key={tile}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className={`absolute inset-0 ${TILE_COLORS[tile] || 'bg-gradient-to-br from-red-600 to-yellow-600'} flex items-center justify-center rounded-xl shadow-lg`}
                        >
                          <motion.div
                            animate={{
                              boxShadow: [
                                '0 0 20px rgba(255, 255, 255, 0.3)',
                                '0 0 40px rgba(255, 255, 255, 0.5)',
                                '0 0 20px rgba(255, 255, 255, 0.3)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-xl"
                          />
                          <span className={`relative z-10 font-black ${tile >= 128 ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'} text-white drop-shadow-2xl`}>
                            {tile}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              )}
            </div>

            {/* Game Over / Win Overlay */}
            <AnimatePresence>
              {(gameOver || won) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-3xl"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className={`text-6xl font-black mb-4 ${won ? 'text-yellow-400' : 'text-red-500'}`}
                    >
                      {won ? '🎉 YOU WON! 🎉' : 'GAME OVER'}
                    </motion.div>
                    <div className="text-3xl text-white mb-6">Score: {score}</div>
                    {score === bestScore && score > 0 && (
                      <div className="text-yellow-400 text-xl mb-4 flex items-center gap-2 justify-center">
                        <Trophy className="w-6 h-6" />
                        NEW RECORD!
                      </div>
                    )}
                    <Button onClick={resetGame} size="lg" className="gap-2">
                      <RotateCcw className="w-5 h-5" />
                      Play Again
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Controls
              </h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>⌨️ <span className="text-white">Arrow Keys</span> - Move tiles</p>
                <p>🎯 <span className="text-white">Goal</span> - Reach 2048!</p>
                <p>✨ <span className="text-purple-400">Merge</span> - Combine same numbers</p>
              </div>
              <Button onClick={resetGame} className="w-full mt-4 gap-2" variant="outline">
                <RotateCcw className="w-4 h-4" />
                New Game
              </Button>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">How to Play</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Use arrow keys to move all tiles</p>
                <p>• When two tiles with same number touch, they merge!</p>
                <p>• Create a tile with 2048 to win</p>
                <p>• Game ends when you can't move anymore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Game2048;
