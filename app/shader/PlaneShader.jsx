export default function PlaneShader() {
  return (
    <mesh scale={10}>
      <planeGeometry />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}
