import { useGLTF } from "@react-three/drei";
export default function Fox() {
  const FoxModel = useGLTF("./Fox.gltf");
  console.log(FoxModel);
  return (
    <>
      <primitive object={FoxModel.scene} scale={0.03} position={[-3, 0, 0]} />
    </>
  );
}
useGLTF.preload("./Fox.gltf");
