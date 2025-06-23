import { useRef } from "react";
import type { ModelProps } from "../../types/ModelProps";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useGLTF } from "@react-three/drei";

export default function Gator({
  children,
  color = "white",
  roughness = 0,
  ...props
}: ModelProps) {
  const ref = useRef<any>(null);
  const { nodes } = useGLTF("/models/gator.glb") as any;

  useFrame((_, delta) => {
    if (ref.current?.material?.color) {
      easing.dampC(ref.current.material.color, color, 0.2, delta);
    }
  });

  return (
    <group {...props} dispose={null} scale={0.00275}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Plane-Mesh"].geometry}
        ref={ref}
      >
        {children}
        <meshStandardMaterial metalness={0.2} roughness={roughness} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Plane-Mesh_1"].geometry}
      >
        <meshStandardMaterial metalness={0.2} roughness={roughness} color={color} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Plane-Mesh_2"].geometry}
      >
        <meshStandardMaterial metalness={0.2} roughness={roughness} color={color} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Plane-Mesh_3"].geometry}
      >
        <meshStandardMaterial metalness={0.2} roughness={roughness} color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/gator.glb");
