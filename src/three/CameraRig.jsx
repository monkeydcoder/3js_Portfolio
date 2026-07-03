import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollStore } from './scrollStore'

// Scroll-driven camera that glides through the village along a smooth spline.
// Two parallel curves keep the position and the look-at target independent so
// the framing always points at something interesting (torii, lanterns, pond).
// One waypoint per content section: Hero, About, Work, Beyond Code, Contact.
const posPoints = [
  new THREE.Vector3(1, 3.6, 34),   // Hero — facing the torii
  new THREE.Vector3(-3, 3.2, 24),  // About
  new THREE.Vector3(3, 3.2, 12),   // Selected Work
  new THREE.Vector3(-4, 3.6, 0),   // Beyond Code
  new THREE.Vector3(0, 7.5, -14),  // Contact — rising to overlook
]
const lookPoints = [
  new THREE.Vector3(0, 6.2, 18),
  new THREE.Vector3(3, 3.6, 12),
  new THREE.Vector3(-4, 3.4, 2),
  new THREE.Vector3(4, 4.0, -9),
  new THREE.Vector3(0, 9, -32),
]

export default function CameraRig() {
  const posCurve = useMemo(
    () => new THREE.CatmullRomCurve3(posPoints, false, 'catmullrom', 0.4),
    []
  )
  const lookCurve = useMemo(
    () => new THREE.CatmullRomCurve3(lookPoints, false, 'catmullrom', 0.4),
    []
  )
  const tmpPos = useMemo(() => new THREE.Vector3(), [])
  const tmpLook = useMemo(() => new THREE.Vector3(), [])
  const damped = useRef(0)

  useFrame((state, delta) => {
    // smoothly chase the live scroll progress (frame-rate independent)
    damped.current = THREE.MathUtils.damp(damped.current, scrollStore.progress, 3.5, delta)
    const t = THREE.MathUtils.clamp(damped.current, 0, 1)

    posCurve.getPointAt(t, tmpPos)
    lookCurve.getPointAt(t, tmpLook)

    // subtle idle drift so the shot always feels alive
    const time = state.clock.elapsedTime
    tmpPos.x += Math.sin(time * 0.4) * 0.25
    tmpPos.y += Math.sin(time * 0.6) * 0.12

    state.camera.position.copy(tmpPos)
    state.camera.lookAt(tmpLook)
  })

  return null
}
