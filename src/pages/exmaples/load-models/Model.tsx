// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Clone, useGLTF } from '@react-three/drei';

const Model = () => {
  // const model = useLoader(GLTFLoader, '/models/hamburger/hamburger.glb');
  const model = useGLTF('/models/hamburger/hamburger.glb');
  return (
    <>
      {/*<primitive object={model.scene} scale={0.35} />*/}
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  );
};

useGLTF.preload('/models/hamburger/hamburger.glb');

export default Model;
