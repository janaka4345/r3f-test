import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Clone } from "@react-three/drei";
export default function Hamberger() {
  const hambergerModel = useGLTF("./hamburger-draco.glb");
  // console.log(hambergerModel);
  const ham1 = useRef();
  const ham2 = useRef();
  useFrame((state, delta) => {
    // ham1.current.rotation.x += delta;
    // ham2.current.rotation.x -= delta;
  });
  return (
    <>
      {/* <Clone
        ref={ham1}
        object={hambergerModel.scene}
        scale={0.35}
        position-y={3}
      /> */}
      <Clone object={hambergerModel.scene} scale={0.35} />
      {/* <Clone
        ref={ham2}
        object={hambergerModel.scene}
        scale={0.35}
        position-y={-3}
      /> */}
    </>
  );
}
useGLTF.preload("./hamburger-draco.glb");
