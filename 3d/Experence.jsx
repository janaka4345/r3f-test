import Cube from "./Cube";
import Sphere from "./Sphere";
import Plane from "./Plane";
import Torus from "./Torus";
export default function Experence() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Cube />
      <Sphere />
      <Plane />
      <Torus />
    </>
  );
}
