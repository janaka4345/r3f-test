// import { Suspense } from "react";
// import Plane from "../../3d/Plane";
import PlaneShader from "./PlaneShader";
// import Placeholder from "../../3d/Placeholder";
export default function ShaderExperience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      {/* <Plane /> */}
      <PlaneShader />
    </>
  );
}
