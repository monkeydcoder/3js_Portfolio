import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// A single low-poly bird: two wings that flap. Kept as a dark silhouette so it
// reads against the dusk sky (very Ghibli).
function Bird({ offset = [0, 0, 0], phase = 0 }) {
  const left = useRef()
  const right = useRef()
  useFrame((state) => {
    const f = Math.sin(state.clock.elapsedTime * 7 + phase) * 0.7
    if (left.current) left.current.rotation.z = 0.25 + f
    if (right.current) right.current.rotation.z = -0.25 - f
  })
  const wingMat = (
    <meshStandardMaterial color="#211c33" roughness={1} side={THREE.DoubleSide} />
  )
  return (
    <group position={offset}>
      <group ref={left}>
        <mesh position={[-0.35, 0, 0]}>
          <boxGeometry args={[0.7, 0.05, 0.16]} />
          {wingMat}
        </mesh>
      </group>
      <group ref={right}>
        <mesh position={[0.35, 0, 0]}>
          <boxGeometry args={[0.7, 0.05, 0.16]} />
          {wingMat}
        </mesh>
      </group>
    </group>
  )
}

// A loose V-formation flock drifting slowly across the sky and wrapping around.
export default function Birds({ count = 7 }) {
  const flock = useRef()
  const birds = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const k = i - (count - 1) / 2
        return {
          offset: [k * 1.5, -Math.abs(k) * 0.6, (i % 2) * 0.6],
          phase: i * 0.6,
          scale: 0.9 + Math.random() * 0.4,
        }
      }),
    [count]
  )

  useFrame((state, delta) => {
    if (!flock.current) return
    flock.current.position.x -= delta * 3.2
    if (flock.current.position.x < -70) flock.current.position.x = 70
    flock.current.position.y = 27 + Math.sin(state.clock.elapsedTime * 0.25) * 2
  })

  return (
    <group ref={flock} position={[70, 27, -34]}>
      {birds.map((b, i) => (
        <group key={i} scale={b.scale}>
          <Bird offset={b.offset} phase={b.phase} />
        </group>
      ))}
    </group>
  )
}
