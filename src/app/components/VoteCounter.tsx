import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function VoteCounter() {
  const [count, setCount] = useState(0);
  const targetCount = 247; // Número simulado de votos

  useEffect(() => {
    let current = 0;
    const increment = targetCount / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      viewport={{ once: true }}
      className="inline-flex flex-col items-center"
    >
      <motion.div
        className="text-6xl font-bold text-blue-600 dark:text-blue-400"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {count}+
      </motion.div>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Estudiantes me apoyan</p>
    </motion.div>
  );
}
