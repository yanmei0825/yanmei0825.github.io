import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform - Design Prototype",
    role: "Full-Stack Developer",
    impact: "Improved product loading speed by 40% and built scalable API system",
    description:
      "A full-featured e-commerce platform with authentication, product management, and payment-ready architecture. " +
      "This project also includes a detailed Figma design prototype to visualize the UI/UX flow for the platform.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker", "Figma"],
    github: "",
    demo: "https://www.figma.com/design/ibtakfVVZDqIl9Zhx8f4ZF/Persona-team-library?node-id=0-1&p=f&t=l6c4WBTAI5tOuuPA-0",
    image: "/projects/design1.png",
  },
  {
    title: "Balltime Volleyball AI Platform",
    role: "Frontend Developer",
    impact:
      "Built responsive interfaces for a cutting‑edge AI video analytics platform used by thousands of volleyball players and teams worldwide",
    description:
      "Balltime is an AI‑powered video analysis and highlight creation platform tailored to volleyball. " +
      "The platform uses machine learning to automatically break down game footage, generate statistics, " +
      "and create highlights, making performance tracking and recruiting easier for players, coaches, and families.",
    tech: ["React", "AI Integration", "Video Analytics", "Responsive UI"],
    github: "", 
    demo: "https://auth.balltime.com/",
    image: "/projects/volleyball.png",
  },
  {
  title: "Youdao AI Learning Platform",
  role: "Frontend / Full-Stack Developer",
  impact: "Improved responsive UI performance and enhanced stability of live learning features under high load",
  description:
    "Worked on an AI-driven education platform focusing on responsive UI optimization, live-stream class integration, and interactive learning dashboards. Improved performance across mobile and desktop devices and contributed to system stability during peak traffic.",
  tech: ["React", "UI Optimization", "REST API", "Performance Tuning", "Responsive Design"],
  github: "",
  demo: "https://www.youdao.com/",
  image: "/projects/youdao.png"
},
  {
  title: "Bilibili-style Video Platform Backend (Case Study)",
  role: "Backend Developer (PHP / Laravel)",
  impact: "Improved backend stability and reduced recurring data-processing errors under high load",
  description:
    "Participated in backend development and maintenance of a high-load video platform inspired by Bilibili. Worked on REST API integration, business logic debugging, SQL optimization, and production incident resolution.",
  tech: ["PHP", "Laravel", "MySQL", "REST API", "System Debugging"],
  github: "",
  demo: "https://www.bilibili.com/",
  image: "/projects/bilibili.png",
}
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (image) => {
    setActiveImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveImage("");
    setModalOpen(false);
  };

  return (
    <section id="projects" className="bg-black text-white px-6 py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-left"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
            My Projects
          </h2>
              <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-blue-400 to-pink-500" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -12 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/40 backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div
                className="w-full   h-52 overflow-hidden rounded-t-2xl cursor-pointer"
                onClick={() => openModal(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl text-blue-400 font-semibold">{project.title}</h3>
                <p className="text-xs text-pink-400 mt-1">{project.role}</p>
                <p className="text-xs text-green-400">{project.impact}</p>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">{project.description}</p>

                {/* TECH STACK */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* BUTTONS */}
              
                      <div className="mt-6 flex gap-3">
                          {
                             project.github!==""&&
                                <motion.a
                                  whileHover={{ scale: 1.08 }}
                                  whileTap={{ scale: 0.95 }}
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 bg-gray-800 rounded-md text-sm hover:bg-gray-700"
                                >
                                  GitHub
                                </motion.a>
                           }

                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 text-black rounded-md text-sm hover:bg-blue-400"
                        >
                          Live Demo
                        </motion.a>
                      </div>
                
              </div>

              {/* HOVER GLOW — Blue tint */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/20 to-blue-300/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
          >
            ×
          </button>
          <img src={activeImage} alt="Project Preview" className="max-h-[90%] max-w-[90%] rounded-lg" />
        </div>
      )}
    </section>
  );
}