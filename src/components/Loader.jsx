import React, { useRef } from "react"
import { useThree, useFrame } from "@react-three/fiber"

export default function Loader() {
  const { viewport } = useThree()
  // viewport = canvas in 3d units (meters)

  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.rotation.z += delta;
  })

  return (
    <mesh ref={ref} scale={[15,15,15]} castShadow>
      <dodecahedronGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
