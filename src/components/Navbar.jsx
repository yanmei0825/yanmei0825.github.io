import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-white text-lg font-light tracking-wider">
          Эллен <span className="text-blue-400">М.</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide">
          <a
            href="#about"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            О себе
          </a>

          <a
            href="#projects"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            Проекты
          </a>

          <a
            href="#contact"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            Контакты
          </a>

          {/* SHORT PHRASE BELOW PROJECTS */}
          <a
            href="#engineering"
            className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm italic"
          >
            Надёжная разработка
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4 text-gray-400">
          <a href="#about" className="block hover:text-blue-400 transition">
            О себе
          </a>
          <a href="#projects" className="block hover:text-blue-400 transition">
            Проекты
          </a>
          <a href="#contact" className="block hover:text-blue-400 transition">
            Контакты
          </a>
          <a href="#engineering" className="block hover:text-blue-400 transition mt-4">
            Надёжная разработка
          </a>
        </div>
      )}
    </nav>
  );
}