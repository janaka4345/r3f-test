"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experence from "../3d/Experence";
import Experence2 from "../3d/Experence2";
// import { Perf } from "r3f-perf";

import { OrbitControls } from "@react-three/drei";
export default function Home() {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Canvas camera={{ position: [0, 6, 14], fov: 42 }}>
        <color attach="background" args={["#dbecfb"]} />
        <fog attach="fog" args={["#dbecfb", 15, 40]} />
        {/* <Perf position="top-left" /> */}
        <OrbitControls />
        {/* <Experence /> */}
        <Experence2 />
      </Canvas>
    </Suspense>
  );
}
