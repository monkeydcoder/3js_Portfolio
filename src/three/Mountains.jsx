import { useMemo } from 'react'
import { palette } from './palette'

// A distant ring of hazy low-poly mountains framing the village. Fog fades
// them into the dusk so they read as far-off silhouettes.
export default function Mountains() {
  const peaks = useMemo(() => {
    const arr = []
    const count = 22
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2
      const r = 75 + Math.random() * 35
      arr.push({
        position: [Math.cos(a) * r, -2, Math.sin(a) * r],
        h: 18 + Math.random() * 26,
        rad: 14 + Math.random() * 12,
        rot: Math.random() * Math.PI,
      })
    }
    return arr
  }, [])

  return (
    <group>
      {peaks.map((p, i) => (
        <mesh key={i} position={p.position} rotation={[0, p.rot, 0]}>
          <coneGeometry args={[p.rad, p.h, 5]} />
          <meshStandardMaterial color={palette.mountain} roughness={1} flatShading />
        </mesh>
      ))}
    </group>
  )
}
