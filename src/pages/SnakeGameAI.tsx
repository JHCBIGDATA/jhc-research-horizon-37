import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Zap, Play, Pause, RotateCcw, Brain } from 'lucide-react';
import confetti from 'canvas-confetti';

type Position = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

const SnakeGameAI = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('snake_high_score');
    return saved ? parseInt(saved) : 0;
  });
  const [isPaused, setIsPaused] = useState(true);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [trail, setTrail] = useState<Position[]>([]);
  const [powerUps, setPowerUps] = useState<Position[]>([]);
  const [aiMode, setAiMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const generateFood = useCallback(() => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const generatePowerUp = useCallback(() => {
    if (Math.random() > 0.8) {
      const powerUp = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
      setPowerUps(prev => [...prev, powerUp]);
    }
  }, []);

  const getAIDirection = useCallback(() => {
    const head = snake[0];
    
    // ENHANCED AI: Score-based pathfinding with lookahead
    const allDirections: Direction[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
    const scoredMoves: Array<{dir: Direction, score: number}> = [];

    for (const dir of allDirections) {
      let newHead = { ...head };
      switch (dir) {
        case 'UP': newHead.y -= 1; break;
        case 'DOWN': newHead.y += 1; break;
        case 'LEFT': newHead.x -= 1; break;
        case 'RIGHT': newHead.x += 1; break;
      }

      // Skip invalid moves (walls or self-collision)
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || 
          newHead.y < 0 || newHead.y >= GRID_SIZE ||
          snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        continue;
      }

      let score = 0;
      
      // 1. Distance to food (closer is better)
      const distToFood = Math.abs(food.x - newHead.x) + Math.abs(food.y - newHead.y);
      score -= distToFood * 10;
      
      // 2. Distance to walls (stay away from edges)
      const wallDist = Math.min(
        newHead.x,
        newHead.y,
        GRID_SIZE - newHead.x - 1,
        GRID_SIZE - newHead.y - 1
      );
      score += wallDist * 8;
      
      // 3. Available space around next position (avoid traps)
      let freeNeighbors = 0;
      const neighborDirs: Direction[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
      for (const nDir of neighborDirs) {
        let testPos = { ...newHead };
        switch (nDir) {
          case 'UP': testPos.y -= 1; break;
          case 'DOWN': testPos.y += 1; break;
          case 'LEFT': testPos.x -= 1; break;
          case 'RIGHT': testPos.x += 1; break;
        }
        if (testPos.x >= 0 && testPos.x < GRID_SIZE && 
            testPos.y >= 0 && testPos.y < GRID_SIZE &&
            !snake.some(s => s.x === testPos.x && s.y === testPos.y)) {
          freeNeighbors++;
        }
      }
      score += freeNeighbors * 20;
      
      // 4. Power-up attraction
      if (powerUps.length > 0) {
        const closestPowerUp = powerUps[0];
        const distToPowerUp = Math.abs(closestPowerUp.x - newHead.x) + Math.abs(closestPowerUp.y - newHead.y);
        score -= distToPowerUp * 5;
      }
      
      // 5. Prefer continuing in same direction (smoother movement)
      if (dir === direction) score += 5;
      
      scoredMoves.push({ dir, score });
    }

    // Return best move or keep current direction
    if (scoredMoves.length === 0) return direction;
    scoredMoves.sort((a, b) => b.score - a.score);
    return scoredMoves[0].dir;
  }, [snake, food, direction, powerUps]);

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    const currentDirection = aiMode ? getAIDirection() : direction;
    const head = { ...snake[0] };

    switch (currentDirection) {
      case 'UP': head.y -= 1; break;
      case 'DOWN': head.y += 1; break;
      case 'LEFT': head.x -= 1; break;
      case 'RIGHT': head.x += 1; break;
    }

    // Check collision with walls
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      setGameOver(true);
      setIsPaused(true);
      return;
    }

    // Check collision with self
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      setIsPaused(true);
      return;
    }

    const newSnake = [head, ...snake];

    // Check if food is eaten
    if (head.x === food.x && head.y === food.y) {
      setScore(prev => {
        const newScore = prev + 10;
        if (newScore > highScore) {
          setHighScore(newScore);
          localStorage.setItem('snake_high_score', newScore.toString());
        }
        return newScore;
      });
      setFood(generateFood());
      setSpeed(prev => Math.max(50, prev - 2));
      generatePowerUp();
      
      // EPIC food collection effect
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x: head.x / GRID_SIZE, y: head.y / GRID_SIZE },
        colors: ['#00ff00', '#00ffff', '#ffff00']
      });
    } else {
      newSnake.pop();
    }

    // Check power-up collection
    const collectedPowerUp = powerUps.findIndex(p => p.x === head.x && p.y === head.y);
    if (collectedPowerUp !== -1) {
      setScore(prev => prev + 50);
      setPowerUps(prev => prev.filter((_, i) => i !== collectedPowerUp));
      confetti({
        particleCount: 100,
        spread: 100,
        colors: ['#ff00ff', '#00ffff', '#ffff00']
      });
    }

    setTrail(prev => [head, ...prev.slice(0, 10)]);
    setSnake(newSnake);
  }, [snake, direction, food, gameOver, isPaused, generateFood, generatePowerUp, highScore, aiMode, getAIDirection, powerUps]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (aiMode) return; // Don't accept input in AI mode
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        case ' ':
          setIsPaused(prev => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, aiMode]);

  useEffect(() => {
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }

    if (!isPaused && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, speed);
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [moveSnake, speed, isPaused, gameOver]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setTrail([]);
    setPowerUps([]);
    setIsPaused(true);
  };

  const toggleAI = () => {
    setAiMode(prev => !prev);
    if (!aiMode) {
      setIsPaused(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Retro Enhanced</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Snake Game AI
            </h1>
            <p className="text-gray-400">Classic snake with AI autopilot and crazy effects!</p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Game Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              {/* Stats */}
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-xl p-4">
                  <div className="text-3xl font-bold text-green-400">{score}</div>
                  <div className="text-sm text-gray-400">Score</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-4">
                  <div className="text-3xl font-bold text-yellow-400">{highScore}</div>
                  <div className="text-sm text-gray-400">Best</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4">
                  <div className="text-3xl font-bold text-purple-400">{snake.length}</div>
                  <div className="text-sm text-gray-400">Length</div>
                </div>
              </div>

              {/* Game Board */}
              <div className="relative bg-black/50 border-4 border-green-500/50 rounded-2xl p-4 shadow-2xl shadow-green-500/30">
                <div
                  className="relative mx-auto bg-gradient-to-br from-gray-900 to-black"
                  style={{
                    width: GRID_SIZE * CELL_SIZE,
                    height: GRID_SIZE * CELL_SIZE,
                    display: 'grid',
                    gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`
                  }}
                >
                  {/* Grid lines */}
                  {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-green-900/20"
                      style={{ width: CELL_SIZE, height: CELL_SIZE }}
                    />
                  ))}

                  {/* Trail effect */}
                  {trail.map((pos, i) => (
                    <motion.div
                      key={`trail-${i}`}
                      className="absolute bg-green-400/20 rounded-sm"
                      style={{
                        left: pos.x * CELL_SIZE,
                        top: pos.y * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE
                      }}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    />
                  ))}

                  {/* Snake */}
                  {snake.map((segment, i) => (
                  <motion.div
                      key={`snake-${i}`}
                      className="absolute rounded-sm"
                      style={{
                        left: segment.x * CELL_SIZE,
                        top: segment.y * CELL_SIZE,
                        width: CELL_SIZE - 2,
                        height: CELL_SIZE - 2,
                        background: i === 0 
                          ? 'radial-gradient(circle, #00ffff 0%, #00ff00 50%, #00cc00 100%)'
                          : `linear-gradient(135deg, #00ff00 ${Math.max(20, 100 - (i * 4))}%, #00aa00 ${Math.min(80, 100 - (i * 2))}%)`,
                        border: i === 0 ? '1px solid rgba(0, 255, 255, 0.5)' : '1px solid rgba(0, 255, 0, 0.3)'
                      }}
                      animate={i === 0 ? {
                        scale: [1, 1.15, 1],
                        boxShadow: [
                          '0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 255, 0, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.3)',
                          '0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 255, 0, 0.9), inset 0 0 15px rgba(255, 255, 255, 0.5)',
                          '0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 255, 0, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.3)'
                        ]
                      } : {
                        boxShadow: `0 0 ${Math.max(5, 15 - i)}px rgba(0, 255, 0, ${Math.max(0.1, 0.5 - i * 0.02)}), inset 0 0 5px rgba(255, 255, 255, 0.1)`
                      }}
                      transition={i === 0 ? { duration: 0.4, repeat: Infinity } : {}}
                    >
                      {/* Snake head eyes */}
                      {i === 0 && (
                        <>
                          <div className="absolute w-1 h-1 bg-white rounded-full" style={{ left: '30%', top: '30%' }} />
                          <div className="absolute w-1 h-1 bg-white rounded-full" style={{ right: '30%', top: '30%' }} />
                        </>
                      )}
                    </motion.div>
                  ))}

                  {/* Food - Classic Red Apple */}
                  <motion.div
                    className="absolute"
                    style={{
                      left: food.x * CELL_SIZE,
                      top: food.y * CELL_SIZE,
                      width: CELL_SIZE,
                      height: CELL_SIZE
                    }}
                  >
                    <motion.div
                      className="absolute rounded-full"
                      style={{
                        left: 1,
                        top: 1,
                        width: CELL_SIZE - 2,
                        height: CELL_SIZE - 2,
                        background: 'radial-gradient(circle at 30% 30%, #ff6666, #ff0000, #cc0000)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 15px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.4)',
                          '0 0 25px rgba(255, 0, 0, 1), 0 0 50px rgba(255, 0, 0, 0.6)',
                          '0 0 15px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.4)'
                        ]
                      }}
                      transition={{ 
                        scale: { duration: 0.8, repeat: Infinity },
                        boxShadow: { duration: 1.2, repeat: Infinity }
                      }}
                    />
                    <motion.div
                      className="absolute text-2xl"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                      }}
                      animate={{
                        scale: [1, 1.15, 1]
                      }}
                      transition={{
                        scale: { duration: 0.8, repeat: Infinity }
                      }}
                    >
                      🍎
                    </motion.div>
                  </motion.div>

                  {/* Power-ups */}
                  {powerUps.map((powerUp, i) => (
                    <motion.div
                      key={`powerup-${i}`}
                      className="absolute"
                      style={{
                        left: powerUp.x * CELL_SIZE,
                        top: powerUp.y * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE
                      }}
                    >
                      <motion.div
                        className="absolute rounded-full"
                        style={{
                          left: 2,
                          top: 2,
                          width: CELL_SIZE - 4,
                          height: CELL_SIZE - 4,
                          background: 'linear-gradient(135deg, #ffff00, #ff00ff, #00ffff)',
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, -180, -360],
                          boxShadow: [
                            '0 0 20px rgba(255, 255, 0, 1), 0 0 40px rgba(255, 0, 255, 0.6)',
                            '0 0 35px rgba(255, 0, 255, 1), 0 0 70px rgba(0, 255, 255, 0.8)',
                            '0 0 20px rgba(255, 255, 0, 1), 0 0 40px rgba(255, 0, 255, 0.6)'
                          ]
                        }}
                        transition={{ 
                          scale: { duration: 0.7, repeat: Infinity },
                          rotate: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                          boxShadow: { duration: 1, repeat: Infinity }
                        }}
                      />
                      <motion.div
                        className="absolute text-xl font-bold text-yellow-300"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          textShadow: '0 0 10px rgba(255, 255, 0, 1)'
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        ⭐
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Game Over Overlay */}
                  <AnimatePresence>
                    {gameOver && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                      >
                        <div className="text-center">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="text-6xl font-black text-red-500 mb-4"
                          >
                            GAME OVER!
                          </motion.div>
                          <div className="text-2xl text-white mb-4">Score: {score}</div>
                          {score === highScore && score > 0 && (
                            <div className="text-yellow-400 text-xl mb-4">🏆 NEW HIGH SCORE!</div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Controls</h3>
                <div className="space-y-3">
                  <Button
                    onClick={() => setIsPaused(!isPaused)}
                    disabled={gameOver}
                    className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-500/50 disabled:opacity-50"
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    {isPaused ? 'Start Game' : 'Pause'}
                  </Button>
                  <Button 
                    onClick={resetGame} 
                    className="w-full gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg shadow-orange-500/50"
                  >
                    <RotateCcw className="w-4 h-4" />
                    New Game
                  </Button>
                  <Button 
                    onClick={toggleAI} 
                    className={`w-full gap-2 font-bold shadow-lg ${
                      aiMode 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/50' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/50'
                    }`}
                  >
                    <Brain className="w-4 h-4" />
                    {aiMode ? 'AI Mode: ON' : 'Manual Mode'}
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>📖</span> How to Play
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>🎮 <span className="text-white font-semibold">Arrow Keys</span> - Control snake direction</p>
                  <p>⏯️ <span className="text-white font-semibold">Space Bar</span> - Pause/Resume game</p>
                  <p>🍎 <span className="text-red-400 font-semibold">Red Apple</span> - Grow & score (+10 pts)</p>
                  <p>⭐ <span className="text-yellow-400 font-semibold">Gold Star</span> - Bonus power-up (+50 pts)</p>
                  <p>🤖 <span className="text-purple-400 font-semibold">AI Mode</span> - Auto-pilot gameplay!</p>
                  <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-700">💡 Tip: Avoid walls and your own tail!</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-cyan-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2 text-green-400">Status</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Speed:</span>
                    <span className="text-white font-bold">{(200 - speed).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mode:</span>
                    <span className={`font-bold ${aiMode ? 'text-purple-400' : 'text-green-400'}`}>
                      {aiMode ? 'AI' : 'Manual'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SnakeGameAI;
