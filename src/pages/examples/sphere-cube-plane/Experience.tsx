import { OrbitControls } from '@react-three/drei';

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
};

export default Experience;
