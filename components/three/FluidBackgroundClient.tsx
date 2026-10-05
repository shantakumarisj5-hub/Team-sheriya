"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScrollVelocity;
  uniform vec2 uResolution;

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 centered = uv - 0.5;
    centered.x *= uResolution.x / uResolution.y;

    float time = uTime * 0.045;
    float scrollEnergy = min(uScrollVelocity * 0.04, 0.25);

    vec2 mouse = uMouse * 0.24;
    float fieldA = fbm(centered * 2.2 + vec2(time, -time * 0.7) + mouse);
    float fieldB = fbm(centered * 3.4 - vec2(time * 0.4, time) - mouse * 0.55);

    float fluid = smoothstep(0.42, 0.82, fieldA * 0.7 + fieldB * 0.45);
    float vignette = smoothstep(1.1, 0.1, length(centered));

    vec3 voidColor = vec3(0.043, 0.047, 0.063);
    vec3 teal = vec3(0.0, 0.95, 0.996);

    float accent = fluid * 0.13 + scrollEnergy * fluid;
    vec3 color = voidColor + teal * accent;
    color *= 0.72 + vignette * 0.28;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function FluidPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetMouse = useRef(new THREE.Vector2(0, 0));
  const scrollVelocity = useRef(0);
  const lastScroll = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScrollVelocity: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(
          typeof window === "undefined" ? 1 : window.innerWidth,
          typeof window === "undefined" ? 1 : window.innerHeight
        ),
      },
    }),
    []
  );

  useFrame((state, delta) => {
    if (!materialRef.current) return;

    const currentScroll = window.scrollY;
    const rawVelocity = Math.abs(currentScroll - lastScroll.current) / Math.max(delta, 0.016);
    lastScroll.current = currentScroll;

    scrollVelocity.current = THREE.MathUtils.lerp(
      scrollVelocity.current,
      Math.min(rawVelocity, 12),
      0.08
    );

    targetMouse.current.set(state.pointer.x, state.pointer.y);
    mouse.current.lerp(targetMouse.current, 0.04);

    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uMouse.value.copy(mouse.current);
    materialRef.current.uniforms.uScrollVelocity.value = scrollVelocity.current;
    materialRef.current.uniforms.uResolution.value.set(
      state.size.width,
      state.size.height
    );
  });

  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export default function FluidBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] bg-[#0b0c10]"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 1], fov: 50 }}
      >
        <FluidPlane />
      </Canvas>

      {/* Dark readability layer */}
      <div className="absolute inset-0 bg-[#0b0c10]/55" />
    </div>
  );
}