import { motion } from "motion/react";
import { Vote, Check } from "lucide-react";
import { useState } from "react";

export function ConfettiButton() {
  const [voted, setVoted] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleVote = () => {
    if (!voted) {
      setVoted(true);
      
      // Create confetti particles
      const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * -200 - 50,
      }));
      setConfetti(particles);

      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 2000);
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={handleVote}
        className={`px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 ${
          voted
            ? "bg-green-500 text-white"
            : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        }`}
        whileHover={{ scale: voted ? 1 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={voted}
      >
        {voted ? (
          <>
            <Check className="inline mr-2" size={24} />
            ¡Gracias! Te espero el <strong>5 DE MARZO</strong>
          </>
          
        ) : (
          <>
            <Vote className="inline mr-2" size={24} />
            ¡Vota por mí!
          </>
        )}
      </motion.button>

      {/* Confetti */}
      {confetti.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute top-0 left-1/2 w-3 h-3 rounded-full"
          style={{
            backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"][particle.id % 4],
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
