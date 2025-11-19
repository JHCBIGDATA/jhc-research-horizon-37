import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Download, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the first section of a research paper?",
    options: ["Abstract", "Introduction", "Literature Review", "Methodology"],
    correctAnswer: 0,
    explanation: "The Abstract comes first and provides a concise summary of the entire research paper, including objectives, methods, results, and conclusions."
  },
  {
    id: 2,
    question: "What is the primary purpose of a Literature Review?",
    options: [
      "To fill pages in your paper",
      "To show existing research and identify gaps",
      "To copy other researchers' work",
      "To add references"
    ],
    correctAnswer: 1,
    explanation: "A Literature Review examines existing research to establish context, identify gaps in knowledge, and justify your research's significance."
  },
  {
    id: 3,
    question: "Which citation style is commonly used in Computer Science?",
    options: ["APA", "MLA", "IEEE", "Chicago"],
    correctAnswer: 2,
    explanation: "IEEE (Institute of Electrical and Electronics Engineers) style is the standard citation format for computer science and engineering research papers."
  },
  {
    id: 4,
    question: "What should the Methodology section include?",
    options: [
      "Your personal opinions",
      "Research design, data collection, and analysis methods",
      "Only the final results",
      "Literature review summary"
    ],
    correctAnswer: 1,
    explanation: "The Methodology section describes your research design, data collection techniques, analysis methods, and procedures to ensure reproducibility."
  },
  {
    id: 5,
    question: "What is peer review in academic publishing?",
    options: [
      "Friends reviewing your work",
      "Expert evaluation by other researchers in the field",
      "Self-review of your paper",
      "Spell-check process"
    ],
    correctAnswer: 1,
    explanation: "Peer review is a rigorous evaluation process where experts in the field assess the quality, validity, and significance of research before publication."
  },
  {
    id: 6,
    question: "What is plagiarism in research?",
    options: [
      "Using proper citations",
      "Using others' work without proper attribution",
      "Collaborating with peers",
      "Reading published papers"
    ],
    correctAnswer: 1,
    explanation: "Plagiarism is presenting someone else's work, ideas, or words as your own without proper citation, which is a serious academic offense."
  },
  {
    id: 7,
    question: "What does 'p-value' represent in statistical analysis?",
    options: [
      "Paper value",
      "Probability of results occurring by chance",
      "Publication value",
      "Peer review score"
    ],
    correctAnswer: 1,
    explanation: "A p-value indicates the probability that your results occurred by chance. A low p-value (typically <0.05) suggests statistical significance."
  },
  {
    id: 8,
    question: "What is the purpose of the Conclusion section?",
    options: [
      "To introduce new data",
      "To summarize findings and implications",
      "To add more literature review",
      "To explain methodology again"
    ],
    correctAnswer: 1,
    explanation: "The Conclusion summarizes key findings, discusses implications, acknowledges limitations, and suggests future research directions."
  },
  {
    id: 9,
    question: "What is a hypothesis in research?",
    options: [
      "The final result",
      "A testable prediction about the relationship between variables",
      "A random guess",
      "The research title"
    ],
    correctAnswer: 1,
    explanation: "A hypothesis is a testable prediction or educated guess about the relationship between variables, which research aims to support or refute."
  },
  {
    id: 10,
    question: "What should you do before submitting a paper to a conference?",
    options: [
      "Submit immediately after writing",
      "Proofread, check formatting, and verify all citations",
      "Only check the title",
      "Skip the abstract"
    ],
    correctAnswer: 1,
    explanation: "Before submission, thoroughly proofread your paper, verify formatting guidelines, check all citations, ensure clarity, and confirm all requirements are met."
  }
];

const ResearchPaperQuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false));
  const [userName, setUserName] = useState('');
  const [showBadge, setShowBadge] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [lastScore, setLastScore] = useState(0);
  const [lastUserName, setLastUserName] = useState('');
  const badgeCanvasRef = useRef<HTMLCanvasElement>(null);

  // Check cookie and localStorage on mount
  useEffect(() => {
    const attempted = document.cookie.split('; ').find(row => row.startsWith('quiz_attempted='));
    if (attempted) {
      setHasAttempted(true);
      const savedScore = localStorage.getItem('quiz_last_score');
      const savedName = localStorage.getItem('quiz_last_name');
      if (savedScore && savedName) {
        setLastScore(parseInt(savedScore));
        setLastUserName(savedName);
      }
    }
  }, []);

  // Set cookie and localStorage when quiz completes
  useEffect(() => {
    if (quizComplete && !hasAttempted) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30); // 30 days
      document.cookie = `quiz_attempted=true; expires=${expiryDate.toUTCString()}; path=/`;
      setHasAttempted(true);
      if (score >= 8 && userName) {
        localStorage.setItem('quiz_last_score', score.toString());
        localStorage.setItem('quiz_last_name', userName);
        setLastScore(score);
        setLastUserName(userName);
      }
    }
  }, [quizComplete, hasAttempted, score, userName]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation || answeredQuestions[currentQuestion]) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || answeredQuestions[currentQuestion]) return;
    
    // Store user's answer permanently
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newUserAnswers);
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
      if (score >= 8) {
        // Trigger confetti for high score
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
          });
        }, 250);
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
          });
        }, 400);
      }
    }
  };

  const handleRestart = () => {
    // Clear cookie and localStorage
    document.cookie = 'quiz_attempted=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    localStorage.removeItem('quiz_last_score');
    localStorage.removeItem('quiz_last_name');
    setHasAttempted(false);
    setLastScore(0);
    setLastUserName('');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setAnsweredQuestions(Array(questions.length).fill(false));
    setUserAnswers(Array(questions.length).fill(-1));
    setShowBadge(false);
    setUserName('');
  };

  const generateBadge = () => {
    const name = userName || lastUserName;
    if (!name.trim()) {
      alert('Please enter your name to generate the badge!');
      return;
    }
    if (!userName && lastUserName) {
      setUserName(lastUserName);
    }
    setShowBadge(true);
  };

  useEffect(() => {
    if (showBadge && badgeCanvasRef.current) {
      const canvas = badgeCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size for ultra high quality
      canvas.width = 1600;
      canvas.height = 1100;

      // Elegant gradient background - cream with subtle pattern
      const bgGradient = ctx.createLinearGradient(0, 0, 1600, 1100);
      bgGradient.addColorStop(0, '#fefdfb');
      bgGradient.addColorStop(0.5, '#ffffff');
      bgGradient.addColorStop(1, '#faf8f5');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, 1600, 1100);

      // Add subtle texture pattern
      for (let i = 0; i < 50; i++) {
        ctx.strokeStyle = `rgba(212, 175, 55, ${Math.random() * 0.03})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 1600, 0);
        ctx.lineTo(Math.random() * 1600, 1100);
        ctx.stroke();
      }

      // Outer ornamental border - quadruple gold lines with varying thickness
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 4;
      ctx.strokeRect(30, 30, 1540, 1040);
      ctx.lineWidth = 2;
      ctx.strokeRect(42, 42, 1516, 1016);
      ctx.lineWidth = 6;
      ctx.strokeRect(52, 52, 1496, 996);
      ctx.lineWidth = 2;
      ctx.strokeRect(66, 66, 1468, 968);

      // Inner shadow with gradient
      const shadowGradient = ctx.createLinearGradient(800, 0, 800, 1100);
      shadowGradient.addColorStop(0, 'rgba(30, 64, 175, 0.05)');
      shadowGradient.addColorStop(0.5, 'rgba(212, 175, 55, 0.05)');
      shadowGradient.addColorStop(1, 'rgba(30, 64, 175, 0.05)');
      ctx.strokeStyle = shadowGradient;
      ctx.lineWidth = 25;
      ctx.strokeRect(80, 80, 1440, 940);

      // Enhanced corner decorations with flourishes
      const drawCornerDecoration = (x: number, y: number, rotation: number) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);
        
        // Gold corner bracket
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-40, -40);
        ctx.lineTo(-40, -5);
        ctx.moveTo(-40, -40);
        ctx.lineTo(-5, -40);
        ctx.stroke();
        
        // Inner decorative lines
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-35, -35);
        ctx.lineTo(-35, -10);
        ctx.moveTo(-35, -35);
        ctx.lineTo(-10, -35);
        ctx.stroke();
        
        // Corner ornament
        ctx.fillStyle = '#d4af37';
        ctx.beginPath();
        ctx.arc(-20, -20, 5, 0, 2 * Math.PI);
        ctx.fill();
        
        // Small flourish
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(-20, -20, 10, 0, Math.PI / 2);
        ctx.stroke();
        
        ctx.restore();
      };

      drawCornerDecoration(110, 110, 0);
      drawCornerDecoration(1490, 110, 90);
      drawCornerDecoration(1490, 990, 180);
      drawCornerDecoration(110, 990, 270);

      // Load and draw logo
      const logo = new Image();
      logo.crossOrigin = 'anonymous';
      logo.src = '/lovable-uploads/image-removebg-preview.png';
      logo.onload = () => {
        // Draw logo maintaining aspect ratio (circular logo should stay circular)
        const logoSize = 160;
        ctx.drawImage(logo, 720, 90, logoSize, logoSize);

        // Top decorative line (straight)
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(300, 280);
        ctx.lineTo(1300, 280);
        ctx.stroke();

        // Add decorative dots
        ctx.fillStyle = '#d4af37';
        [300, 800, 1300].forEach(x => {
          ctx.beginPath();
          ctx.arc(x, 280, 4, 0, 2 * Math.PI);
          ctx.fill();
        });

        // Certificate title with enhanced gradient
        const titleGradient = ctx.createLinearGradient(0, 350, 0, 410);
        titleGradient.addColorStop(0, '#1e40af');
        titleGradient.addColorStop(0.5, '#2563eb');
        titleGradient.addColorStop(1, '#1e3a8a');
        ctx.fillStyle = titleGradient;
        ctx.font = 'bold 84px Didot, Georgia, serif';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '6px';
        
        // Add text stroke for depth
        ctx.strokeStyle = 'rgba(30, 64, 175, 0.3)';
        ctx.lineWidth = 1;
        ctx.strokeText('CERTIFICATE', 800, 380);
        ctx.fillText('CERTIFICATE', 800, 380);

        ctx.font = 'italic 42px Georgia, serif';
        ctx.fillStyle = '#9ca3af';
        ctx.fillText('of Excellence', 800, 430);

        // Decorative line under title (straight)
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(450, 455);
        ctx.lineTo(1150, 455);
        ctx.stroke();

        // Central ornament - simple dot
        ctx.fillStyle = '#d4af37';
        ctx.beginPath();
        ctx.arc(800, 455, 6, 0, 2 * Math.PI);
        ctx.fill();

        // "Presented to" text with elegance
        ctx.fillStyle = '#9ca3af';
        ctx.font = 'italic 32px Georgia, serif';
        ctx.fillText('This certificate is proudly presented to', 800, 510);

        // Name - ultra prominent with enhanced shadow
        ctx.save();
        ctx.shadowColor = 'rgba(30, 64, 175, 0.25)';
        ctx.shadowBlur = 12;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        const nameGradient = ctx.createLinearGradient(0, 560, 0, 640);
        nameGradient.addColorStop(0, '#1e40af');
        nameGradient.addColorStop(0.5, '#3b82f6');
        nameGradient.addColorStop(1, '#1e3a8a');
        ctx.fillStyle = nameGradient;
        ctx.font = 'bold 92px Didot, Georgia, serif';
        ctx.fillText(userName, 800, 610);
        ctx.restore();

        // Decorative double underline for name
        const nameWidth = ctx.measureText(userName).width;
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(800 - nameWidth / 2 - 50, 635);
        ctx.lineTo(800 + nameWidth / 2 + 50, 635);
        ctx.stroke();
        
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(800 - nameWidth / 2 - 45, 642);
        ctx.lineTo(800 + nameWidth / 2 + 45, 642);
        ctx.stroke();

        // Achievement text with refined spacing and positioning
        ctx.fillStyle = '#4b5563';
        ctx.font = '32px Georgia, serif';
        ctx.fillText('for demonstrating exceptional proficiency in', 800, 705);
        
        ctx.fillStyle = '#1e40af';
        ctx.font = 'bold 36px Georgia, serif';
        ctx.fillText('Research Methodology & Academic Writing', 800, 755);
        
        ctx.fillStyle = '#4b5563';
        ctx.font = '30px Georgia, serif';
        ctx.fillText('and successfully completing a comprehensive assessment', 800, 805);

        // Bottom decorative line (straight)
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(300, 880);
        ctx.lineTo(1300, 880);
        ctx.stroke();
        
        // Add dots to line
        ctx.fillStyle = '#d4af37';
        [300, 800, 1300].forEach(x => {
          ctx.beginPath();
          ctx.arc(x, 880, 4, 0, 2 * Math.PI);
          ctx.fill();
        });

        // Date with elegant positioning
        ctx.fillStyle = '#6b7280';
        ctx.font = 'italic 26px Georgia, serif';
        const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        ctx.fillText(`Awarded on ${date}`, 800, 965);

        // Conference signature with enhanced prominence
        ctx.fillStyle = '#1e40af';
        ctx.font = 'bold 30px Georgia, serif';
        ctx.fillText('JHC National Research Conference 2026', 800, 1010);

        ctx.fillStyle = '#9ca3af';
        ctx.font = 'italic 22px Georgia, serif';
        ctx.fillText('Jai Hind College, Mumbai', 800, 1040);

        // Seal with premium design at bottom left
        ctx.save();
        ctx.translate(240, 980);
        
        // Outer gold circle with glow
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.shadowBlur = 15;
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(0, 0, 75, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.shadowColor = 'transparent';

        // Middle decorative circle
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 63, 0, 2 * Math.PI);
        ctx.stroke();

        // Inner circle
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, 52, 0, 2 * Math.PI);
        ctx.stroke();

        // Seal text with gradient
        const sealGradient = ctx.createLinearGradient(0, -30, 0, 30);
        sealGradient.addColorStop(0, '#1e40af');
        sealGradient.addColorStop(1, '#3b82f6');
        ctx.fillStyle = sealGradient;
        ctx.font = 'bold 26px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('JHC', 0, -8);
        ctx.font = 'bold 20px Arial';
        ctx.fillText('2026', 0, 14);
        ctx.font = '14px Arial';
        ctx.fillStyle = '#d4af37';
        ctx.fillText('EXCELLENCE', 0, 34);

        ctx.restore();

        // Right side decorative ribbon at bottom right
        ctx.save();
        ctx.translate(1360, 980);
        
        // Ribbon body with premium gradient
        const ribbonGradient = ctx.createLinearGradient(-50, -60, 50, 60);
        ribbonGradient.addColorStop(0, '#1e40af');
        ribbonGradient.addColorStop(0.5, '#3b82f6');
        ribbonGradient.addColorStop(1, '#1e3a8a');
        ctx.fillStyle = ribbonGradient;
        
        ctx.beginPath();
        ctx.moveTo(-35, -50);
        ctx.lineTo(35, -50);
        ctx.lineTo(35, 50);
        ctx.lineTo(0, 30);
        ctx.lineTo(-35, 50);
        ctx.closePath();
        ctx.fill();
        
        // Ribbon border with shadow
        ctx.shadowColor = 'rgba(30, 58, 138, 0.3)';
        ctx.shadowBlur = 8;
        ctx.strokeStyle = '#1e3a8a';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.shadowColor = 'transparent';
        
        // Ribbon fold detail
        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-25, -45);
        ctx.lineTo(-25, 45);
        ctx.moveTo(25, -45);
        ctx.lineTo(25, 45);
        ctx.stroke();

        ctx.restore();
      };
    }
  }, [showBadge, userName, lastUserName]);

  const downloadBadge = () => {
    if (!badgeCanvasRef.current) return;
    const canvas = badgeCanvasRef.current;
    const link = document.createElement('a');
    const name = userName || lastUserName;
    link.download = `JHC-Research-Quiz-Certificate-${name.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const viewCertificate = () => {
    if (lastScore >= 8 && lastUserName) {
      setUserName(lastUserName);
      setScore(lastScore);
      setQuizComplete(true);
      setShowBadge(true);
    }
  };

  const currentQ = questions[currentQuestion];
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/ai-games')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
            {hasAttempted && !quizComplete && (
              <div className="flex items-center gap-3">
                <div className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                  Already attempted
                </div>
                {lastScore >= 8 && lastUserName ? (
                  <Button
                    onClick={viewCertificate}
                    className="bg-accent hover:bg-accent/90 text-black"
                    size="sm"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setScore(10);
                      setQuizComplete(true);
                    }}
                    className="bg-accent hover:bg-accent/90 text-black"
                    size="sm"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Get Certificate
                  </Button>
                )}
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Retake Quiz
                </Button>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Research Paper Quiz
              </h1>
              <p className="text-muted-foreground text-lg">
                Test your knowledge about writing and publishing research papers
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!quizComplete ? (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="mb-6">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-medium text-muted-foreground">
                          Question {currentQuestion + 1} of {questions.length}
                        </span>
                        <span className="text-sm font-medium text-primary">
                          Score: {score}/{questions.length}
                        </span>
                      </div>

                      <div className="w-full bg-muted rounded-full h-2 mb-6">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        />
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold mb-6">
                        {currentQ.question}
                      </h2>

                      <div className="space-y-3 mb-6">
                        {currentQ.options.map((option, index) => {
                          const isSelected = selectedAnswer === index || userAnswers[currentQuestion] === index;
                          const isCorrect = index === currentQ.correctAnswer;
                          const showResult = showExplanation;
                          const isLocked = answeredQuestions[currentQuestion];

                          return (
                            <motion.button
                              key={index}
                              onClick={() => handleAnswerSelect(index)}
                              disabled={showExplanation || isLocked}
                              className={`w-full p-4 rounded-lg text-left transition-all duration-200 border-2 ${
                                showResult && isCorrect
                                  ? 'border-green-500 bg-green-500/10'
                                  : showResult && isSelected && !isCorrect
                                  ? 'border-red-500 bg-red-500/10'
                                  : isSelected
                                  ? 'border-primary bg-primary/10'
                                  : isLocked
                                  ? 'border-border bg-muted/30 opacity-60 cursor-not-allowed'
                                  : 'border-border hover:border-primary/50 hover:bg-muted/50'
                              }`}
                              whileHover={!showExplanation && !isLocked ? { scale: 1.02 } : {}}
                              whileTap={!showExplanation && !isLocked ? { scale: 0.98 } : {}}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{option}</span>
                                {showResult && isCorrect && (
                                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                                )}
                                {showResult && isSelected && !isCorrect && (
                                  <XCircle className="w-5 h-5 text-red-500" />
                                )}
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>

                      {showExplanation && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-muted/50 border border-border rounded-lg p-4 mb-6"
                        >
                          <h3 className="font-semibold mb-2 text-primary">Explanation:</h3>
                          <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
                        </motion.div>
                      )}

                      <div className="flex justify-end">
                        {!showExplanation ? (
                          <Button
                            onClick={handleSubmitAnswer}
                            disabled={selectedAnswer === null}
                            className="px-8"
                          >
                            Submit Answer
                          </Button>
                        ) : (
                          <Button onClick={handleNextQuestion} className="px-8">
                            {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Card>
                    <CardContent className="p-8 md:p-12 text-center">
                      <Trophy className="w-20 h-20 mx-auto mb-6 text-accent" />
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Quiz Complete!</h2>
                      <p className="text-xl text-muted-foreground mb-6">
                        Your Score: <span className="text-primary font-bold">{score}</span> out of {questions.length}
                      </p>
                      
                      <div className="w-full max-w-xs mx-auto bg-muted rounded-full h-4 mb-6">
                        <div
                          className={`h-4 rounded-full transition-all duration-500 ${
                            percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-accent' : 'bg-orange-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <p className="text-lg mb-8">
                        {percentage >= 80 && "Outstanding! You have excellent knowledge of research paper writing! 🎉"}
                        {percentage >= 60 && percentage < 80 && "Great job! You have a solid understanding of research fundamentals. 👍"}
                        {percentage < 60 && "Good effort! Review the concepts and try again to improve your score. 📚"}
                      </p>

                      {score >= 8 && (
                        <div className="mb-8 p-6 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-xl">
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <Award className="w-6 h-6 text-accent" />
                            <h3 className="text-xl font-bold">Congratulations! You've earned a digital badge! 🎉</h3>
                          </div>
                          
                          {!showBadge ? (
                            <div className="space-y-4">
                              <p className="text-center text-muted-foreground">Enter your name to generate your certificate:</p>
                              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <Input
                                  type="text"
                                  placeholder="Enter your name"
                                  value={userName}
                                  onChange={(e) => setUserName(e.target.value)}
                                  className="flex-1"
                                  onKeyPress={(e) => e.key === 'Enter' && generateBadge()}
                                />
                                <Button onClick={generateBadge} className="bg-accent hover:bg-accent/90 text-black">
                                  Generate Badge
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 shadow-xl">
                                <canvas
                                  ref={badgeCanvasRef}
                                  className="w-full h-auto rounded"
                                  style={{ maxWidth: '100%', height: 'auto' }}
                                />
                              </div>
                              <Button onClick={downloadBadge} className="w-full bg-accent hover:bg-accent/90 text-black">
                                <Download className="w-4 h-4 mr-2" />
                                Download Certificate
                              </Button>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={handleRestart} variant="outline" className="px-8">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Retry Quiz
                        </Button>
                        <Button onClick={() => navigate('/ai-games')} className="px-8">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back to Games
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPaperQuizPage;
