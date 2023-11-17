import { useGLTF } from "@react-three/drei";
export default function Hamberger() {
  const hambergerModel = useGLTF("./hamburger-draco.glb");
  console.log(hambergerModel);
  return (
    <>
      <primitive object={hambergerModel.scene} scale={0.35} />
    </>
  );
}
