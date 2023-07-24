import { useContext, useMemo, useState, useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useDrag, useGesture } from '@use-gesture/react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useTexture } from '@react-three/drei'
import { GameContext } from './GameContext'
import { Vector3 } from 'three'

export default function TexturedModel(props) {
  const settings = useContext(GameContext)
  const {
    model,
    texture,
    position,
    rotation,
    move,
    ...rest } = props;
  const mesh = useRef()
  const [ currentPosition, setCurrentPosition ] = useState(position)
  const { camera, viewport } = useThree()
  const obj = useLoader(OBJLoader, model)
  const texture1 = useTexture(texture)
  const geometry = useMemo(() => {
    let g
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c
        g = _c.geometry
      }
    });
    return g
  }, [obj])

  const bind = useDrag(
      (status) => {
        if (move) {
          const [currentX, currentY, currentZ] = currentPosition
          let [offsetX, offsetY] = status.delta
          // offsetX /= viewport.width
          // offsetY /= viewport.height
          const newX = currentX + offsetX
          const newZ = currentZ + offsetY
          if (status.down){
            const newY = status.first ? currentY + 5 : currentY
            setCurrentPosition([newX, newY, newZ])
            camera.lookAt(new Vector3(newX, newY, newZ))
            camera.up = new Vector3(0, 1, 0);
            camera.updateProjectionMatrix()
          }
          else {
            setCurrentPosition([currentX, currentY - 5, currentZ])
          }
        }
      },
      { pointerEvents: true }
  )

  // I've used meshPhysicalMaterial because the texture needs lights to be seen properly.
  return (
    <mesh
      position={currentPosition}
      geometry={geometry}
      rotation={rotation}
      {...bind()}
      ref={mesh}
      >
        <meshPhysicalMaterial
          map={texture1}
          roughness={0.3}
          metalness={.8}
          wireframe={settings.wireframe} />
    </mesh>
  );
}
