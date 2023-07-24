import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber'

export default function Piece(props) {
  const mesh = useRef()
  
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    // console.log(state);
    // console.log(delta);
    // mesh.current.rotation.y += delta;
  });
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={hovered ? 1.1 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={active ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
