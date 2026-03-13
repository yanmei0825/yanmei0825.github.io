import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Top Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
        >
          {/* LEFT */}
          <div>
            <h3 className="text-white text-2xl font-light tracking-wide">
              Арина Мартинелли
            </h3>

            <p className="mt-3 text-gray-500 text-sm max-w-md leading-relaxed">
              Full-Stack веб-разработчик с опытом работы более 3 лет. Специализируюсь на адаптивных интерфейсах, backend API, оптимизации производительности и интеграции frontend и backend решений. Активно использую нейросети для ускорения разработки и генерации кода, макетов и контента.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-2 text-right">
            <p className="text-gray-500 text-sm">
              Санкт-Петербург, Россия
            </p>

            <a
              href="mailto:ellenmartinelli0825@outlook.com"
              className="text-blue-400 hover:text-blue-300 transition duration-300 text-sm"
            >
              ellenmartinelli0825@outlook.com
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-14 h-[1px] bg-gray-900" />

        {/* Bottom Line */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs tracking-wide">
          <p>
            © {new Date().getFullYear()} Арина Мартинелли. Все права защищены.
          </p>

          <p className="mt-3 md:mt-0">
            Создано с вниманием к деталям и оптимизировано для стабильной работы.
          </p>
        </div>

      </div>
    </footer>
  );
}