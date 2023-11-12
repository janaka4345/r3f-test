import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Cube() {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    // console.log(state, delta);
    cubeRef.current.rotation.y += delta;
  });
  return (
    <>
      <mesh ref={cubeRef} rotation-y={2} position-x={-2}>
        <boxGeometry />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </>
  );
}
