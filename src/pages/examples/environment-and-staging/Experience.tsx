import { useRef } from 'react';
import {
  OrbitControls,
  useHelper,
  // softShadows,
  // BakeShadows,
  // AccumulativeShadows,
  // RandomizedLight,
  // ContactShadows,
  // Sky,
  // Environment,
  // Lightformer,
  Stage,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// import px from '/src/assets/environmentMaps/2/px.jpg';
// import nx from '/src/assets/environmentMaps/2/nx.jpg';
// import py from '/src/assets/environmentMaps/2/py.jpg';
// import ny from '/src/assets/environmentMaps/2/ny.jpg';
// import pz from '/src/assets/environmentMaps/2/pz.jpg';
// import nz from '/src/assets/environmentMaps/2/nz.jpg';
// import golfEnv from '/src/assets/environmentMaps/limpopo_golf_course_1k.hdr';

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   rings: 11,
// });

const Experience = () => {
  const cubeRef = useRef<any>();
  const directionalLightRef = useRef<any>();
  useFrame((state, delta) => {
    // const time = state.clock.elapsedTime;
    // cubeRef.current.position.x = 2 + Math.sin(time);
    cubeRef.current.rotation.y += delta;
  });
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
  const { color, opacity, blur } = useControls('contactShadows', {
    color: '#000000',
    opacity: {
      value: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
    },
    blur: {
      value: 1.5,
      min: 0,
      max: 10,
      step: 0.1,
    },
  });
  const { sunPosition } = useControls('sky', {
    sunPosition: {
      value: [1, 2, 3],
    },
  });
  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environmentMap', {
    envMapIntensity: { value: 3.5, min: 0, max: 12 },
    envMapHeight: { value: 7, min: 0, max: 100 },
    envMapRadius: { value: 20, min: 10, max: 1000 },
    envMapScale: { value: 100, min: 10, max: 1000 },
  });
  return (
    <>
      {/*<Environment*/}
      {/*  // background*/}
      {/*  preset="sunset"*/}
      {/*  resolution={32}*/}
      {/*  ground={{*/}
      {/*    height: envMapHeight,*/}
      {/*    radius: envMapRadius,*/}
      {/*    scale: envMapScale,*/}
      {/*  }}*/}
      {/*  // files={golfEnv}*/}
      {/*  // files={[*/}
      {/*  //   px,*/}
      {/*  //   nx,*/}
      {/*  //   py,*/}
      {/*  //   ny,*/}
      {/*  //   pz,*/}
      {/*  //   nz,*/}
      {/*  // ]}*/}
      {/*>*/}
      {/*  <color args={['black']} attach="background" />*/}
      {/*  <mesh position-z={-5} scale={10}>*/}
      {/*    <planeGeometry />*/}
      {/*    <meshBasicMaterial color={[10, 10, 0]} />*/}
      {/*  </mesh>*/}
      {/*  <Lightformer*/}
      {/*    position-z={-5}*/}
      {/*    scale={10}*/}
      {/*    color="yellow"*/}
      {/*    intensity={2}*/}
      {/*    form="ring"*/}
      {/*  />*/}
      {/*</Environment>*/}

      {/*<BakeShadows />*/}
      {/*<color attach="background" args={['ivory']} />*/}
      <Perf style={{ top: '81px', left: '369px', right: 'auto' }} />
      <OrbitControls makeDefault />
      {/*<AccumulativeShadows*/}
      {/*  position={[0, -0.99, 0]}*/}
      {/*  scale={10}*/}
      {/*  color="#316d39"*/}
      {/*  opacity={0.8}*/}
      {/*  frames={Infinity}*/}
      {/*  temporal*/}
      {/*  blend={100}*/}
      {/*>*/}
      {/*  <RandomizedLight*/}
      {/*    amount={8}*/}
      {/*    radius={1}*/}
      {/*    ambient={0.5}*/}
      {/*    intensity={1}*/}
      {/*    position={[1, 2, 3]}*/}
      {/*    bias={0.01}*/}
      {/*  />*/}
      {/*</AccumulativeShadows>*/}
      {/*<Sky sunPosition={sunPosition} />*/}
      {/*<ContactShadows*/}
      {/*  position={[0, 0, 0]}*/}
      {/*  scale={10}*/}
      {/*  resolution={512}*/}
      {/*  far={5}*/}
      {/*  color={color}*/}
      {/*  opacity={opacity}*/}
      {/*  blur={blur}*/}
      {/*  frames={1}*/}
      {/*/>*/}
      {/*<directionalLight*/}
      {/*  ref={directionalLightRef}*/}
      {/*  castShadow*/}
      {/*  position={sunPosition}*/}
      {/*  intensity={1.5}*/}
      {/*  shadow-mapSize={[1024, 1024]}*/}
      {/*  shadow-camera-near={1}*/}
      {/*  shadow-camera-far={10}*/}
      {/*  shadow-camera-top={5}*/}
      {/*  shadow-camera-right={5}*/}
      {/*  shadow-camera-bottom={-5}*/}
      {/*  shadow-camera-left={-5}*/}
      {/*/>*/}
      {/*<ambientLight intensity={0.5} />*/}
      {/*<mesh castShadow ref={cubeRef} position-y={1} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>*/}
      {/*  <boxGeometry />*/}
      {/*  <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />*/}
      {/*</mesh>*/}
      {/*<mesh castShadow position-y={1} position-x={-2}>*/}
      {/*  <sphereGeometry />*/}
      {/*  <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />*/}
      {/*</mesh>*/}
      {/*<mesh*/}
      {/*  // receiveShadow*/}
      {/*  rotation-x={-Math.PI / 2} position-y={0} scale={10}>*/}
      {/*  <planeGeometry />*/}
      {/*  <meshStandardMaterial color="green" envMapIntensity={envMapIntensity} />*/}
      {/*</mesh>*/}
      <Stage
        shadows={{
          type: 'contact',
          opacity: 0.2,
          blur: 3,
        }}
        environment="sunset"
        preset="portrait"
        intensity={2}
      >
        <mesh castShadow ref={cubeRef} position-y={1} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />
        </mesh>
        <mesh castShadow position-y={1} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
        </mesh>
      </Stage>
    </>
  );
};

export default Experience;
