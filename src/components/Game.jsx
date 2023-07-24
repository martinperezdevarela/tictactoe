import { useContext, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import TexturedBackground from './TexturedBackground';
// import ShadedModel from './ShadedModel';
import TexturedModel from './TexturedModel';

import copper1 from '../textures/copper_v1.jpg';
import wood1 from '../textures/weathered-wooden-surface.jpg';
import wood2 from '../textures/seamless-wood-texture-5.jpg'
import leather from '../textures/FabricLeatherBuffaloRustic001/FabricLeatherBuffaloRustic001_flat.jpg';
import marbel1 from '../textures/130.jpg';
import marbel2 from '../textures/5159167.jpg';

import { GameContext } from './GameContext';
import GameEnvironment from './GameEnvironment';

function Game() {
  const settings = useContext(GameContext);
  const { viewport } = useThree();

  return (
    <>
      <TexturedModel model={'/piece.obj'} texture={leather} position={[-80, 10, -40]} rotation={[Math.PI/2,0,0]} move />
      <TexturedModel model={'/piece.obj'} texture={leather} position={[-110, 10, -40]} rotation={[Math.PI/2,0,0]} move />
      <TexturedModel model={'/piece.obj'} texture={leather} position={[-80, 10, -10]} rotation={[Math.PI/2,0,0]} move />
      <TexturedModel model={'/piece.obj'} texture={leather} position={[-110, 10, -10]} rotation={[Math.PI/2,0,0]} move />
      <TexturedModel model={'/piece.obj'} texture={leather} position={[-80, 10, 20]} rotation={[Math.PI/2,0,0]} move />
      
      <TexturedModel model={'/piece.obj'} texture={leather} position={[80, 10, -40]} rotation={[-Math.PI/2,0,0]} move />
      <TexturedModel model={'/piece.obj'} texture={leather} position={[110, 10, -40]} rotation={[-Math.PI/2,0,0]} move />
      <TexturedModel model={'/piece.obj'} texture={leather} position={[80, 10, -10]} rotation={[-Math.PI/2,0,0]} move />
      <TexturedModel model={'/piece.obj'} texture={leather} position={[110, 10, -10]} rotation={[-Math.PI/2,0,0]} move />
      <TexturedModel model={'/piece.obj'} texture={leather} position={[80, 10, 20]} rotation={[-Math.PI/2,0,0]} move />
      
      <TexturedModel model={'/board.obj'} texture={copper1} position={[0, 5, 0]} rotation={[0,Math.PI,0]}/>
    {/* <TexturedBackground texture={marbel1} rotation={[-Math.PI/2,0,0]} position={[0, 0, 0]}/> */}
      {/* <Background position={[0, 0, -viewport.height]} rotation={[0,0,0]}/> */}
      {/* <TexturedModel model={'/DHM7_handle.obj'} texture={leather} position={[0, 0, 0]} rotation={[0,0,0]} move />
      <TexturedModel model={'/DHM7_base.obj'} texture={leather} position={[0, 0, 0]} rotation={[0,0,0]} move />
      <TexturedModel model={'/DHM7_cover.obj'} texture={marbel1} position={[0, 0, 0]} rotation={[0,0,0]} move />
      <TexturedModel model={'/DHM7_lock.obj'} texture={marbel1} position={[0, 0, 0]} rotation={[0,0,0]} /> */}
      <GameEnvironment/>
    </>
  )
}

export default Game