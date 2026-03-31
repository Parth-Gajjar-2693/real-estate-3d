import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Time Customization",
    desc: "Instantly change colors, styles, and layouts with zero delay.",
    icon: "🎨",
  },
  {
    title: "Interactive Exploration",
    desc: "Navigate your space with smooth animations and depth effects.",
    icon: "🧭",
  },
  {
    title: "Smart Saving",
    desc: "Save your favorite designs and continue anytime.",
    icon: "💾",
  },
  {
    title: "Multi-Room Support",
    desc: "Switch between living room, bedroom, and kitchen seamlessly.",
    icon: "🏠",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_40%)]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Powerful{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Features
          </span>
        </h2>

        <p className="mt-4 text-gray-400">
          Everything you need to design, explore, and customize your dream space.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl text-left"
          >
            <div className="text-3xl">{item.icon}</div>

            <h3 className="mt-4 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 flex justify-center"
      >
        <button className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition">
          Start Designing 🚀
        </button>
      </motion.div>
    </section>
  );
}