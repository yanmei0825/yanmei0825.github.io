import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-6 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Контакты
          </h2>

          <div className="mt-6 h-[1px] w-24 bg-blue-500" />
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
            <h3 className="text-xl text-white font-medium mb-6 tracking-wide">
              Доступность
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              Я ищу возможности для работы в роли <strong>удалённого Full-Stack разработчика</strong>, где могу использовать свои навыки в создании <strong>адаптивных интерфейсов</strong>, <strong>backend API</strong>, оптимизации производительности сайтов и интеграции frontend с backend.
            </p>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              Готова работать над проектами с <strong>WordPress</strong>, <strong>1C-Bitrix</strong>, <strong>PHP/MySQL</strong>, а также использовать нейросети (<strong>ChatGPT</strong>, <strong>GitHub Copilot</strong>) для ускорения разработки и генерации кода, макетов и контента.
            </p>
          </motion.div>

          {/* RIGHT — Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-white font-medium mb-6 tracking-wide">
              Прямой контакт
            </h3>

            <div className="space-y-5 text-gray-400">

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <a
                  href="mailto:ellenmartinelli0825@outlook.com"
                  className="text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  ellenmartinelli0825@outlook.com
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Локация</p>
                <p>Санкт-Петербург, Россия</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Формат работы</p>
                <p>Удалённо / Гибридно</p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}