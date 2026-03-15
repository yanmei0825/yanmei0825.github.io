import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black px-6 py-32 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 tracking-tight">
            Контакты
          </h2>
          <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-blue-400 to-pink-500" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT — Availability */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-white font-semibold mb-6 tracking-wide">
              Доступность
            </h3>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Я Full-Stack разработчик с более чем 5 лет опыта в создании масштабируемых и производительных веб-приложений. Мой подход фокусируется на создании <strong>чистой архитектуры</strong> и эффективной интеграции технологий для решения реальных задач.
            </p>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              Открыта к проектам в качестве <strong>удалённого Full-Stack разработчика</strong>, с опытом работы с <strong>React, FastAPI, Node.js, PHP</strong>, а также работы с **WordPress** и **1C-Bitrix**.
            </p>
          </motion.div>

          {/* RIGHT — Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-white font-semibold mb-6 tracking-wide">
              Прямой контакт
            </h3>

            <div className="space-y-5 text-gray-400">

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <a
                  href="mailto:ellenmartinelli0825@outlook.com"
                  className="text-blue-400 hover:text-blue-300 transition duration-300 text-lg"
                >
                  ellenmartinelli0825@outlook.com
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Локация</p>
                <p className="text-lg">Санкт-Петербург, Россия</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Формат работы</p>
                <p className="text-lg">Удалённо</p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}