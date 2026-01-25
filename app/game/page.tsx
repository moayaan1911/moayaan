"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaEthereum,
  FaPlay,
  FaRedo,
  FaTrophy,
  FaStar,
  FaSkull,
} from "react-icons/fa";
import { GiMineExplosion } from "react-icons/gi";
import { useEffect, useRef, useState, useCallback } from "react";

interface Obstacle {
  id: number;
  x: number;
  passed: boolean;
}

export default function GamePage() {
  const router = useRouter();
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [ethY, setEthY] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  const velocityRef = useRef(0);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const obstacleLoopRef = useRef<NodeJS.Timeout | null>(null);
  const gameRunningRef = useRef(false);
  const ethYRef = useRef(0);
  const obstacleIdRef = useRef(0);
  const scoreRef = useRef(0);

  const GRAVITY = -0.8;
  const JUMP_STRENGTH = 18;
  const GROUND_LEVEL = 0;
  const OBSTACLE_SPEED = 8;
  const INITIAL_SPAWN_INTERVAL = 2000;
  const MIN_SPAWN_INTERVAL = 700;
  const DIFFICULTY_INCREASE_RATE = 50; // decrease interval by this much per point
  const ETH_LEFT = 50; // percentage from left
  const ETH_WIDTH = 80; // approx width of eth icon
  const ETH_HEIGHT = 120; // approx height of eth icon
  const OBSTACLE_WIDTH = 60;
  const OBSTACLE_HEIGHT = 80;

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem("ethRunnerHighScore");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  const resetGame = useCallback(() => {
    setEthY(0);
    ethYRef.current = 0;
    velocityRef.current = 0;
    setScore(0);
    scoreRef.current = 0;
    setObstacles([]);
    obstacleIdRef.current = 0;
    setGameOver(false);
  }, []);

  const handlePlayClick = () => {
    resetGame();
    setGameStarted(true);
    gameRunningRef.current = true;
  };

  const handlePlayAgain = () => {
    resetGame();
    gameRunningRef.current = true;
  };

  const endGame = useCallback(() => {
    gameRunningRef.current = false;
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    if (obstacleLoopRef.current) clearInterval(obstacleLoopRef.current);

    // Update high score
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("ethRunnerHighScore", score.toString());
    }

    setGameOver(true);
  }, [score, highScore]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (!gameRunningRef.current && gameStarted && !gameOver) {
          return;
        }
        if (gameOver) return;
        if (ethYRef.current <= 5) {
          velocityRef.current = JUMP_STRENGTH;
        }
      }

      if (e.code === "Escape") {
        if (gameRunningRef.current) {
          endGame();
        }
      }
    },
    [gameStarted, gameOver, endGame]
  );

  // Collision detection
  const checkCollision = useCallback(
    (obstacleX: number, playerY: number): boolean => {
      const playerLeft = (window.innerWidth * ETH_LEFT) / 100 - ETH_WIDTH / 2;
      const playerRight = playerLeft + ETH_WIDTH;
      const playerBottom = 128 + playerY; // actual bottom of player (accounts for jump)
      const playerTop = playerBottom + ETH_HEIGHT;

      const obsLeft = obstacleX;
      const obsRight = obstacleX + OBSTACLE_WIDTH;
      const obsBottom = 128;
      const obsTop = obsBottom + OBSTACLE_HEIGHT;

      const horizontalOverlap = playerRight > obsLeft && playerLeft < obsRight;
      const verticalOverlap = playerBottom < obsTop && playerTop > obsBottom;

      return horizontalOverlap && verticalOverlap;
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    if (!gameRunningRef.current) return;

    // Main game loop
    gameLoopRef.current = setInterval(() => {
      if (!gameRunningRef.current) return;

      // Update player position
      setEthY((prevY) => {
        let newY = prevY + velocityRef.current;
        velocityRef.current += GRAVITY;

        if (newY <= GROUND_LEVEL) {
          newY = GROUND_LEVEL;
          velocityRef.current = 0;
        }

        ethYRef.current = newY;
        return newY;
      });

      // Update obstacles
      setObstacles((prevObstacles) => {
        const updatedObstacles = prevObstacles
          .map((obs) => {
            const newX = obs.x - OBSTACLE_SPEED;

            // Check collision
            if (checkCollision(newX, ethYRef.current)) {
              setTimeout(() => endGame(), 0);
            }

            // Check if passed
            if (
              !obs.passed &&
              newX < (window.innerWidth * ETH_LEFT) / 100 - OBSTACLE_WIDTH
            ) {
              setScore((prev) => {
                scoreRef.current = prev + 1;
                return prev + 1;
              });
              return { ...obs, x: newX, passed: true };
            }

            return { ...obs, x: newX };
          })
          .filter((obs) => obs.x > -OBSTACLE_WIDTH);

        return updatedObstacles;
      });
    }, 1000 / 60);

    // Obstacle spawner with dynamic difficulty
    const spawnObstacle = () => {
      if (!gameRunningRef.current) return;

      setObstacles((prev) => [
        ...prev,
        {
          id: obstacleIdRef.current++,
          x: window.innerWidth + 50,
          passed: false,
        },
      ]);

      // Calculate next spawn interval based on score (gets harder over time)
      const currentInterval = Math.max(
        MIN_SPAWN_INTERVAL,
        INITIAL_SPAWN_INTERVAL - scoreRef.current * DIFFICULTY_INCREASE_RATE
      );

      obstacleLoopRef.current = setTimeout(spawnObstacle, currentInterval);
    };

    // Start spawning after initial delay
    obstacleLoopRef.current = setTimeout(spawnObstacle, INITIAL_SPAWN_INTERVAL);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      if (obstacleLoopRef.current) clearTimeout(obstacleLoopRef.current);
    };
  }, [gameStarted, gameOver, checkCollision, endGame]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 60 + "%",
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Moving Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute text-white/20 text-9xl font-bold"
            style={{
              top: 50 + i * 100 + "px",
              animation: `moveCloud ${15 + i * 3}s linear infinite`,
              left: i * 30 + "%",
            }}>
            ☁️
          </div>
        ))}
      </div>

      <style>{`
        @keyframes moveCloud {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw); }
        }
      `}</style>

      {/* Home Button - Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={() => router.push("/")}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center gap-2 rounded-lg">
          <FaHome className="text-lg" />
          Home
        </Button>
      </div>

      {/* Score Display */}
      {gameStarted && !gameOver && (
        <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
          <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-xl flex items-center gap-3">
            <FaStar className="text-amber-400 text-xl" />
            <span className="text-white text-2xl font-bold">{score}</span>
          </div>
          <div className="bg-black/50 backdrop-blur-md px-4 py-3 rounded-xl flex items-center gap-2">
            <FaTrophy className="text-amber-500 text-lg" />
            <span className="text-amber-300 text-lg">{highScore}</span>
          </div>
        </div>
      )}

      {/* Start Screen */}
      {!gameStarted && (
        <div className="w-full h-screen flex items-center justify-center relative z-20">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ethereum Runner
            </h1>
            <p className="text-xl text-purple-200">
              Space to Jump | Escape to Stop
            </p>
            <Button
              onClick={handlePlayClick}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50 rounded-xl flex items-center gap-3 mx-auto">
              <FaPlay className="text-2xl" />
              PLAY
            </Button>
          </div>
        </div>
      )}

      {/* Game Screen */}
      {gameStarted && !gameOver && (
        <div className="w-full h-screen flex flex-col items-center justify-end relative z-20">
          {/* Ground Line */}
          <div className="absolute bottom-32 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

          {/* Ethereum Icon (Player) */}
          <div
            className="absolute transition-none"
            style={{
              bottom: `calc(128px + ${ethY}px)`,
              left: `${ETH_LEFT}%`,
              transform: "translateX(-50%)",
            }}>
            <FaEthereum className="text-9xl text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,1)]" />
          </div>

          {/* Obstacles */}
          {obstacles.map((obstacle) => (
            <div
              key={obstacle.id}
              className="absolute transition-none"
              style={{
                bottom: "128px",
                left: `${obstacle.x}px`,
              }}>
              <GiMineExplosion className="text-7xl text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
            </div>
          ))}

          {/* Instructions */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center text-purple-200">
            <p className="text-lg">Press SPACE to jump over obstacles!</p>
          </div>
        </div>
      )}

      {/* Game Over Modal */}
      {gameOver && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 rounded-2xl border border-purple-500/50 shadow-2xl shadow-purple-500/20 max-w-md w-full mx-4">
            <div className="text-center space-y-6">
              {/* Game Over Title */}
              <div className="flex items-center justify-center gap-3">
                <FaSkull className="text-4xl text-red-500 animate-pulse" />
                <h2 className="text-4xl font-bold text-red-400">Game Over!</h2>
                <FaSkull className="text-4xl text-red-500 animate-pulse" />
              </div>

              {/* Scores */}
              <div className="space-y-4 py-4">
                <div className="bg-black/40 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaStar className="text-3xl text-amber-400" />
                    <span className="text-xl text-white">Your Score</span>
                  </div>
                  <span className="text-3xl font-bold text-amber-300">
                    {score}
                  </span>
                </div>

                <div className="bg-black/40 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaTrophy className="text-3xl text-amber-500" />
                    <span className="text-xl text-white">High Score</span>
                  </div>
                  <span className="text-3xl font-bold text-amber-500">
                    {score > highScore ? score : highScore}
                  </span>
                </div>

                {score > highScore && (
                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-3 border border-amber-500/50">
                    <p className="text-amber-300 font-bold flex items-center justify-center gap-2">
                      <FaTrophy className="text-amber-400" />
                      New High Score!
                      <FaTrophy className="text-amber-400" />
                    </p>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  onClick={handlePlayAgain}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 rounded-xl flex items-center justify-center gap-3 w-full">
                  <FaRedo className="text-xl" />
                  Play Again
                </Button>

                <Button
                  onClick={() => router.push("/")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 rounded-xl flex items-center justify-center gap-3 w-full">
                  <FaHome className="text-xl" />
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
