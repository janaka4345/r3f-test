"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Plane3 from "./Plane3";
import Particles from "./Particles";

import { OrbitControls } from "@react-three/drei";
export default function Page() {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Canvas camera={{ position: [0, 6, 14], fov: 42 }}>
        <color attach="background" args={["black"]} />
        {/* <fog attach="fog" args={["#dbecfb", 15, 40]} /> */}
        {/* <Perf position="top-left" /> */}
        <OrbitControls />
        <Plane3 />
        <Particles />
      </Canvas>
    </Suspense>
  );
}
