import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { palette } from './palette'

// Lily pads floating on the pond, a few with a small glowing blossom.
function LilyPad({ position, flower }) {
  return (
    <group position={position}>
      <mesh rotation-x={-Math.PI / 2}>
        <circleGeometry args={[0.55, 14]} />
        <meshStandardMaterial color={palette.pine} roughness={1} side={THREE.DoubleSide} />
      </mesh>
      {flower && (
        <mesh position={[0, 0.12, 0]}>
          <icosahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial
            color={palette.blossom}
            emissive={palette.blossom}
            emissiveIntensity={0.4}
            flatShading
          />
        </mesh>
      )}
    </group>
  )
}

// A floating paper lantern set adrift on the water (toro nagashi). Glows, bobs
// and slowly circles — and reflects in the pond's mirror material.
function WaterLantern({ center, radius, angle0, speed, phase }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    const a = angle0 + t * speed
    if (!ref.current) return
    ref.current.position.set(
      center[0] + Math.cos(a) * radius,
      0.22 + Math.sin(t * 1.1 + phase) * 0.05,
      center[2] + Math.sin(a) * radius
    )
    ref.current.rotation.y = a
  })
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color={palette.lantern}
          emissive={palette.lantern}
          emissiveIntensity={2.4}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.58, 0.06, 0.58]} />
        <meshStandardMaterial color="#3a2b22" roughness={0.9} />
      </mesh>
    </group>
  )
}

// Pond is centred near [-8, 0, -3] (see Water.jsx). Everything here stays well
// inside that radius so it reads as sitting on the water.
export default function PondLife({ center = [-8, 0.06, -3] }) {
  const pads = useMemo(
    () =>
      Array.from({ length: 9 }, () => {
        const a = Math.random() * Math.PI * 2
        const r = Math.random() * 8.5
        return {
          position: [center[0] + Math.cos(a) * r, 0.06, center[2] + Math.sin(a) * r],
          flower: Math.random() > 0.5,
        }
      }),
    [center]
  )
  return (
    <group>
      {pads.map((p, i) => (
        <LilyPad key={i} position={p.position} flower={p.flower} />
      ))}
      <WaterLantern center={center} radius={3.5} angle0={0} speed={0.05} phase={0} />
      <WaterLantern center={center} radius={5.5} angle0={2.2} speed={0.04} phase={1.5} />
      <WaterLantern center={center} radius={2.2} angle0={4.1} speed={0.06} phase={3} />
    </group>
  )
}
