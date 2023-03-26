const Cube = ({ scale = 1 }) => {
  return (
    <mesh position-x={2} rotation-y={Math.PI * 0.25} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default Cube;
