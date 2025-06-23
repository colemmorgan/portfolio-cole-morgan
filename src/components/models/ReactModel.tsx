import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import type { ModelProps } from "../../types/ModelProps";

export default function ReactModel({
  children,
  color = "white",
  roughness = 0,
  ...props
}: ModelProps) {
  const ref = useRef<any>(null);
  const { nodes } = useGLTF("/models/react.gltf") as any;

  useFrame((_, delta) => {
    if (ref.current?.material?.color) {
      easing.dampC(ref.current.material.color, color, 0.2, delta);
    }
  });

  return (
    <group {...props} dispose={null} scale={0.9}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        ref={ref}
        position={[0, 1.311, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.266}
      >
        {children}
        <meshStandardMaterial metalness={0.2} roughness={roughness} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001.geometry}
          position={[0.336, -0.081, 0.024]}
          rotation={[-0.16, 0, -Math.PI / 2]}
          scale={[3.754, 1.468, 3.005]}
        >
          <meshStandardMaterial metalness={0.2} roughness={roughness} color={color} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus002.geometry}
          position={[-0.515, -0.104, 0.165]}
          rotation={[-1.179, 0, -Math.PI / 2]}
          scale={[3.754, 1.468, 3.005]}
        >
          <meshStandardMaterial metalness={0.2} roughness={roughness} color={color} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus003.geometry}
          position={[-0.035, -0.107, 0.004]}
          rotation={[0.89, 0, -Math.PI / 2]}
          scale={[3.754, 1.468, 3.005]}
        >
          <meshStandardMaterial metalness={0.2} roughness={roughness} color={color} />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/react.gltf");
