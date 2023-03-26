import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Model from './Model';
import { Suspense } from 'react';
import Placeholder from './Placeholder';
import Hamburger from './Hamburger';
import Fox from './Fox';

const Experience = () => {
  return (
    <>
      <Perf style={{ top: '81px', left: '369px', right: 'auto' }} />
      <OrbitControls makeDefault />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
      <ambientLight intensity={0.5} />
      <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 2, 2]} />}>
        <Hamburger scale={0.35} />
      </Suspense>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 2, 2]} />}>
        <Fox />
      </Suspense>
    </>
  );
};

export default Experience;
