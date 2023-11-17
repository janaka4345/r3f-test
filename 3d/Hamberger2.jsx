import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Hamberger2(props) {
  const { nodes, materials } = useGLTF("/hamburger.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="bottomBun"
          castShadow
          receiveShadow
          geometry={nodes.bottomBun.geometry}
          material={materials.BunMaterial}
        />
        <mesh
          name="meat"
          castShadow
          receiveShadow
          geometry={nodes.meat.geometry}
          material={materials.SteakMaterial}
          position={[0, 2.817, 0]}
        />
        <mesh
          name="cheese"
          castShadow
          receiveShadow
          geometry={nodes.cheese.geometry}
          material={materials.CheeseMaterial}
          position={[0, 3.04, 0]}
        />
        <mesh
          name="topBun"
          castShadow
          receiveShadow
          geometry={nodes.topBun.geometry}
          material={materials.BunMaterial}
          position={[0, 1.771, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hamburger.glb");
