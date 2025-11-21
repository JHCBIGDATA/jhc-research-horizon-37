import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Brain, RotateCcw, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

type Player = 'X' | 'O' | null;

const TicTacToeGame = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<'X' | 'O' | 'Draw' | null>(null);
  const [score, setScore] = useState({ player: 0, ai: 0, draws: 0 });
  const [winningCombo, setWinningCombo] = useState<number[]>([]);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  const checkWinner = (currentBoard: Player[], trackCombo: boolean = false): 'X' | 'O' | 'Draw' | null => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        if (trackCombo) setWinningCombo(combo);
        return currentBoard[a];
      }
    }
    if (currentBoard.every(cell => cell !== null)) {
      return 'Draw';
    }
    return null;
  };

  const getAvailableMoves = (currentBoard: Player[]): number[] => {
    return currentBoard.map((cell, index) => cell === null ? index : -1).filter(i => i !== -1);
  };

  const minimax = (currentBoard: Player[], depth: number, isMaximizing: boolean): number => {
    const result = checkWinner(currentBoard);
    
    if (result === 'O') return 10 - depth;
    if (result === 'X') return depth - 10;
    if (result === 'Draw') return 0;

    const availableMoves = getAvailableMoves(currentBoard);

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (const move of availableMoves) {
        currentBoard[move] = 'O';
        const score = minimax(currentBoard, depth + 1, false);
        currentBoard[move] = null;
        bestScore = Math.max(score, bestScore);
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (const move of availableMoves) {
        currentBoard[move] = 'X';
        const score = minimax(currentBoard, depth + 1, true);
        currentBoard[move] = null;
        bestScore = Math.min(score, bestScore);
      }
      return bestScore;
    }
  };

  const getBestMove = (currentBoard: Player[]): number => {
    let bestScore = -Infinity;
    let bestMove = -1;
    const availableMoves = getAvailableMoves(currentBoard);

    for (const move of availableMoves) {
      currentBoard[move] = 'O';
      const score = minimax(currentBoard, 0, false);
      currentBoard[move] = null;
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }

    return bestMove;
  };

  const handleCellClick = (index: number) => {
    if (board[index] || gameOver || !isPlayerTurn) return;

    // Particle explosion on click
    if (!isMobile) {
      setParticles(prev => [...prev, { id: Date.now(), x: (index % 3) * 33 + 16, y: Math.floor(index / 3) * 33 + 16 }]);
      setTimeout(() => setParticles(prev => prev.slice(1)), 1000);
    }

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const result = checkWinner(newBoard, true);
    if (result) {
      handleGameEnd(result);
      return;
    }

    setIsPlayerTurn(false);
  };

  useEffect(() => {
    if (!isPlayerTurn && !gameOver) {
      const timer = setTimeout(() => {
        const bestMove = getBestMove([...board]);
        if (bestMove !== -1) {
          const newBoard = [...board];
          newBoard[bestMove] = 'O';
          setBoard(newBoard);

          const result = checkWinner(newBoard, true);
          if (result) {
            handleGameEnd(result);
          } else {
            setIsPlayerTurn(true);
          }
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, board, gameOver]);

  const handleGameEnd = (result: 'X' | 'O' | 'Draw') => {
    setGameOver(true);
    setWinner(result);

    if (result === 'X') {
      setScore(prev => ({ ...prev, player: prev.player + 1 }));
      // EPIC WIN CONFETTI
      const duration = 3000;
      const end = Date.now() + duration;
      const colors = ['#00ff00', '#00ffff', '#ffff00', '#ff00ff'];
      
      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    } else if (result === 'O') {
      setScore(prev => ({ ...prev, ai: prev.ai + 1 }));
    } else {
      setScore(prev => ({ ...prev, draws: prev.draws + 1 }));
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameOver(false);
    setWinner(null);
    setWinningCombo([]);
    setParticles([]);
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
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Game</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tic-Tac-Toe vs AI
            </h1>
            <p className="text-muted-foreground">Challenge the unbeatable AI algorithm</p>
          </motion.div>

          {/* Score Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{score.player}</div>
              <div className="text-sm text-muted-foreground">You (X)</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{score.draws}</div>
              <div className="text-sm text-muted-foreground">Draws</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{score.ai}</div>
              <div className="text-sm text-muted-foreground">AI (O)</div>
            </div>
          </motion.div>

          {/* Game Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl mb-6 relative overflow-hidden"
          >
            {/* Crazy Particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 bg-green-500 rounded-full pointer-events-none"
                style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ 
                  scale: [0, 2, 0],
                  opacity: [1, 0.5, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50]
                }}
                transition={{ duration: 1 }}
              />
            ))}
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto relative">
              {board.map((cell, index) => {
                const isWinning = winningCombo.includes(index);
                return (
                <motion.button
                  key={index}
                  whileHover={{ scale: cell === null && !gameOver ? 1.1 : 1, rotate: cell === null && !gameOver ? 5 : 0 }}
                  whileTap={{ scale: cell === null && !gameOver ? 0.9 : 1 }}
                  onClick={() => handleCellClick(index)}
                  disabled={cell !== null || gameOver || !isPlayerTurn}
                  className={`
                    aspect-square rounded-xl text-5xl font-bold relative
                    transition-all duration-300
                    ${cell === null && !gameOver && isPlayerTurn
                      ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 hover:border-primary/50 cursor-pointer hover:shadow-lg hover:shadow-primary/50'
                      : 'bg-muted/30 border-2 border-muted'
                    }
                    ${cell === 'X' ? 'text-green-600' : cell === 'O' ? 'text-red-600' : ''}
                    ${isWinning ? 'animate-pulse border-4 border-yellow-400 bg-gradient-to-br from-yellow-400/30 to-orange-500/30' : ''}
                  `}
                  animate={isWinning ? {
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 20px rgba(251, 191, 36, 0.5)',
                      '0 0 40px rgba(251, 191, 36, 0.8)',
                      '0 0 20px rgba(251, 191, 36, 0.5)'
                    ]
                  } : {}}
                  transition={{ repeat: isWinning ? Infinity : 0, duration: 0.8 }}
                >
                  {/* Glow effect for active cells */}
                  {cell && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        boxShadow: [
                          `0 0 20px ${cell === 'X' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                          `0 0 40px ${cell === 'X' ? 'rgba(34, 197, 94, 0.6)' : 'rgba(239, 68, 68, 0.6)'}`,
                          `0 0 20px ${cell === 'X' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                        ]
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                  
                  {cell && (
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="relative z-10"
                    >
                      {cell}
                    </motion.span>
                  )}
                </motion.button>
              )})}
            </div>

            {/* Game Status */}
            <div className="text-center mt-6">
              {!gameOver ? (
                <p className="text-lg font-medium">
                  {isPlayerTurn ? (
                    <span className="text-green-600">Your Turn (X)</span>
                  ) : (
                    <span className="text-red-600 flex items-center justify-center gap-2">
                      <Brain className="w-5 h-5 animate-pulse" />
                      AI is thinking...
                    </span>
                  )}
                </p>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-center gap-2">
                    {winner === 'X' && <Trophy className="w-6 h-6 text-green-600" />}
                    <p className="text-2xl font-bold">
                      {winner === 'X' && <span className="text-green-600">You Win! 🎉</span>}
                      {winner === 'O' && <span className="text-red-600">AI Wins!</span>}
                      {winner === 'Draw' && <span className="text-yellow-600">It's a Draw!</span>}
                    </p>
                  </div>
                  <Button onClick={resetGame} className="gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Play Again
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 text-center"
          >
            <h3 className="font-semibold mb-2">About the AI</h3>
            <p className="text-sm text-muted-foreground">
              This AI uses the Minimax algorithm to make optimal decisions. It's nearly impossible to beat! 
              The best you can do is force a draw with perfect play.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TicTacToeGame;
