import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  const [launch, setLaunch] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const handleRegister = () => {
    setLaunch(true);
    setTimeout(() => {
      window.location.href =
        "https://unstop.com/hackathons/hackbeyondlimits-rathinam-college-of-arts-and-sciences-1353196";
    }, 2500);
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: ["#9333EA", "#3B82F6", "#ff007f"] },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: { min: 1, max: 5 } },
            move: { enable: true, speed: 1, direction: "none" },
          },
          detectRetina: true,
        }}
      />

      {/* Rocket Launch Animation */}
      {launch && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-white text-lg font-bold">Redirecting...</div>
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -500, opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-10"
          >
            <Rocket size={80} className="text-white" />
          </motion.div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left px-4 md:px-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col items-center text-center md:text-left"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
            style={{
              fontFamily: "Tomorrow, sans-serif",
              position: "relative",
              left: 50,
            }}
          >
            HACK_BEYOND_LIMIT$
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mt-4"
            style={{
              position: "relative",
              left: 50,
            }}
          >
            Go beyond. Hack beyond!
          </p>

          {/* Call to Action Button */}
          <motion.button
            className="relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-white mt-6 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300"
            onClick={handleRegister}
            animate={{ scale: 1.05 }}
            style={{
              position: "relative",
              left: 50,
            }}
          >
            <span className="flex items-center gap-2 text-sm md:text-base">
              Register Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <Rocket className="w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            </span>
            <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>

        {/* Interactive Spline Mascot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-[400px] md:h-[500px] flex justify-right items-right mt-8 md:ml-16"
          style={{
            backgroundColor: "transparent",
            position: "relative",
            left: 50,
          }}
        >
          <div className="w-full h-full">
            <Spline scene="./src/images/robot_follow_cursor_for_landing_page_copy_2.spline" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
