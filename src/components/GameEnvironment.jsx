import { useContext, useState, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { GameContext } from "./GameContext"

import vertexShader from '../shaders/sky/vertex.glsl'
import fragmentShader from '../shaders/sky/fragment.glsl'
import { BackSide, Vector2 } from 'three'

export default function GameEnvironment() {
  const settings = useContext(GameContext)
  const { viewport } = useThree()
  const dimension = Math.max(viewport.width, viewport.height)
  const [event, setEvent] = useState(true)
  const [time, setTime] = useState(0.0)
  
  const uniformData = useMemo(() => { return {
    u_time: { 
      type: "f",
      value: time,
    },
    b_event: {
      type: "b",
      value: event
    },
    xCoord: {
      type:"f",
      value: 0.0
    },
    yCoord: {
      type:"f",
      value: 0.0
    },
    u_resolution: { 
      type: "v2", 
      value: new Vector2(window.innerWidth,window.innerHeight) 
    },
  }},[time]);
  
  useFrame((state, delta) =>{
    uniformData.u_time.value += delta
  })
  
  return (
    <mesh position={[0, 0, 0]} rotation={[0,0,0]} scale={[dimension, dimension, dimension]}>
      <sphereGeometry attach={'geometry'} />
      <shaderMaterial
          attach="material"
          uniforms={uniformData}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader} 
          wireframe={settings.wireframe}
          side={BackSide}/>
    </mesh>
  )
}
