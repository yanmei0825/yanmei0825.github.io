import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.length < 2) return setStatus("Имя должно быть минимум 2 символа");
    if (!validateEmail(formData.email)) return setStatus("Некорректный Email");
    
    setStatus("Отправка...");

    try {
      const response = await fetch("https://formspree.io/f/mqegwvzz", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Сообщение отправлено!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Ошибка. Попробуйте позже.");
      }
    } catch (err) {
      setStatus("Ошибка. Попробуйте позже.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black flex flex-col items-center px-6 py-32">
      <div className="max-w-7xl w-full">

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

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-10 rounded-xl shadow-xl"
          >
            <h3 className="text-4xl font-bold text-white mb-8">Напишите мне</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Ваш Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
              />
              <textarea
                name="message"
                placeholder="Сообщение"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-md transition"
              >
                Отправить
              </button>
              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-2 text-sm ${status.includes("Ошибка") ? "text-red-500" : "text-green-400"}`}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* RIGHT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-semibold mb-6">Прямой контакт</h3>
            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:ellenmartinelli0825@gmail.com" className="text-blue-400 hover:text-blue-300">
                ellenmartinelli0825@gmail.com
              </a>
            </p>
            <p className="mb-4">
              <strong>Локация:</strong> Санкт-Петербург, Россия
            </p>
            <p className="mb-4">
              <strong>Формат работы:</strong> Удалённо
            </p>
            <p>
              Открыта к интересным проектам и новым вызовам! 🚀
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}