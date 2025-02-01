import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-purple-500/20"
          : ""
      }`}
    >
      <div className="container mx-auto sm:px-12 lg:px-24 px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Custom Logo */}
            <img
              src="./src/images/hbllogo.png" // Make sure this path is correct
              alt="HBL logo"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <span
              className="text-xl md:text-2xl font-bold text-white"
              style={{ fontFamily: "Tomorrow, sans-serif" }}
            >
              {"<HackBeyondLimit$>"}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["About", "Timeline", "Prizes", "Sponsors"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors text-lg"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
