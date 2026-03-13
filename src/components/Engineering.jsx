import { motion } from "framer-motion";

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="min-h-screen bg-black px-6 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Engineering Approach
          </h2>

          <div className="mt-6 h-[1px] w-28 bg-blue-500" />

          <p className="mt-8 text-gray-400 max-w-2xl leading-relaxed">
            Я Full-Stack веб-разработчик с опытом работы более 3 лет. Мой подход заключается в создании надежных, адаптивных и удобных систем. Я сосредоточена на оптимизации производительности сайтов, чистом коде и эффективной интеграции frontend и backend решений, используя как современные фреймворки, так и CMS платформы.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-white text-xl mb-4">Frontend & UI</h3>
              <p className="text-gray-400 leading-relaxed">
                Разработка адаптивных интерфейсов с использованием <strong>React</strong>, <strong>Vue.js</strong>, <strong>JavaScript (ES6+)</strong>, HTML5 и CSS3 (SASS, Tailwind). Работа по макетам из <strong>Figma</strong>, оптимизация пользовательского опыта и производительности страниц.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-4">Backend & Databases</h3>
              <p className="text-gray-400 leading-relaxed">
                Разработка <strong>REST API</strong> с использованием <strong>FastAPI</strong>, <strong>Node.js</strong> и <strong>PHP</strong>. Опыт работы с базами данных <strong>MySQL</strong> и <strong>PostgreSQL</strong>, настройка и оптимизация запросов, интеграция с frontend.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-white text-xl mb-4">CMS & Tools</h3>
              <p className="text-gray-400 leading-relaxed">
                Опыт работы с <strong>WordPress</strong> и <strong>1C-Bitrix</strong> (создание и доработка сайтов, интеграция форм и плагинов). Работа с <strong>Git</strong>/<strong>GitLab</strong>, базовое использование <strong>Docker</strong> и CI/CD для тестирования и деплоя проектов.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-4">AI & Optimization</h3>
              <p className="text-gray-400 leading-relaxed">
                Активное использование нейросетей (<strong>ChatGPT</strong>, <strong>GitHub Copilot</strong>, <strong>MidJourney</strong>) для ускорения разработки кода, генерации контента и макетов. Оптимизация загрузки страниц и производительности сайтов, улучшение интерфейсов для разных устройств.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}