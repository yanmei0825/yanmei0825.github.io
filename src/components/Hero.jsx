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
      className=" min-h-screen bg-black flex items-center justify-center px-6"
    >
  

      {/* HERO CONTENT */}
      <motion.div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
        transition={{ type: "spring", stiffness: 50 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center z-20"
      >

        {/* TEXT */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl text-white font-light"
          >
            Эллен Мартинелли
          </motion.h1>

          <div className="mt-4 text-3xl text-blue-400">
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
              speed={40}
            />
          </div>

          <p className="mt-8 text-gray-400 max-w-xl leading-relaxed">
            Full-Stack разработчик создающий современные web-приложения
            используя React, FastAPI, Node.js и Docker.
          </p>

          <div className="mt-10 flex gap-6">

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#projects"
              className="px-8 py-3 bg-blue-500 text-black rounded-md"
            >
              Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#contact"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-md"
            >
              Contact
            </motion.a>

          </div>

        </div>

        {/* IMAGE */}
        <div className="flex justify-center">

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            src="/profile.jpg"
            alt="Ellen"
            className="w-[340px] h-[340px] object-cover rounded-xl border border-gray-800 shadow-2xl"
          />

        </div>

      </motion.div>

    </section>
  );
}