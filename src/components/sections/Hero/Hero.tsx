import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Background zoom on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  // Slight vertical movement
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Content fades + moves
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section className="h-[200vh] relative bg-black">
      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background */}
        <motion.div
          style={{ scale, y }}
          className="absolute inset-0"
        >
          <img
            src="/room.jpg"
            alt="Living Room"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25),transparent_40%)]" />

        {/* Content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 flex h-full items-center justify-center px-4"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 text-center shadow-2xl max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Step Into Your{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Dream Space
              </span>
            </h1>

            <p className="mt-4 text-gray-300 text-lg">
              Scroll to explore and experience interiors in motion.
            </p>

            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition">
              Start Exploring →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}