"use client";

import { Float, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function DeviceModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetRotationY = state.pointer.x * 0.28;
    const targetRotationX = -state.pointer.y * 0.18;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.05
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.05
    );
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.3}>
      <group ref={groupRef} rotation={[0.05, -0.25, 0.05]}>
        {/* Metallic device frame */}
        <RoundedBox args={[3.1, 2.05, 0.22]} radius={0.14} smoothness={6}>
          <meshStandardMaterial
            color="#151922"
            metalness={0.92}
            roughness={0.18}
          />
        </RoundedBox>

        {/* Glass screen */}
        <RoundedBox
          args={[2.85, 1.78, 0.08]}
          radius={0.1}
          smoothness={6}
          position={[0, 0, 0.16]}
        >
          <meshPhysicalMaterial
            color="#0a1820"
            metalness={0.15}
            roughness={0.08}
            transmission={0.2}
            transparent
            opacity={0.94}
          />
        </RoundedBox>

        {/* Teal interface blocks */}
        <mesh position={[-0.62, 0.35, 0.23]}>
          <planeGeometry args={[1.28, 0.17]} />
          <meshBasicMaterial color="#00f2fe" transparent opacity={0.8} />
        </mesh>

        <mesh position={[-0.82, 0.08, 0.23]}>
          <planeGeometry args={[0.92, 0.1]} />
          <meshBasicMaterial color="#8e9aaf" transparent opacity={0.45} />
        </mesh>

        <mesh position={[-0.92, -0.12, 0.23]}>
          <planeGeometry args={[0.72, 0.08]} />
          <meshBasicMaterial color="#8e9aaf" transparent opacity={0.28} />
        </mesh>

        {[0.35, 0.6, 0.88, 1.16].map((x, index) => (
          <mesh key={x} position={[x, -0.36, 0.23]}>
            <planeGeometry args={[0.12, 0.2 + index * 0.1]} />
            <meshBasicMaterial
              color="#00f2fe"
              transparent
              opacity={0.3 + index * 0.12}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function FloatingDevice() {
  return (
    <div
      className="h-[320px] w-full sm:h-[390px] lg:h-[460px]"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#dffcff" />
        <pointLight position={[-3, -1, 3]} intensity={1.5} color="#00f2fe" />
        <DeviceModel />
      </Canvas>
    </div>
  );
}