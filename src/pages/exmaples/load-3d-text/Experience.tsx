import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import helvetikerFont from '/src/assets/fonts/helvetiker_regular.typeface.json'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export default function Experience() {
  const donuts = useRef<any>([]);
  // const[torusGeometry,setTorusGeometry] = useState()
  // const [material, setMaterial] = useState()
  // const donutsGroup = useRef()
  const [matcapTexture] = useMatcapTexture('0A0A0A_A9A9A9_525252_747474', 256);

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);


  useFrame((state, delta) => {

    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return <>

    <Perf position="top-left" />
    <color args={['ivory']} attach="background"/>
    <OrbitControls makeDefault />

    {/* <torusGeometry ref={setTorusGeometry} args={[1,0.6,16,32]}/> */}
    {/* <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture}/> */}

    <Center>
      <Text3D
        material={material}
        font={helvetikerFont}
        size={0.75}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        HELLO R3F
      </Text3D>
    </Center>

    {/* <group ref={donutsGroup}> */}
    {[...Array(100)].map((value, index) =>
      <mesh key={index}
            ref={(element) => { donuts.current[index] = element;}}
            geometry={torusGeometry}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              0,
            ]}
            material={material}
      />,
    )}
    {/* </group> */}

  </>;
}
