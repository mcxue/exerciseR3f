import {
  Canvas,
  // RootState
} from '@react-three/fiber';
import Experience from './Experience';
// import * as THREE from 'three';

// const created = ({ gl, scene }: RootState) => {
//   // gl.setClearColor('#ff0000', 1);
//   scene.background = new THREE.Color('#ff0000');
// };

const App = () => {
  return (
    <Canvas
      shadows={false}
      // onCreated={created}
    >
      <Experience />
      {/*<color attach="background" args={['red']} />*/}
    </Canvas>
  );
};

export default App;
