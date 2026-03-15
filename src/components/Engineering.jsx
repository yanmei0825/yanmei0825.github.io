import { motion } from "framer-motion";

const items = [
  {
    title: "Frontend & UI",
    text: "Разработка интерфейсов с использованием React и Vue.js. Работа с макетами из Figma, создание удобных и эффективных пользовательских интерфейсов для e-commerce и корпоративных веб-приложений.",
    icon: "💻",
    image: "/frontend-icon.svg"
  },
  {
    title: "Backend & Databases",
    text: "Разработка REST API с использованием FastAPI и Java, интеграция с PHP-бэкендом (Bitrix, WordPress). Опыт работы с PostgreSQL и MySQL для обработки данных и оптимизации запросов.",
    icon: "🗄️",
    image: "/backend-icon.svg"
  },
  {
    title: "CMS & Tools",
    text: "Интеграция с WordPress и Bitrix для создания и доработки корпоративных сайтов. Использование Git и Docker для CI/CD процессов, автоматизация деплоя и улучшение рабочего процесса команд.",
    icon: "⚙️",
    image: "/cms-icon.svg"
  },
  {
    title: "AI & Optimization",
    text: "Использование нейросетей, таких как ChatGPT и GitHub Copilot, для повышения продуктивности и автоматизации задач. Оптимизация производительности веб-приложений и улучшение UX.",
    icon: "🤖",
    image: "/ai-icon.svg"
  }
];

export default function Engineering() {
  return (
    <section id="engineering" className="bg-black text-white px-6 py-40">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 tracking-tight">
              Engineering Approach
            </h2>
            <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-blue-400 to-pink-500" />
           
          <p className="mt-8 text-gray-400 max-w-2xl leading-relaxed">
            Я Full-Stack разработчик с более чем 5 лет опыта в создании масштабируемых и производительных веб-приложений. Мой подход фокусируется на создании чистой архитектуры и эффективной интеграции технологий для решения реальных задач.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gray-800 transform -translate-x-1/2" />
          <div className="space-y-24">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* CONTENT */}
                <div className={`${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <h3 className="text-xl text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.text}</p>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center items-center relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                    style={{ filter: "invert(1)" }} // 아이콘을 밝게 보이게 하는 필터
                  />
                </div>

                {/* TIMELINE NODE */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border border-blue-400 shadow-lg"
                  style={{ zIndex: 2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}