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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Custom Logo */}
            <img
              src="./src/images/thlogo1.png" // Update this with the correct path to your logo
              alt="Your Logo"
              className="w-[22px] h-[35px] md:w-[26px] md:h-[42px]" // Further reduced size proportionally
            />
            <span className="font-bold text-xl">Tech Hub</span>
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
