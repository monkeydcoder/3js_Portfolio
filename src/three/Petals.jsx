import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { palette } from './palette'

// Drifting cherry-blossom petals. A GPU points cloud that gently falls and
// sways, wrapping back to the top — cheap and atmospheric.
export default function Petals({ count = 320, area = 70 }) {
  const ref = useRef()

  const { positions, speeds, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    const phases = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * area
      positions[i * 3 + 1] = Math.random() * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * area - 10
      speeds[i] = 0.6 + Math.random() * 1.0
      phases[i] = Math.random() * Math.PI * 2
    }
    return { positions, speeds, phases }
  }, [count, area])

  useFrame((state, delta) => {
    if (!ref.current) return
    const arr = ref.current.geometry.attributes.position.array
    const t = state.clock.elapsedTime
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] -= speeds[i] * delta // fall
      arr[i * 3] += Math.sin(t * 0.6 + phases[i]) * delta * 0.6 // sway
      if (arr[i * 3 + 1] < -1) {
        arr[i * 3 + 1] = 30
        arr[i * 3] = (Math.random() - 0.5) * area
        arr[i * 3 + 2] = (Math.random() - 0.5) * area - 10
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={palette.petal}
        size={0.35}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  )
}
