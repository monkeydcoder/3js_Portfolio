# Satyam Sharma — Portfolio (Anime Village)

> **This was done just for fun to see Three.js in use.** A weekend experiment to
> explore what's possible with 3D on the web — and it turned into something cool.

An immersive 3D portfolio: a scroll-driven journey through a **peaceful anime
village at dusk**, inspired by Studio Ghibli. You glide past a glowing torii
gate, paper lanterns, cherry blossoms drifting petals, a reflective pond, and
warm-lit houses under a sunset-to-starry sky — each scroll stop reveals a
section of the portfolio.

Built with **React + Vite + Three.js** (React Three Fiber, drei) and
**@react-three/postprocessing** (bloom + vignette) for the glow.

## Features

- Scroll-driven camera that follows a spline path through the village
- Procedural dusk sky with custom GLSL gradient shader
- Reflective water pond with lily pads and floating toro nagashi lanterns
- Cherry blossom trees with drifting petals (320 particles)
- Animated sky lanterns, fireflies, birds in V-formation, shooting stars
- Multi-tier pagoda landmark in the distance
- Bloom + vignette post-processing for cinematic glow
- Fully responsive — works on mobile, tablet, and desktop
- 100% procedural scene (no external 3D models or textures)

## Quick Start

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing Content

All text, links, projects, anime, hobbies, and travel data live in one file:

```
src/data/site.js
```

Edit that file to update anything — the 3D scene and the overlay both read from it.

## Project Structure

```
src/
  App.jsx                 ← Fixed canvas + native scroll + HTML overlay + loader
  data/site.js            ← All content (edit here)
  components/
    Overlay.jsx           ← Scrolling HTML content (hero, about, work, …)
    Loader.jsx            ← "Entering the village" intro overlay
  three/
    Experience.jsx        ← Scene root: sky, fog, lighting, all placed elements
    CameraRig.jsx         ← Scroll-driven camera spline (CatmullRomCurve3)
    scrollStore.js        ← Bridges native scroll → R3F render loop
    Effects.jsx           ← Bloom + vignette post-processing
    GradientSky.jsx       ← Custom GLSL dusk gradient shader
    Terrain.jsx           ← Displaced plane with vertex colors
    Water.jsx             ← MeshReflectorMaterial pond
    Torii.jsx             ← Vermilion torii gate
    Lanterns.jsx          ← Pole lanterns + floating sky lanterns
    Trees.jsx             ← Cherry blossoms + pines
    Petals.jsx            ← 320 drifting petal particles
    Houses.jsx            ← Warm-lit village cottages
    Mountains.jsx         ← Distant mountain ring
    Birds.jsx             ← V-formation flock with flapping wings
    ShootingStars.jsx     ← Intermittent shooting stars with trails
    PondLife.jsx          ← Lily pads + toro nagashi water lanterns
    Pagoda.jsx            ← Multi-tier pagoda with glowing finial
    palette.js            ← Dusk colour palette
```

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | React 18 + Vite |
| 3D | Three.js, React Three Fiber, drei |
| Post-processing | @react-three/postprocessing (Bloom, Vignette) |
| Styling | Tailwind CSS |
| Animation | Framer Motion, custom GLSL shaders |
| Icons | react-icons |

## Tuning the Look

- **Colours**: `src/three/palette.js`
- **Camera path**: `posPoints` and `lookPoints` arrays in `src/three/CameraRig.jsx`
- **Glow strength**: `Bloom` props in `src/three/Effects.jsx`
- **Fog density**: `fogExp2` in `src/three/Experience.jsx`

## License

This project is for personal/educational use.
