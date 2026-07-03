import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'

// Post-processing is what sells the dusk mood: bloom makes the lanterns, windows
// and moon glow, and the vignette gently frames the scene.
export default function Effects() {
  return (
    <EffectComposer disableNormalPass multisampling={4}>
      <Bloom
        intensity={1.15}
        luminanceThreshold={0.35}
        luminanceSmoothing={0.4}
        mipmapBlur
        radius={0.75}
      />
      <Vignette eskil={false} offset={0.22} darkness={0.82} />
    </EffectComposer>
  )
}
