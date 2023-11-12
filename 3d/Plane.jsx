export default function PLane() {
  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} scale={10} position={[0, -1, 0]}>
        <planeGeometry />
        <meshBasicMaterial color={"greenyellow"} />
      </mesh>
    </>
  );
}
