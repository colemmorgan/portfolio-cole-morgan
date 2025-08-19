import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import useTheme from "../../hooks/useTheme";

// Define the shader material type
interface NoiseShaderMaterialUniforms {
  uTime: number;
  uResolution: THREE.Vector2;
  uIsDark: boolean;
}

// Your shader material definition
const NoiseShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
    uIsDark: true,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform bool uIsDark;
    varying vec2 vUv;

    float rand(vec2 n) {
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }

    float noise(vec2 p){
      vec2 ip = floor(p);
      vec2 u = fract(p);
      u = u*u*(3.0-2.0*u);

      float res = mix(
        mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
        mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
        u.y
      );
      return res * res;
    }

    const mat2 mtx = mat2(0.80, 0.60, -0.60, 0.80);

    float fbm(vec2 p) {
      float f = 0.0;
      f += 0.500000 * noise(p + uTime * 0.3); p = mtx * p * 2.02;
      f += 0.031250 * noise(p);         p = mtx * p * 2.01;
      f += 0.250000 * noise(p);         p = mtx * p * 2.03;
      f += 0.125000 * noise(p);         p = mtx * p * 2.01;
      f += 0.062500 * noise(p);         p = mtx * p * 2.04;
      f += 0.015625 * noise(p + sin(uTime * 0.3));
      return f / 0.96875;
    }

    float pattern(vec2 p) {
      return fbm(p + fbm(p + fbm(p)));
    }

    void main() {
      vec2 uv = vUv;
      float shade = pattern(uv * 2.0);
      
      if (uIsDark) {
        // Dark mode: keep original look
        gl_FragColor = vec4(vec3(shade), 1.0);
      } else {
        // Light mode: invert and soften
        shade = 1.0 - shade; // Invert
        shade = shade * 0.6 + 0.5; // Soften contrast (scale down and add base brightness)
        gl_FragColor = vec4(vec3(shade), 1.0);
      }
    }
  `
);

extend({ NoiseShaderMaterial });

// Type declaration for the extended material
declare global {
  namespace JSX {
    interface IntrinsicElements {
      noiseShaderMaterial: any;
    }
  }
}

function NoiseShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<
    THREE.ShaderMaterial & NoiseShaderMaterialUniforms
  >(null);
  const { viewport, size } = useThree();
  const { theme } = useTheme();

  // Update resolution when canvas size changes
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uResolution.set(size.width, size.height);
    }
  }, [size]);

  // Update theme uniform
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uIsDark = theme === "dark";
    }
  }, [theme]);

  // Animate the shader
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <noiseShaderMaterial ref={materialRef} />
    </mesh>
  );
}

function FooterScene() {
  const { theme } = useTheme();
  
  return (
    <div className={`absolute inset-0 ${theme === "dark" ? "opacity-20" : ""}`}>
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Suspense fallback={null}>
          <NoiseShaderPlane />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default FooterScene;