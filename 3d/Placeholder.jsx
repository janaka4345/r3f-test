export default function Placeholder(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial wireframe={true} color="red" />
    </mesh>
  );
}
