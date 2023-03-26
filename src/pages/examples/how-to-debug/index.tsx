import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { Leva } from 'leva';

const App = () => {
  return (
    <>
      <Leva collapsed />
      <Canvas>
        <Experience />
      </Canvas>
    </>
  )
    ;
};

export default App;
