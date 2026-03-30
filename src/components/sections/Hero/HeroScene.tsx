import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function AnimatedBox() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // rotation
    meshRef.current.rotation.y = time * 0.5;

    // floating effect
    meshRef.current.position.y = Math.sin(time) * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color="#6366f1" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 5]} />
      <AnimatedBox />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}