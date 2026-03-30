import HeroScene from "./HeroScene";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center flex-col text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Experience Your Dream Space
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-gray-300"
        >
          Explore, customize, and interact with real estate in 3D
        </motion.p>
      </div>
    </section>
  );
}