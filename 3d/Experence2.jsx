import { Suspense } from "react";
import Plane from "./Plane";
import Placeholder from "./Placeholder";
import Hamberger from "./Hamberger";
// import Hamberger2 from "./Hamberger2";
import Fox from "./Fox";
export default function Experence2() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <Plane />
      <Suspense fallback={<Placeholder scale={2} />}>
        <Hamberger />
      </Suspense>

      <Suspense fallback={<Placeholder scale={2} />}>
        <Fox />
      </Suspense>
      {/* <Hamberger2 scale={0.5} /> */}
    </>
  );
}
