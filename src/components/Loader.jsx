import { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

// A themed intro overlay — "lighting the lanterns" — that fades to reveal the
// village. Waits for the scene to finish loading and for a short minimum so the
// reveal always feels intentional.
export default function Loader() {
  const { progress, active } = useProgress()
  const [minTimePassed, setMinTimePassed] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setMinTimePassed(true), 1800)
    return () => clearTimeout(id)
  }, [])

  const done = minTimePassed && !active
  useEffect(() => {
    if (done) {
      const id = setTimeout(() => setGone(true), 900)
      return () => clearTimeout(id)
    }
  }, [done])

  if (gone) return null

  return (
    <div className={`village-loader ${done ? 'village-loader--done' : ''}`}>
      <div className="village-loader__lantern">提灯</div>
      <p className="village-loader__title">Entering the village</p>
      <div className="village-loader__bar">
        <span style={{ width: `${Math.min(100, Math.max(progress, minTimePassed ? 100 : progress))}%` }} />
      </div>
      <p className="village-loader__hint">日が暮れる — dusk is falling</p>
    </div>
  )
}
