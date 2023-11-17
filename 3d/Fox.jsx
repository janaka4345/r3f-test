import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
export default function Fox() {
  const FoxModel = useGLTF("./Fox.gltf");
  const animations = useAnimations(FoxModel.animations, FoxModel.scene);
  useEffect(() => {
    console.log("hi");
    console.log(animations);
    const animation = animations.actions.Run;
    animation.reset().fadeIn(0.5).play();
    setTimeout(() => {
      animation.fadeOut(1);
      animations.actions.Survey.reset().fadeIn(1).play();
      animations.actions.Survey.crossFadeFrom(animations.actions.Run, 1);
    }, 3000);
  }, []);
  // console.log(FoxModel);
  return (
    <>
      <primitive object={FoxModel.scene} scale={0.03} position={[-3, 0, 0]} />
    </>
  );
}
useGLTF.preload("./Fox.gltf");
