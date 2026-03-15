import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, and API integration using React, FastAPI, PostgreSQL, and Docker.",
    tech: ["React", "Node.js", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/ellen0825/e-commerce",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c"
  },
  {
    title: "Corporate Portal (WordPress & PHP)",
    description:
      "Developed a corporate portal with a custom theme, plugin integration, and contact forms using WordPress and PHP.",
    tech: ["PHP", "WordPress", "MySQL", "JavaScript"],
    github:
      "https://github.com/ellen0825/jongrover-building-a-wordpress-theme-from-scratch",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "API Platform for Data Handling and Processing",
    description:
      "A platform for managing data with FastAPI, PostgreSQL, and SQLAlchemy, providing full-stack CRUD functionality and API integration.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Python"],
    github: "https://github.com/ellen0825/fastapi-crud",
    image:
      "https://images.unsplash.com/photo-1517249137-4b75690b5f2f"
  },
  {
    title: "Real-Time Chat Application with React & FastAPI",
    description:
      "A real-time chat application built with React for the frontend, FastAPI for the backend, and WebSockets for communication.",
    tech: ["React", "FastAPI", "WebSockets", "PostgreSQL"],
    github: "https://github.com/ellen0825/fastapi-react-chat",
    image:
      "https://images.unsplash.com/photo-1604014231537-726d42c587d6"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-40 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 tracking-tight">
            Мои проекты
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
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 relative">
                <h3 className="text-xl text-blue-400 font-medium">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

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

                {/* BUTTON */}
                <div className="mt-6">
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-blue-500 text-black rounded-md font-medium hover:bg-blue-400 transition"
                  >
                    GitHub
                  </motion.a>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}