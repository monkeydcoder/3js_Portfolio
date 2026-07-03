import { useMemo } from 'react'
import * as THREE from 'three'
import { palette } from './palette'

// Rolling low-poly grass hills built from a displaced plane. A gentle layered
// sine "noise" keeps it organic without any external assets, and vertex colours
// darken the dips so it reads as soft dusk terrain.
export default function Terrain() {
  const geometry = useMemo(() => {
    const size = 320
    const seg = 160
    const geo = new THREE.PlaneGeometry(size, size, seg, seg)
    geo.rotateX(-Math.PI / 2)

    const pos = geo.attributes.position
    const grass = new THREE.Color(palette.grass)
    const grassDark = new THREE.Color(palette.grassDark)
    const colors = []

    const height = (x, z) => {
      // keep a flat-ish corridor where the camera travels (near x=0)
      const corridor = Math.exp(-(x * x) / 60) * 0.6
      const rolling =
        Math.sin(x * 0.08) * 1.6 +
        Math.cos(z * 0.07) * 1.8 +
        Math.sin((x + z) * 0.05) * 1.2
      const ridge = Math.sin(x * 0.02 + z * 0.03) * 3.5
      const dist = Math.sqrt(x * x + z * z)
      const rise = Math.max(0, (dist - 40)) * 0.12 // hills grow toward the edges
      return rolling + ridge + rise - corridor * 3.0
    }

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const z = pos.getZ(i)
      const y = height(x, z)
      pos.setY(i, y)
      const t = THREE.MathUtils.clamp((y + 4) / 10, 0, 1)
      const c = grassDark.clone().lerp(grass, t)
      colors.push(c.r, c.g, c.b)
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    geo.computeVertexNormals()
    return geo
  }, [])

  return (
    <mesh geometry={geometry} position={[0, -0.4, 0]} receiveShadow>
      <meshStandardMaterial vertexColors flatShading roughness={1} metalness={0} />
    </mesh>
  )
}
