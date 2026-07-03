import { palette } from './palette'

// A cosy low-poly cottage with a hipped roof and warm glowing windows.
function House({ position = [0, 0, 0], rotation = 0, scale = 1 }) {
  const w = 3
  const h = 2.2
  const d = 3.4
  return (
    <group position={position} rotation={[0, rotation, 0]} scale={scale}>
      {/* body */}
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={palette.house} roughness={0.9} flatShading />
      </mesh>
      {/* hipped roof (4-sided pyramid with overhang) */}
      <mesh position={[0, h + 0.9, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[w * 0.92, 1.8, 4]} />
        <meshStandardMaterial color={palette.houseRoof} roughness={0.85} flatShading />
      </mesh>
      {/* glowing windows on the front face */}
      {[-0.8, 0.8].map((x) => (
        <mesh key={x} position={[x, h * 0.5, d / 2 + 0.01]}>
          <planeGeometry args={[0.7, 0.8]} />
          <meshStandardMaterial
            color={palette.window}
            emissive={palette.window}
            emissiveIntensity={2.2}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* door */}
      <mesh position={[0, h * 0.35, d / 2 + 0.01]}>
        <planeGeometry args={[0.7, 1.3]} />
        <meshStandardMaterial color="#3a2b22" roughness={0.9} />
      </mesh>
    </group>
  )
}

export default function Houses() {
  const houses = [
    { position: [9, 0, 8], rotation: -0.6, scale: 1.1 },
    { position: [12, 0, 3], rotation: -0.9, scale: 1.0 },
    { position: [10.5, 0, -3], rotation: -1.2, scale: 1.2 },
    { position: [-10, 0, 9], rotation: 0.7, scale: 1.1 },
    { position: [-12.5, 0, 2], rotation: 1.0, scale: 1.0 },
    { position: [-11, 0, -6], rotation: 1.3, scale: 1.15 },
  ]
  return (
    <group>
      {houses.map((h, i) => (
        <House key={i} {...h} />
      ))}
    </group>
  )
}
