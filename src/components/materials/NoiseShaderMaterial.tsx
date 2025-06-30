import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

// Your shader material definition
const NoiseShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float rand(vec2 n) {
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }

    float noise(vec2 p) {
      vec2 ip = floor(p);
      vec2 u  = fract(p);
      u = u*u*(3.0-2.0*u);
      float res = mix(
          mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
          mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
          u.y
      );
      return res * res;
    }

    const mat2 mtx = mat2(0.80, 0.60, -0.60, 0.80);

    float fbm(vec2 p, float t) {
      float f = 0.0;
      f += 0.500000 * noise(p + t); p = mtx * p * 2.02;
      f += 0.250000 * noise(p);     p = mtx * p * 2.03;
      f += 0.125000 * noise(p);     p = mtx * p * 2.01;
      f += 0.062500 * noise(p);     p = mtx * p * 2.04;
      f += 0.031250 * noise(p);     p = mtx * p * 2.01;
      f += 0.015625 * noise(p + sin(t));
      return f / 0.984375;
    }

    void main() {
      vec2 uv = vUv;
      float shade = fbm(uv * 3.0, uTime * 0.05);
      gl_FragColor = vec4(vec3(shade), 1.0);
    }
  `
);

extend({ NoiseShaderMaterial });