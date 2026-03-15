import { motion, useScroll, useTransform } from "framer-motion";

const stars = Array.from({ length: 140 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 5 + 4
}));

export default function GalaxyBackground() {

  const { scrollY } = useScroll();

  const parallax1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const parallax2 = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />

            <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* FAR STARS */}
      <motion.div style={{ y: parallax1 }}>

        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity
            }}
          />
        ))}

      </motion.div>

      {/* NEAR STARS */}
      <motion.div
        style={{ y: parallax2 }}
        className="absolute inset-0"
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 2,
              height: 2
            }}
          />
        ))}
      </motion.div>

    </div>
  );
}