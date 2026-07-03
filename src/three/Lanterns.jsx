import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { palette } from './palette'

// A single glowing paper lantern. High emissive so the bloom pass makes it
// genuinely glow against the dusk.
function Lantern({ scale = 1, color = palette.lantern }) {
  return (
    <group scale={scale}>
      {/* glowing body */}
      <mesh scale={[1, 1.25, 1]}>
        <sphereGeometry args={[0.5, 20, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2.6}
          roughness={0.5}
          toneMapped={false}
        />
      </mesh>
      {/* dark caps top & bottom */}
      <mesh position={[0, 0.62, 0]}>
        <cylinderGeometry args={[0.18, 0.26, 0.16, 12]} />
        <meshStandardMaterial color="#3a2b22" roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.62, 0]}>
        <cylinderGeometry args={[0.2, 0.14, 0.14, 12]} />
        <meshStandardMaterial color="#3a2b22" roughness={0.8} />
      </mesh>
    </group>
  )
}

// Lanterns mounted on wooden poles lining the path into the village.
function PoleLantern({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 2.8, 8]} />
        <meshStandardMaterial color="#4a3a2c" roughness={0.9} />
      </mesh>
      <group position={[0, 3.0, 0]}>
        <Lantern scale={0.8} />
      </group>
    </group>
  )
}

// A drifting sky full of floating lanterns rising slowly and swaying — the
// signature peaceful-village moment.
function FloatingLanterns({ count = 26 }) {
  const group = useRef()
  const data = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 70,
        y: Math.random() * 40 - 5,
        z: -10 - Math.random() * 70,
        speed: 0.25 + Math.random() * 0.4,
        swayAmp: 0.4 + Math.random() * 0.8,
        swayFreq: 0.3 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        scale: 0.7 + Math.random() * 0.9,
      })),
    [count]
  )

  useFrame((state, delta) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.children.forEach((child, i) => {
      const d = data[i]
      child.position.y += d.speed * delta
      if (child.position.y > 38) child.position.y = -6 // wrap back down
      child.position.x = d.x + Math.sin(t * d.swayFreq + d.phase) * d.swayAmp
      child.rotation.z = Math.sin(t * d.swayFreq + d.phase) * 0.15
    })
  })

  return (
    <group ref={group}>
      {data.map((d, i) => (
        <group key={i} position={[d.x, d.y, d.z]}>
          <Lantern scale={d.scale} color={i % 4 === 0 ? palette.lanternHot : palette.lantern} />
        </group>
      ))}
    </group>
  )
}

export default function Lanterns() {
  // Poles alternate down both sides of the path corridor.
  const poles = useMemo(() => {
    const arr = []
    for (let z = 14; z > -12; z -= 5) {
      arr.push([-3.2, 0, z])
      arr.push([3.2, 0, z - 2.5])
    }
    return arr
  }, [])

  return (
    <group>
      {poles.map((p, i) => (
        <PoleLantern key={i} position={p} />
      ))}
      <FloatingLanterns />
    </group>
  )
}
