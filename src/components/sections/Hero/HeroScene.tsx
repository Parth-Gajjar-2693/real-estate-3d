import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroScene() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse move tracking
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Parallax transforms
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const translateX = useTransform(mouseX, [-300, 300], [-20, 20]);
  const translateY = useTransform(mouseY, [-300, 300], [-20, 20]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      
      {/* Background Layer */}
      <motion.img
        src="/room.jpg"
        alt="Room"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        style={{ translateX, translateY }}
      />

      {/* Mid Layer */}
      <motion.img
        src="/room.jpg"
        alt="Room Mid"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ rotateX, rotateY }}
      />

      {/* Front Layer */}
      <img
        src="/room.jpg"
        alt="Room Front"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25),transparent_40%)]" />
    </div>
  );
}