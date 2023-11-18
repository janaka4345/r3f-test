export default function Plane() {
  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} scale={50} position={[0, -1, 0]}>
        <planeGeometry />
        <meshStandardMaterial color={"greenyellow"} />
      </mesh>
    </>
  );
}
