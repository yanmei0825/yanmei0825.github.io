import { motion } from "framer-motion";
import { useMemo } from "react";

export default function StarsBackground() {

  const stars = useMemo(() =>
    Array.from({ length: 180 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 5
    })), []
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 6px 2px rgba(255,255,255,0.8)"
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.8, 1],
            y: [0, -10, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

    </div>
  );
}