import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-8">
      <div className="max-w-6xl mx-auto text-center">

        {/* Contact Info */}
        <div className="space-y-2">
          <a
            href="mailto:ellenmartinelli0825@outlook.com"
            className="text-blue-400 hover:text-blue-300 transition duration-300 text-sm"
          >
            ellenmartinelli0825@outlook.com
          </a>
        </div>

        {/* Bottom Line */}
        <div className="mt-4 text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} Все права защищены.
          </p>
        </div>

      </div>
    </footer>
  );
}