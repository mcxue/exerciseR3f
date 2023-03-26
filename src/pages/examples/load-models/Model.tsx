// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Clone, useGLTF } from '@react-three/drei';
// @ts-ignore
import hamburgerModel from '/src/assets/models/hamburger/hamburger.glb';

const hamburgerPath: string = hamburgerModel;

const Model = () => {
  // const model = useLoader(GLTFLoader, hamburgerPath);
  const model = useGLTF(hamburgerPath);
  return (
    <>
      {/*<primitive object={model.scene} scale={0.35} />*/}
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  );
};

useGLTF.preload(hamburgerPath);

export default Model;
