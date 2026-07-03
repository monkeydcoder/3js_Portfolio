import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Occasional shooting stars streaking through the upper night sky. Each one
// idles for a random delay, streaks across with a glowing trail (bloom picks it
// up), fades, then re-rolls a fresh trajectory.
function freshStar() {
  return {
    delay: 1.5 + Math.random() * 7,
    t: 0,
    active: false,
    start: new THREE.Vector3(
      18 + Math.random() * 44,
      34 + Math.random() * 18,
      -45 - Math.random() * 45
    ),
    dir: new THREE.Vector3(-1, -0.45, 0.12).normalize(),
    len: 18 + Math.random() * 16,
    speed: 0.7 + Math.random() * 0.6,
  }
}

export default function ShootingStars({ count = 3 }) {
  const data = useMemo(() => Array.from({ length: count }, freshStar), [count])
  const groups = useRef([])
  const tip = useMemo(() => new THREE.Vector3(), [])

  // trail tilt to align the streak with the travel direction (in the XY plane)
  const trailAngle = Math.atan2(0.45, 1)

  useFrame((state, delta) => {
    data.forEach((s, i) => {
      const g = groups.current[i]
      if (!g) return
      if (!s.active) {
        s.delay -= delta
        g.visible = false
        if (s.delay <= 0) {
          s.active = true
          s.t = 0
        }
        return
      }
      g.visible = true
      s.t += delta * s.speed
      tip.copy(s.start).addScaledVector(s.dir, s.t * s.len)
      g.position.copy(tip)
      const op = Math.sin(Math.min(s.t, 1) * Math.PI) // fade in then out
      g.children.forEach((c) => {
        if (c.material) c.material.opacity = op
      })
      if (s.t >= 1) Object.assign(s, freshStar())
    })
  })

  return (
    <group>
      {data.map((s, i) => (
        <group key={i} ref={(el) => (groups.current[i] = el)} visible={false}>
          {/* glowing head */}
          <mesh>
            <sphereGeometry args={[0.16, 8, 8]} />
            <meshBasicMaterial color="#fff6e6" transparent opacity={0} toneMapped={false} />
          </mesh>
          {/* trail, angled to point back along the path */}
          <mesh position={[1.7, 0.78, -0.2]} rotation={[0, 0, trailAngle]}>
            <boxGeometry args={[3.6, 0.07, 0.07]} />
            <meshBasicMaterial color="#ffd9a0" transparent opacity={0} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
