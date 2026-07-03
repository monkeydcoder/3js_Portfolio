import { palette } from './palette'

// A classic vermilion torii gate — the gateway into the village. Built from
// simple primitives. A touch of emissive makes it catch the bloom at dusk.
export default function Torii({ position = [0, 0, 18], scale = 1 }) {
  const mat = (
    <meshStandardMaterial
      color={palette.torii}
      emissive={palette.toriiDark}
      emissiveIntensity={0.25}
      roughness={0.6}
    />
  )

  const pillarH = 8
  const gap = 7 // distance between the two pillar centres

  return (
    <group position={position} scale={scale}>
      {/* pillars */}
      {[-gap / 2, gap / 2].map((x) => (
        <mesh key={x} position={[x, pillarH / 2, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.5, pillarH, 16]} />
          {mat}
        </mesh>
      ))}

      {/* kasagi — top beam with overhang, slightly raised at the ends */}
      <group position={[0, pillarH + 0.55, 0]} rotation={[0, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[gap + 3, 0.55, 1.0]} />
          {mat}
        </mesh>
        {/* upturned tips */}
        {[-1, 1].map((s) => (
          <mesh key={s} position={[s * (gap / 2 + 1.5), 0.18, 0]} rotation={[0, 0, s * 0.18]}>
            <boxGeometry args={[1.4, 0.45, 1.0]} />
            {mat}
          </mesh>
        ))}
      </group>

      {/* shimaki — beam just under the kasagi */}
      <mesh position={[0, pillarH + 0.05, 0]} castShadow>
        <boxGeometry args={[gap + 2, 0.4, 0.8]} />
        {mat}
      </mesh>

      {/* nuki — lower tie beam */}
      <mesh position={[0, pillarH - 2.2, 0]} castShadow>
        <boxGeometry args={[gap + 1, 0.5, 0.7]} />
        {mat}
      </mesh>

      {/* gakuzuka — central plaque support */}
      <mesh position={[0, pillarH - 1.1, 0]}>
        <boxGeometry args={[0.7, 1.4, 0.4]} />
        {mat}
      </mesh>
    </group>
  )
}
