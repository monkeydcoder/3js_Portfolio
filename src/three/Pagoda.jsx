import { palette } from './palette'

// A distant multi-tier pagoda standing on a far rise — a landmark that adds
// depth and a clear sense of place. Kept dark and hazed by the fog, with a warm
// glowing top so it still reads at dusk.
function Tier({ y, w, roofW }) {
  return (
    <group position={[0, y, 0]}>
      <mesh>
        <boxGeometry args={[w, 1.2, w]} />
        <meshStandardMaterial color={palette.mountain} roughness={1} flatShading />
      </mesh>
      <mesh position={[0, 0.95, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[roofW, 0.85, 4]} />
        <meshStandardMaterial color="#2a2336" roughness={1} flatShading />
      </mesh>
    </group>
  )
}

export default function Pagoda({ position = [34, 1.5, -42], scale = 2.1 }) {
  const tiers = [
    { y: 1.0, w: 3.0, roofW: 3.0 },
    { y: 3.1, w: 2.5, roofW: 2.6 },
    { y: 5.0, w: 2.0, roofW: 2.2 },
    { y: 6.7, w: 1.5, roofW: 1.8 },
  ]
  return (
    <group position={position} scale={scale}>
      {tiers.map((t, i) => (
        <Tier key={i} {...t} />
      ))}
      {/* finial spire + warm glow at the top */}
      <mesh position={[0, 8.3, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 1.3, 6]} />
        <meshStandardMaterial
          color={palette.lanternHot}
          emissive={palette.lanternHot}
          emissiveIntensity={1.6}
          toneMapped={false}
        />
      </mesh>
      {/* a lit window on the top tier */}
      <mesh position={[0, 6.7, 0.76]}>
        <planeGeometry args={[0.6, 0.7]} />
        <meshStandardMaterial
          color={palette.window}
          emissive={palette.window}
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}
