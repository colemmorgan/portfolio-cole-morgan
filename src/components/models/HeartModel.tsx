import { useRef } from "react";
import type { ModelProps } from "../../types/ModelProps";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useGLTF } from "@react-three/drei";

export default function Heart({
  children,
  color = "white",
  roughness = 0,
  ...props
}: ModelProps) {
  const ref = useRef<any>(null);
  const { nodes } = useGLTF("/models/heart.gltf") as any;
  useFrame((_, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heart_teamRed.geometry}
        ref={ref}
        scale={1.8}
      >
        {children}
        <meshStandardMaterial metalness={0.2} roughness={roughness} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/heart.gltf");
