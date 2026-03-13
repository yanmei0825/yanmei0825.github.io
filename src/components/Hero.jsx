import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6 pt-32">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
            Эллен Мартинелли
          </h1>

          <h2 className="mt-3 text-2xl text-blue-400 font-medium tracking-wide">
            Full-Stack веб-разработчик
          </h2>

          <p className="mt-8 text-gray-400 leading-relaxed max-w-xl">
            Full-Stack веб-разработчик с 3+ годами опыта, специализируюсь на создании адаптивных интерфейсов и разработке backend API. Работаю с <strong>React</strong>, <strong>Vue</strong>, <strong>Node.js</strong> и <strong>FastAPI</strong>, а также с <strong>PHP</strong> и <strong>MySQL</strong>.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            Знакома с <strong>WordPress</strong> и <strong>1C-Bitrix</strong> на уровне создания и доработки сайтов, интеграции плагинов и форм. Активно использую нейросети (<strong>ChatGPT</strong>, <strong>GitHub Copilot</strong>) для ускорения рутинных задач и генерации кода, контента и дизайна.
          </p>

          <p className="mt-4 text-gray-500 text-sm tracking-wide">
            📍 Санкт-Петербург, Россия
          </p>

          <p className="mt-1 text-gray-500 text-sm tracking-wide">
            Открыта для удалённых
          </p>

          <div className="mt-12 flex gap-6">
            <a
              href="#projects"
              className="px-7 py-3 bg-blue-500 text-black rounded-md font-medium hover:bg-blue-400 transition duration-300"
            >
              Мои проекты
            </a>

            <a
              href="#contact"
              className="px-7 py-3 border border-gray-700 text-gray-300 rounded-md hover:border-blue-400 hover:text-blue-400 transition duration-300"
            >
              Связаться
            </a>
          </div>
        </motion.div>

        {/* RIGHT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/20 to-transparent blur-2xl" />
            <img
              src="/profile.jpg"
              alt="Арина Мартинелли"
              className="relative w-[340px] h-[340px] object-cover rounded-xl border border-gray-800 shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}