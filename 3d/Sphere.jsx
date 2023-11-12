export default function Sphere() {
  return (
    <>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}
