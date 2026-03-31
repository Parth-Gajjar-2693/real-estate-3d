import { motion } from "framer-motion";
import { useState } from "react";

const colors = ["#6366f1", "#ec4899", "#22c55e", "#f59e0b"];
const furniture = ["Modern", "Minimal", "Luxury"];

export default function Experience() {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeFurniture, setActiveFurniture] = useState(furniture[0]);
  const [saved, setSaved] = useState(false);

  // SAVE (fake but real-feeling)
  const handleSave = () => {
    const data = {
      color: activeColor,
      furniture: activeFurniture,
    };

    localStorage.setItem("room_design", JSON.stringify(data));
    setSaved(true);

    setTimeout(() => setSaved(false), 2000);
  };

  // RESET
  const handleReset = () => {
    setActiveColor(colors[0]);
    setActiveFurniture(furniture[0]);
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">
          Interactive{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="mt-16 grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* PREVIEW */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10">
          <img src="/room.jpg" className="w-full h-full object-cover" />

          {/* color overlay */}
          <motion.div
            key={activeColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="absolute inset-0 mix-blend-overlay"
            style={{ backgroundColor: activeColor }}
          />

          {/* label */}
          <div className="absolute bottom-4 left-4 text-sm bg-black/50 px-3 py-1 rounded-lg">
            {activeFurniture}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="space-y-8">
          
          {/* COLORS */}
          <div>
            <h3 className="mb-3">Wall Color</h3>
            <div className="flex gap-4">
              {colors.map((c) => (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  key={c}
                  onClick={() => setActiveColor(c)}
                  className={`w-10 h-10 rounded-full border-2 transition ${
                    activeColor === c
                      ? "border-white scale-110"
                      : "border-white/20"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* FURNITURE */}
          <div>
            <h3 className="mb-3">Furniture Style</h3>
            <div className="flex gap-3 flex-wrap">
              {furniture.map((item) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  key={item}
                  onClick={() => setActiveFurniture(item)}
                  className={`px-4 py-2 rounded-lg border transition ${
                    activeFurniture === item
                      ? "bg-white text-black"
                      : "border-white/20 text-gray-300"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold"
            >
              Save Design
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10"
            >
              Reset
            </motion.button>
          </div>
        </div>
      </div>

      {/* TOAST */}
      {saved && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 bg-white text-black px-6 py-3 rounded-xl shadow-lg"
        >
          Design Saved ✅
        </motion.div>
      )}
    </section>
  );
}