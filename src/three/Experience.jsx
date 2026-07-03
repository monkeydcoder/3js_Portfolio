import { Stars, Sparkles } from '@react-three/drei'
import { palette } from './palette'
import GradientSky from './GradientSky'
import Terrain from './Terrain'
import Water from './Water'
import Torii from './Torii'
import Lanterns from './Lanterns'
import Trees from './Trees'
import Houses from './Houses'
import Mountains from './Mountains'
import Petals from './Petals'
import Birds from './Birds'
import ShootingStars from './ShootingStars'
import PondLife from './PondLife'
import Pagoda from './Pagoda'
import CameraRig from './CameraRig'

// The full village scene: atmosphere, lighting and every placed element.
export default function Experience() {
  return (
    <>
      <color attach="background" args={[palette.skyTop]} />
      <fogExp2 attach="fog" args={[palette.fog, 0.0135]} />

      {/* ── Lighting ──────────────────────────────────────── */}
      <hemisphereLight args={[palette.skyLow, palette.grassDark, 0.7]} />
      <ambientLight intensity={0.3} />
      {/* low warm "sunset" key light */}
      <directionalLight position={[-26, 14, 18]} intensity={1.4} color={palette.skyLow} />
      {/* cool fill from the opposite side */}
      <directionalLight position={[20, 10, -20]} intensity={0.4} color={palette.skyMid} />
      {/* warm bounce along the path */}
      <pointLight position={[0, 4, 10]} intensity={18} distance={26} decay={2} color={palette.lantern} />
      <pointLight position={[2, 4, -6]} intensity={16} distance={24} decay={2} color={palette.lantern} />
      <pointLight position={[-6, 3, -2]} intensity={14} distance={22} decay={2} color={palette.lanternHot} />

      {/* ── Sky elements ──────────────────────────────────── */}
      <GradientSky />
      <Stars radius={220} depth={70} count={1100} factor={5} saturation={0} fade speed={0.4} />
      {/* moon */}
      <mesh position={[44, 56, -90]}>
        <sphereGeometry args={[7, 32, 32]} />
        <meshStandardMaterial color={palette.moon} emissive={palette.moon} emissiveIntensity={1.6} toneMapped={false} />
      </mesh>
      {/* a drifting flock of birds + the occasional shooting star */}
      <Birds />
      <ShootingStars />

      {/* ── The village ───────────────────────────────────── */}
      <Terrain />
      <Water />
      <Mountains />
      <Pagoda />
      <Torii position={[0, 0, 18]} />
      <Houses />
      <Trees />
      <Lanterns />
      <PondLife />
      <Petals />

      {/* fireflies drifting low over the village */}
      <Sparkles count={140} scale={[70, 10, 70]} position={[0, 4, 0]} size={4} speed={0.3} color={palette.firefly} noise={1.2} />

      <CameraRig />
    </>
  )
}
