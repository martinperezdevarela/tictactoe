import { useContext, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import vertexShader from '../shaders/voronoi/vertex.glsl'
import fragmentShader from '../shaders/voronoi/fragment.glsl'
import { DoubleSide, Vector2 } from "three";
import { GameContext } from "./GameContext";

function Background(props) {
  const settings = useContext(GameContext);
  const { viewport } = useThree();
  const {position, rotation} = props;
  const [event, setEvent] = useState(true);
  const [time, setTime] = useState(0.0);

  useFrame((state, delta) =>{
        uniformData.u_time.value += delta
  });

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

  return (
    <mesh 
      {...props} 
      position={position} 
      rotation={rotation}>
      <planeGeometry attach="geometry" args={[viewport.height,viewport.height, viewport.height, viewport.height]} />
      <shaderMaterial
          attach="material"
          uniforms={uniformData}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader} 
          wireframe={settings.wireframe}/>
    </mesh>
  )
}

export default Background