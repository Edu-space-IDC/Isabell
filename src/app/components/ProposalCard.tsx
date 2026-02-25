import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ProposalCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ProposalCard({ title, description, icon: Icon, index }: ProposalCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <motion.div
        className="relative h-80 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Icon size={48} />
            </div>
            <h3 className="text-xl font-bold text-center">{title}</h3>
            <p className="text-sm mt-2 text-center opacity-90">Haz clic para ver más</p>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col justify-center shadow-xl border-2 border-blue-500"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="text-blue-600 dark:text-blue-400 mb-3">
              <Icon size={32} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
