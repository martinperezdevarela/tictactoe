import { useState, useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import vertexShader from '../shaders/gradient/vertex.glsl'
import fragmentShader from '../shaders/gradient/fragment.glsl'

export default function ShadedModel(props) {
  const {model, position, rotation} = props;
  const obj = useLoader(OBJLoader, model);
  const [event, setEvent] = useState(true);
  const [time, setTime] = useState(0.0);

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
  }},[time]);

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);
  
  return (
    <mesh {...props} position={position} rotation={rotation} geometry={geometry} >
      <shaderMaterial
          attach="material"
          uniforms={uniformData}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader} />
    </mesh>
  );
}
