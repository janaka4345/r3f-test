import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function Sphere() {
  const sphere = useRef();
  // console.log(sphere);
  useFrame((state, delta) => {
    // console.log(state);
    sphere.current.position.y = Math.sin(state.clock.elapsedTime);
    // console.log(sphere.current.position.y);
  });
  return (
    <>
      <mesh ref={sphere} position={[2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}
