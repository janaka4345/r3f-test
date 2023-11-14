import Cube from "./Cube";
import Sphere from "./Sphere";
import Plane from "./Plane";
import { Html } from "@react-three/drei";
import CustomObject from "./CustomObject";
export default function Experence() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <Cube />
      <Html position={[1, 1, 1]}>
        <h1 className="text-2xl text-red-500">hello</h1>
        <p className="text-red-500">world</p>
      </Html>
      <Sphere />
      <Plane />
      {/* <CustomObject /> */}
    </>
  );
}
