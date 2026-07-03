import { useMemo } from 'react'
import * as THREE from 'three'
import { palette } from './palette'

// Large inverted sphere with a vertical colour gradient: a dusk sky going from
// a warm sunset glow at the horizon up to deep indigo overhead. No fog so it
// stays crisp behind the foggy village.
export default function GradientSky() {
  const uniforms = useMemo(
    () => ({
      topColor: { value: new THREE.Color(palette.skyTop) },
      midColor: { value: new THREE.Color(palette.skyMid) },
      lowColor: { value: new THREE.Color(palette.skyLow) },
      offset: { value: 0.12 },
      exponent: { value: 0.9 },
    }),
    []
  )

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[400, 32, 32]} />
      <shaderMaterial
        side={THREE.BackSide}
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={`
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec3 vDir;
          uniform vec3 topColor;
          uniform vec3 midColor;
          uniform vec3 lowColor;
          uniform float offset;
          uniform float exponent;
          void main() {
            float h = vDir.y + offset;
            vec3 col;
            if (h > 0.0) {
              col = mix(midColor, topColor, pow(clamp(h, 0.0, 1.0), exponent));
            } else {
              col = mix(midColor, lowColor, pow(clamp(-h * 2.2, 0.0, 1.0), 0.8));
            }
            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  )
}
