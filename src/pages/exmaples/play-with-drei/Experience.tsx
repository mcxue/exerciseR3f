import { useRef } from 'react';
import './index.css';
import {
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  TransformControls,
  Html,
  Text,
  Float,
} from '@react-three/drei';

const Experience = () => {
  const cubeRef = useRef<any>();
  const sphereRef = useRef<any>();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
        scale={100}
        fixed={true}
      >
        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={[sphereRef, cubeRef]}
          >
            This is a sphere
          </Html>
        </mesh>
      </PivotControls>
      <Float
        speed={5}
        floatIntensity={2}
      >
        <Text
          font="/fonts/bangers-v20-latin-regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          I LOVE R3F
          {/*<meshNormalMaterial />*/}
        </Text>
      </Float>
      <mesh rotation-x={-Math.PI / 2} position-y={-1} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
          color="greenyellow"
        />
        {/*<meshStandardMaterial color="green" />*/}
      </mesh>
    </>
  );
};

export default Experience;
