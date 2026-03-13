import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-40 relative"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">

        {/* LEFT — PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-tight mb-10">
            О себе
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Full-Stack веб-разработчик с 3+ годами опыта, специализируюсь на создании адаптивных интерфейсов и разработке backend API. Имею опыт работы с <strong>React</strong>, <strong>Vue</strong>, <strong>Node.js</strong> и <strong>FastAPI</strong>, а также с <strong>PHP</strong> и <strong>MySQL</strong>.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Знакома с <strong>WordPress</strong> и <strong>1C-Bitrix</strong> на уровне создания и доработки сайтов, интеграции плагинов и форм. Активно использую нейросети (<strong>ChatGPT</strong>, <strong>GitHub Copilot</strong>) для ускорения рутинных задач и генерации кода, контента и дизайна.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Люблю оптимизировать производительность сайтов и создавать удобные интерфейсы, которые корректно работают на всех устройствах.
          </p>
        </motion.div>

        {/* RIGHT — STRUCTURED EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Frontend & UI
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Создание адаптивных интерфейсов, оптимизация UX/UI и поддержка корректной работы на всех устройствах. Работа с <strong>React</strong> и <strong>Vue</strong>.
            </p>
          </div>

          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Backend & API
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Разработка backend API с использованием <strong>Node.js</strong> и <strong>FastAPI</strong>. Оптимизация производительности, работа с <strong>MySQL</strong> и интеграция с внешними сервисами.
            </p>
          </div>

          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              CMS & Tools
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Опыт работы с <strong>WordPress</strong> и <strong>1C-Bitrix</strong>, настройка и доработка сайтов, интеграция плагинов и форм. Использование нейросетей для генерации кода, контента и дизайна.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}