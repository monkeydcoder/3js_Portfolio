// Bridges native document scroll → the R3F render loop. App writes the current
// scroll progress (0..1) here on scroll; CameraRig reads + damps it each frame.
// Using a plain module object keeps it outside React state so it never triggers
// re-renders.
export const scrollStore = { progress: 0 }

export function computeScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  scrollStore.progress = max > 0 ? window.scrollY / max : 0
  return scrollStore.progress
}
