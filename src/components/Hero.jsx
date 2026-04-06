import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
const createParticles = (num) => {
  const particles = [];
  for (let i = 0; i < num; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.3,
    });
  }
  return particles;
};

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState(createParticles(80));

  const handleMouseMove = (e) => {
    const x = (e.clientY / window.innerHeight - 0.5) * 15;
    const y = (e.clientX / window.innerWidth - 0.5) * -15;
    setRotate({ x, y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: (p.y + p.speed) % 100,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden "
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              background: "radial-gradient(circle, #3b82f6, transparent)",
            }}
            className="absolute rounded-full blur-sm"
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          perspective: 1200,
        }}
        transition={{ type: "spring", stiffness: 60 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center z-20"
      >
        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left relative z-30">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl"
          >
            Li Yanmei
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-4 text-3xl md:text-4xl font-semibold text-blue-400 drop-shadow-lg"
          >
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "React / FastAPI Engineer",
                2000,
                "Backend API Architect",
                2000,
              ]}
              repeat={Infinity}
              speed={50}
            />
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-6 text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Full-Stack разработчик с более чем 5 лет опыта в создании масштабируемых и высокопроизводительных веб-приложений.
            Специализируюсь на <strong>React</strong>, <strong>FastAPI</strong>, <strong>Node.js</strong> и <strong>Docker</strong>.
            Мой опыт включает создание адаптивных интерфейсов, разработку backend API и оптимизацию производительности.
          </motion.p>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-4 text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Работала с <strong>WordPress</strong>, <strong>1C-Bitrix</strong>, а также использовала нейросети как <strong>ChatGPT</strong> и <strong>GitHub Copilot</strong> для ускорения разработки.
          </motion.p>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-10 flex justify-center md:justify-start gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(59,130,246,0.8)" }}
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-black rounded-md shadow-lg transition duration-300"
            >
              Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(99,102,241,0.8)" }}
              href="#contact"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-md shadow-md hover:border-blue-400 hover:text-blue-400 transition duration-300"
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center items-center perspective-1200 relative z-30">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              rotateX: 3,
              boxShadow: "0 0 35px rgba(59,130,246,0.8)",
            }}
            src="/profile.jpg"
            alt="Ellen"
            className="w-[360px] h-[440px] object-cover border-4 border-gray-800 rounded-xl shadow-2xl transition-transform duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}