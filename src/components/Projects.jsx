import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-40 relative"
    >
      <div className="w-full">
         <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-light tracking-tight mb-16 text-left max-w-6xl mx-auto"
        >
          Мои проекты
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* PROJECT CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-4 rounded-xl shadow-lg w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl text-blue-400 font-medium">
              Портал для WordPress & PHP
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              Разработка и доработка корпоративного портала на <strong>WordPress</strong> с интеграцией плагинов, форм обратной связи и пользовательских модулей.
            </p>

            <div className="mt-4 text-sm text-gray-400">
              <p><span className="text-white">Технологии:</span> PHP, WordPress, MySQL, HTML, CSS, JS</p>
              <p><span className="text-white">Фокус:</span> Backend & Frontend интеграция, адаптивная верстка</p>
              <p><span className="text-white">Ответственность:</span> Полная разработка и оптимизация интерфейсов</p>
            </div>

            <div className="mt-6 flex justify-between gap-4">
              <a
                href="https://github.com/ellen0825/jongrover-building-a-wordpress-theme-from-scratch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500 text-black rounded-md font-medium hover:bg-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://ellen0825.github.io/jongrover-building-a-wordpress-theme-from-scratch/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-gray-700 text-gray-300 rounded-md hover:border-blue-400 hover:text-blue-400 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>

          {/* PROJECT CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-4 rounded-xl shadow-lg w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl text-blue-400 font-medium">
              Full-Stack веб-приложение (E-Commerce)
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              Разработка интернет-магазина с авторизацией пользователей, управлением продуктами и заказами, интеграцией с backend API на <strong>Node.js</strong> и <strong>FastAPI</strong>.
            </p>

            <div className="mt-4 text-sm text-gray-400">
              <p><span className="text-white">Технологии:</span> React, Node.js, FastAPI, PostgreSQL, MySQL</p>
              <p><span className="text-white">Фокус:</span> Full-Stack разработка, UI/UX, безопасность и производительность</p>
              <p><span className="text-white">Ответственность:</span> Полная разработка, интеграция frontend с backend и базами данных</p>
            </div>

            <div className="mt-6 flex justify-between gap-4">
              <a
                href="https://github.com/ellen0825/e-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500 text-black rounded-md font-medium hover:bg-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://ellen0825.github.io/e-commerce/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-gray-700 text-gray-300 rounded-md hover:border-blue-400 hover:text-blue-400 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}