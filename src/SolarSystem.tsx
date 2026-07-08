import React from "react";
import { useCurrentFrame } from "remotion";

export const SolarSystem: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <group>
      {/* Sun - huge, glowing, far away */}
      <mesh position={[-120, 60, -180]} scale={30}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffdd44" emissive="#ff8800" emissiveIntensity={2} roughness={0} />
      </mesh>

      {/* Earth & Moon */}
      <group position={[90, 25, -120]}>
        {/* Earth */}
        <mesh scale={6} rotation={[0, frame * 0.01, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#2266cc" emissive="#002266" emissiveIntensity={0.2} roughness={0.7} metalness={0.2} />
        </mesh>
        
        {/* Orbiting Moon */}
        <group rotation={[0, frame * 0.05, 0]}>
          <mesh position={[10, 0, 0]} scale={1.5} rotation={[0, frame * 0.02, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#aaaaaa" roughness={1} />
          </mesh>
        </group>
      </group>

      {/* Mars - small, red */}
      <mesh position={[130, -20, -50]} scale={3.5} rotation={[0, frame * 0.008, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#cc4422" roughness={0.9} />
      </mesh>

      {/* Jupiter - huge, gas giant */}
      <mesh position={[-160, 40, 100]} scale={14} rotation={[0, frame * 0.005, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#d4a373" roughness={0.7} />
      </mesh>

      {/* Saturn - with iconic rings */}
      <group position={[60, 70, 160]} rotation={[Math.PI / 7, frame * 0.002, 0]}>
        <mesh scale={9}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#e9c46a" roughness={0.6} />
        </mesh>
        {/* Rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.1]}>
          <torusGeometry args={[16, 3, 2, 64]} />
          <meshStandardMaterial color="#f4a261" transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  );
};
