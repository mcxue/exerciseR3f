import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stage, useTexture } from '@react-three/drei';
import { Suspense } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

const Box = () => {
  const { args1 } = useControls({ args1: [1, 32, 32] });
  const textureProps = useTexture({
    map: '/textures/ball/color.jpg',
    displacementMap: '/textures/ball/displacement.jpg',
    metalnessMap: '/textures/ball/metalness.jpg',
    normalMap: '/textures/ball/normal.jpg',
    roughnessMap: '/textures/ball/roughness.jpg',
  });
  return (
    <Sphere args={[...args1]}>
      <meshPhysicalMaterial {...textureProps} map-magFilter={THREE.NearestFilter} displacementScale={0.5} />
    </Sphere>
  );
};

const App = () => {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <OrbitControls makeDefault autoRotate />
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={1} environment="city">
          <Box />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default App;
