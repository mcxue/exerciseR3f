import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
// import * as THREE from 'three';

const App = () => {
  const cameraSettings = {
    fov: 45,
    near: 0.5,
    far: 200,
    position: [3, 2, 6],
    // zoom: 100,
  } as const;
  return (
    <Canvas
      // flat
      dpr={1}
      gl={{
        antialias: false,
        // toneMapping: THREE.CineonToneMapping,
        // outputEncoding: THREE.LinearEncoding,
      }}
      // orthographic
      camera={cameraSettings}
    >
      <Experience />
    </Canvas>
  );
};

export default App;
