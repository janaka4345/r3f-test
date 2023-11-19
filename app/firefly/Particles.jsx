import {AdditiveBlending} from "three";
import { useMemo, useEffect, useRef } from "react";
import { extend,useFrame } from '@react-three/fiber
import { shaderMaterial,Center } from "@react-three/drei";

const FireflyShaderMaterial= shaderMaterial( {
  uTime: 0.0,
  uPixelRatio:Math.min(window.devicePixelRatio,2),
},`
uniform float uPixelRatio;
uniform float uTime;
void main(){
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y+=sin(uTime + modelPosition.x*100.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectionPosition = projectionMatrix * viewPosition;

            gl_Position = projectionPosition;
            gl_PointSize=40.0*uPixelRatio;
            gl_PointSize*=(10.0 / -viewPosition.z);
}
`,`
void main(){
  float distanceToCenter=distance(gl_PointCoord,vec2(0.5));
  float strength= (0.05/distanceToCenter)-(0.05*2.0);
  gl_FragColor=vec4(1.0,1.0,1.0,strength);
}
`,
// {}
)

extend({FireflyShaderMaterial})

export default function Particles() {
  const geometryRef = useRef();
  const fireflycount = 30;
  const positions = useMemo(() => {
    const positionsArray = new Float32Array(fireflycount * 3);
    for (let index = 0; index < positionsArray.length; index++) {
      positionsArray[index * 3 + 0] = Math.random() * 10;
      positionsArray[index * 3 + 1] = Math.random() * 10;
      positionsArray[index * 3 + 2] = Math.random() * 10;
    }
    return positionsArray;
  }, []);
  useFrame((state,delta)=>{
      geometryRef.current.uTime+=delta
  })
  // console.log(positions);
  return (
    <Center>
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={fireflycount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      
      <fireflyShaderMaterial 
      ref={geometryRef}
      transparent={true} 
      depthWrite={false} 
      blending={AdditiveBlending}
      />
    </points>
    </Center>
  );
}
