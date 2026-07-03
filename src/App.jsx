import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, Preload } from '@react-three/drei'
import Experience from './three/Experience'
import Effects from './three/Effects'
import Overlay from './components/Overlay'
import Loader from './components/Loader'
import { computeScrollProgress } from './three/scrollStore'

// The 3D village is a FIXED full-screen canvas behind the page. The portfolio
// content scrolls normally on top of it, and the camera follows the document's
// scroll progress. This makes the layout resilient at any screen size — tall
// content simply takes more scroll, nothing is locked to a single viewport.
export default function App() {
  useEffect(() => {
    computeScrollProgress()
    const onScroll = () => computeScrollProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <div className="canvas-fixed">
        <Canvas
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.75]}
          camera={{ position: [1, 3.6, 34], fov: 50, near: 0.1, far: 600 }}
        >
          <Suspense fallback={null}>
            <Experience />
            <Effects />
            <Preload all />
          </Suspense>
          <AdaptiveDpr pixelated />
        </Canvas>
      </div>

      <main className="content">
        <Overlay />
      </main>

      <Loader />
    </>
  )
}
