import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Hero() {

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientY / window.innerHeight - 0.5) * 10;
    const y = (e.clientX / window.innerWidth - 0.5) * -10;
    setRotate({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-black flex items-center justify-center px-6"
    >
      {/* HERO CONTENT */}
      <motion.div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
        transition={{ type: "spring", stiffness: 50 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center z-20"
      >

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold text-white"
          >
            Эллен Мартинелли
          </motion.h1>

          <div className="mt-4 text-4xl text-blue-400 font-medium">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "React / FastAPI Engineer",
                2000,
                "Backend API Architect",
                2000
              ]}
              repeat={Infinity}
              speed={50}
            />
          </div>

          <p className="mt-8 text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Full-Stack разработчик с более чем 5 лет опыта в создании масштабируемых и высокопроизводительных веб-приложений.
            Специализируюсь на <strong>React</strong>, <strong>FastAPI</strong>, <strong>Node.js</strong> и <strong>Docker</strong>.
            Мой опыт включает создание адаптивных интерфейсов, разработку backend API и оптимизацию производительности.
          </p>

          <p className="mt-4 text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Работала с <strong>WordPress</strong>, <strong>1C-Bitrix</strong>, а также использовала нейросети как <strong>ChatGPT</strong> и <strong>GitHub Copilot</strong> для ускорения разработки.
          </p>

          <div className="mt-10 flex justify-center md:justify-start gap-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#projects"
              className="px-8 py-3 bg-blue-500 text-black rounded-md shadow-md hover:bg-blue-400 transition duration-300"
            >
              Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#contact"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-md shadow-md hover:border-blue-400 hover:text-blue-400 transition duration-300"
            >
              Contact
            </motion.a>
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            src="/profile.jpg"  // 경로가 맞는 이미지로 변경
            alt="Ellen"
            className="w-[360px] h-[440px] object-cover  border-4 border-gray-800 shadow-2xl"
          />
        </div>

      </motion.div>

    </section>
  );
}