import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';
import {
  useControls,
  button,
  // folder
} from 'leva';
import { Perf } from 'r3f-perf';

const Experience = () => {
  const { perfVisible } = useControls({
    perfVisible: true,
  });
  const { position, color, visible } = useControls('sphere', {
    position: {
      value: {
        x: -2,
        y: 0,
        // z: 0
      },
      min: -4,
      max: 4,
      step: 0.01,
      joystick: 'invertY',
    },
    color: '#ff0000',
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {
      console.log('ok');
    }),
    choice: {
      options: ['a', 'b', 'c'],
    },
  });
  const { cubeScale } = useControls('cube', {
    cubeScale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });
  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Cube scale={cubeScale} />
      <mesh position={[position.x, position.y, 0]} visible={visible}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
};

export default Experience;
