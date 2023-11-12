"use client";
import { Canvas } from "@react-three/fiber";
import Experence from "../3d/Experence";
// import { Perf } from "r3f-perf";

import { OrbitControls } from "@react-three/drei";
export default function Home() {
  return (
    <Canvas>
      {/* <Perf position="top-left" /> */}
      <OrbitControls />
      <Experence />
    </Canvas>
  );
}
