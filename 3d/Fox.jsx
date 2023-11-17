import { useGLTF } from "@react-three/drei";
export default function Fox() {
  const FoxModel = useGLTF("./Fox.gltf");
  console.log(FoxModel);
  return (
    <>
      <primitive object={FoxModel.scene} scale={0.03} position={[-2, 0, 0]} />
    </>
  );
}
