import Cube from "./Cube";
import Sphere from "./Sphere";
import Plane from "./Plane";
export default function Experence() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Cube />
      <Sphere />
      <Plane />
    </>
  );
}
