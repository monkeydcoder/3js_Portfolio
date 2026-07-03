import { MeshReflectorMaterial } from '@react-three/drei'
import { palette } from './palette'

// A calm reflective pond. MeshReflectorMaterial mirrors the dusk sky, lanterns
// and blossoms for that quiet, glassy "wow" moment as the camera passes.
export default function Water({ position = [-8, 0.02, -3], size = 26 }) {
  return (
    <mesh rotation-x={-Math.PI / 2} position={position}>
      <circleGeometry args={[size / 2, 48]} />
      <MeshReflectorMaterial
        resolution={512}
        mixBlur={1}
        mixStrength={6}
        blur={[300, 80]}
        roughness={0.85}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.2}
        color={palette.water}
        metalness={0.5}
        mirror={0.55}
      />
    </mesh>
  )
}
