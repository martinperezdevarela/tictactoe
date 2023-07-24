import { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei'
import Game from './components/Game';
import Loader from './components/Loader';

export default function App() {
  return (
    <>
      <Canvas camera={{ fov: 70, position: [0, 75, 75]}}>
        <ambientLight args={['white', 0.9]}/>
        <pointLight color={'white'} position={[-10, 10, -10]} />
        <pointLight color={'white'} position={[10, 10, 10]} />
        {/* <spotLight args={['white', 5, 200]} position={[-50, 0, -50]} /> */}
        <Suspense fallback={<Loader />}>
          <Game />
        </Suspense>
        {/* <OrbitControls /> */}
        <axesHelper args={[150]} />
      </Canvas>
    </>
  )
}
