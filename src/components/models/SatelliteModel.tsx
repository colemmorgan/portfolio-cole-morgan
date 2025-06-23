import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import type { ModelProps } from "../../types/ModelProps";

export default function Satellite({
  children,
  color = "white",
  roughness = 0,
  ...props
}: ModelProps) {
  const ref = useRef<any>(null);
  const { nodes } = useGLTF("/models/sat.glb") as any;

  useFrame((_, delta) => {
    if (ref.current?.material?.color) {
      easing.dampC(ref.current.material.color, color, 0.2, delta);
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Satellite.geometry}
        ref={ref}
        scale={0.0275}
      >
        {children}
        <meshStandardMaterial metalness={0.2} roughness={roughness} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/sat.glb");
