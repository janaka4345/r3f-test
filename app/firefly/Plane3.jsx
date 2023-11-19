export default function Plane3() {
  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} scale={10} position={[0, -1, 0]}>
        <planeGeometry />
        <meshBasicMaterial color={"yellowgreen"} />
      </mesh>
    </>
  );
}
