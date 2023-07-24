import { useContext } from 'react'
import { useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { GameContext } from './GameContext'

export default function TexturedBackground(props) {
  const settings = useContext(GameContext)
  const {texture, position, rotation} = props
  const { viewport } = useThree()

  const texture1 = useTexture(texture)
  const z = Math.min(viewport.width, viewport.height) * 0.01
  console.log(z)

  // I've used meshPhysicalMaterial because the texture needs lights to be seen properly.
  return (
    <mesh {...props} position={[position[0], position[1] - z, position[2]]} rotation={rotation}>
      <boxGeometry attach="geometry" args={[viewport.width, viewport.height, z * 2]} />
      <meshPhysicalMaterial map={texture1} roughness={0.3} metalness={.8} wireframe={settings.wireframe} />
    </mesh>
  );
}
