import { useMemo } from 'react'
import { palette } from './palette'

function Trunk({ height = 2.4, radius = 0.28 }) {
  return (
    <mesh position={[0, height / 2, 0]} castShadow>
      <cylinderGeometry args={[radius * 0.7, radius, height, 8]} />
      <meshStandardMaterial color="#5b4334" roughness={0.95} flatShading />
    </mesh>
  )
}

// Low-poly cherry blossom: a trunk topped with clustered pink blobs.
function CherryTree({ position = [0, 0, 0], scale = 1 }) {
  const blobs = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        p: [(Math.random() - 0.5) * 2.4, 2.6 + Math.random() * 1.6, (Math.random() - 0.5) * 2.4],
        s: 1 + Math.random() * 0.9,
        deep: Math.random() > 0.6,
      })),
    []
  )
  return (
    <group position={position} scale={scale}>
      <Trunk height={2.8} radius={0.3} />
      {blobs.map((b, i) => (
        <mesh key={i} position={b.p} scale={b.s} castShadow>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial
            color={b.deep ? palette.blossomDeep : palette.blossom}
            roughness={0.85}
            flatShading
            emissive={palette.blossom}
            emissiveIntensity={0.12}
          />
        </mesh>
      ))}
    </group>
  )
}

// Low-poly pine: stacked cones.
function PineTree({ position = [0, 0, 0], scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <Trunk height={1.6} radius={0.22} />
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 2 + i * 1.1, 0]} castShadow>
          <coneGeometry args={[1.4 - i * 0.32, 1.8, 8]} />
          <meshStandardMaterial color={palette.pine} roughness={0.9} flatShading />
        </mesh>
      ))}
    </group>
  )
}

export default function Trees() {
  // Hand-placed so nothing blocks the camera corridor (|x| > ~5).
  const cherries = [
    { position: [-12, 0, 6], scale: 1.4 },
    { position: [-14, 0, -4], scale: 1.7 },
    { position: [11, 0, -2], scale: 1.5 },
    { position: [-9, 0, -14], scale: 1.3 },
    { position: [13, 0, 10], scale: 1.2 },
    { position: [6, 0, -18], scale: 1.6 },
  ]
  const pines = [
    { position: [16, 0, 2], scale: 1.6 },
    { position: [-18, 0, 12], scale: 1.9 },
    { position: [18, 0, -10], scale: 1.7 },
    { position: [-16, 0, -16], scale: 1.5 },
    { position: [9, 0, 16], scale: 1.4 },
    { position: [-7, 0, 16], scale: 1.3 },
    { position: [20, 0, -20], scale: 2.0 },
  ]
  return (
    <group>
      {cherries.map((c, i) => (
        <CherryTree key={`c${i}`} {...c} />
      ))}
      {pines.map((p, i) => (
        <PineTree key={`p${i}`} {...p} />
      ))}
    </group>
  )
}
