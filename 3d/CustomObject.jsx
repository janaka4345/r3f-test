import { DoubleSide } from "three";
import {useMemo} from 'react'
export default function CustomObject() {
  const vertexesCount = 10 * 3;
  

  const positions = useMemo(()=>{
    const positions = new Float32Array(vertexesCount * 3);
    for (let index = 0; index < positions.length; index++) {
    positions[index] = (Math.random() - 0.5) * 3;
    return positions
  }
  },[])
  
  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={vertexesCount}
          itemSize={3}
          array={positions}
          doubleSide
        />
      </bufferGeometry>
      <meshBasicMaterial color={"yellow"} side={DoubleSide} />
    </mesh>
  );
}
