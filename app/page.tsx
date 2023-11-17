"use client";
import { Canvas } from "@react-three/fiber";
import Experence from "../3d/Experence";
import Experence2 from "../3d/Experence2";
// import { Perf } from "r3f-perf";

import { OrbitControls } from "@react-three/drei";
export default function Home() {
  return (
    <Canvas>
      {/* <Perf position="top-left" /> */}
      <OrbitControls />
      {/* <Experence /> */}
      <Experence2 />
    </Canvas>
  );
}
