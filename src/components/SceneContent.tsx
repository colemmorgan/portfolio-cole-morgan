import React, { useReducer, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Physics, RigidBody, BallCollider } from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

import Heart from "./models/HeartModel";
import Gator from "./models/GatorModel";
import ReactModel from "./models/ReactModel";
import Satellite from "./models/SatelliteModel";

type ConnectorProps = {
  position?: [number, number, number];
  children?: React.ReactNode;
  vec?: THREE.Vector3;
  scale?: number;
  r?: (min: number, max: number) => number;
  color?: string;
  roughness?: number;
};

// Generate 3 variants for each of 4 models = 12 configs
const shuffle = () =>
  Array.from({ length: 12 }, (_, i) => {
    const variants = [
      { color: "#fff", roughness: 0.6 },
      { color: "#aaa", roughness: 0.1 },
      { color: "#898989", roughness: 0.3 },
    ];
    return variants[i % 3];
  });

export default function SceneContent() {
  const [_, click] = useReducer((state) => ++state % 4, 0);
  const connectors = useMemo(() => shuffle(), []);
  const models = [Heart, Gator, ReactModel, Satellite];

  return (
    <>
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((modelProps: any, i: number) => {
          const Model = models[i % models.length];
          return (
            <Connector key={i} {...modelProps}>
              <Model {...modelProps} />
            </Connector>
          );
        })}
      </Physics>
      <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </>
  );
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  ...props
}: ConnectorProps) {
  const api = useRef<any>(null);
  useFrame((_, delta) => {
    delta = Math.min(0.1, delta);

    if (api.current?.translation) {
      const pos = api.current.translation();
      vec.set(pos.x, pos.y, pos.z);

      // Simulate spheroid gravity: weaker pull on X-axis
      const gravityForce = vec
        .multiply(new THREE.Vector3(0.5, 1, 1))
        .multiplyScalar(-0.2);

      api.current.applyImpulse(gravityForce, true);
    }
  });

  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      ref={api}
      colliders="hull"
      position={position}
    >
      {children}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<any>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });

  return (
    <RigidBody
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[0.8]} />
    </RigidBody>
  );
}
