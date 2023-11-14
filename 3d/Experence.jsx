import Cube from "./Cube";
import Sphere from "./Sphere";
import Plane from "./Plane";
import { Html, Text, Float } from "@react-three/drei";
import CustomObject from "./CustomObject";
export default function Experence() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <Cube />
      <Float>
        <Html
          position={[1, 1, 1]}
          className="bg-black/40 px-5 rounded-xl"
          center
          distanceFactor={4}
          // occlude={[ref]}
        >
          <button
            className="text-2xl text-red-500"
            onClick={() => {
              console.log("clicked");
            }}
          >
            hello
          </button>
          <p className="text-green-500">world</p>
        </Html>
      </Float>

      {/* <Text characters="abcdefghijklmnopqrstuvwxyz0123456789!">
        hello world!
      </Text> */}
      {/* <Text
        key={25}
        color="black"

        // anchorX="center" anchorY="middle"
      >
        hello world!
      </Text> */}
      <Sphere />
      <Plane />
      {/* <CustomObject /> */}
    </>
  );
}
