import { DoubleSide } from "three";
import { useMemo, useEffect, useRef } from "react";
import { extend } from '@react-three/fiber
import { shaderMaterial } from "@react-three/drei";

const FireflyShaderMaterial= shaderMaterial( {
  uTime: 0.0,
},`
void main(){
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectionPosition = projectionMatrix * viewPosition;

            gl_Position = projectionPosition;
            gl_PointSize=10.0;
}
`,`
void main(){
  gl_FragColor=vec4(0.0,0.0,1.0,1.0);
}
`)

extend({FireflyShaderMaterial})

export default function Particles() {
  const geometryRef = useRef();
  const fireflycount = 30;
  const positions = useMemo(() => {
    const positionsArray = new Float32Array(fireflycount * 3);
    for (let index = 0; index < positionsArray.length; index++) {
      positionsArray[index * 3 + 0] = Math.random() * 4;
      positionsArray[index * 3 + 1] = Math.random() * 4;
      positionsArray[index * 3 + 2] = Math.random() * 4;
    }
    return positionsArray;
  }, []);

  // console.log(positions);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={fireflycount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      {/* <pointsMaterial size={0.2} sizeAttenuation={true} color={"red"} /> */}
<fireflyShaderMaterial/>
    </points>
  );
}