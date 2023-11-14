import { DoubleSide } from "three";
import { useMemo, useEffect, useRef } from "react";
export default function CustomObject() {
  const geometryRef = useRef();

  const vertexesCount = 10 * 3;

  const positions = useMemo(() => {
    const position = new Float32Array(vertexesCount * 3);
    for (let index = 0; index < position.length; index++) {
      position[index] = (Math.random() - 0.5) * 3;
    }
    return position;
  }, []);

  useEffect(() => {
    // console.log(positions);
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={vertexesCount}
          itemSize={3}
          array={positions}
          // doubleSide
        />
      </bufferGeometry>
      <meshStandardMaterial color={"red"} side={DoubleSide} />
    </mesh>
  );
}
