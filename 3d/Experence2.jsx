import Plane from "./Plane";
import Hamberger from "./Hamberger";
import Fox from "./Fox";
import { useGLTF } from "@react-three/drei";
export default function Experence2() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <Plane />
      <Hamberger />
      <Fox />
    </>
  );
}
