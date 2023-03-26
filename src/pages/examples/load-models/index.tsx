import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

const App = () => {
  return (
    <Canvas
      shadows={true}
      camera={{
        near: 0.5,
        far: 200,
        position: [-3, 3, 5],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default App;
