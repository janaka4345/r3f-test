import Cube from "./Cube";
import Sphere from "./Sphere";
import Plane from "./Plane";
import CustomObject from "./CustomObject";
export default function Experence() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <Cube />
      <Sphere />
      <Plane />
      <CustomObject />
    </>
  );
}
