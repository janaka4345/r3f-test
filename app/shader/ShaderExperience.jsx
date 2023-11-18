// import { Suspense } from "react";
// import Plane from "../../3d/Plane";
import PlaneShader from "./PlaneShader";

import { Sparkles, Center } from "@react-three/drei";
// import Placeholder from "../../3d/Placeholder";
export default function ShaderExperience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      {/* <Plane /> */}
      <Center>
        <PlaneShader />
        {/* <Sparkles size={6} speed={0.2} /> */}
      </Center>
    </>
  );
}
