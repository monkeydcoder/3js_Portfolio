import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiFileText,
  FiVideo,
} from 'react-icons/fi'
import { accent } from '../three/palette'
import {
  profile,
  social,
  projects,
  education,
  anime,
  hobbies,
  travel,
} from '../data/site'

const Grad = ({ children, className = '' }) => (
  <span
    className={className}
    style={{
      backgroundImage: accent.gradient,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    }}
  >
    {children}
  </span>
)

const Kicker = ({ jp, en }) => (
  <div className="mb-3 flex items-center gap-3 text-readable">
    <span className="font-jp text-sm tracking-[0.3em] text-amber-200/90">{jp}</span>
    <span className="h-px w-10 bg-amber-200/50" />
    <span className="text-xs uppercase tracking-[0.25em] text-white/70">{en}</span>
  </div>
)

// One full-height block. `min-h-screen` lets a section grow taller than the
// viewport on small screens instead of clipping, so all text stays visible.
const Section = ({ id, place = 'center', children }) => {
  const align =
    place === 'left'
      ? 'justify-start text-left'
      : place === 'right'
      ? 'justify-end text-left'
      : 'justify-center text-center'
  return (
    <section
      id={id}
      className={`flex min-h-screen w-full items-center px-6 py-24 sm:px-10 lg:px-16 ${align}`}
    >
      <div className="panel">{children}</div>
    </section>
  )
}

export default function Overlay() {
  return (
    <div className="overlay-root">
      {/* ── Hero ─────────────────────────────────────────── */}
      <Section id="home" place="center">
        <div className="relative max-w-2xl">
          <div className="hero-scrim" aria-hidden="true" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-sm text-amber-100 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_3px_rgba(255,200,120,0.7)]" />
              Available for research & collaboration
            </span>
            <p className="mt-7 font-jp text-base tracking-[0.4em] text-amber-200/90 text-readable">
              {profile.nameJP}
            </p>
            <h1 className="mt-2 font-display text-5xl font-bold leading-tight text-white text-readable sm:text-6xl md:text-7xl">
              {profile.name.split(' ')[0]} <Grad>{profile.name.split(' ')[1]}</Grad>
            </h1>
            <p className="mt-4 font-display text-xl text-white text-readable sm:text-2xl">
              {profile.role} <span className="text-white/50">·</span>{' '}
              <span className="text-amber-200">{profile.location}</span>
            </p>
            <p className="mx-auto mt-5 max-w-xl text-balance text-white/85 text-readable sm:text-lg">
              {profile.tagline}
            </p>
            <div className="mt-9 flex items-center justify-center gap-5 text-xl text-white">
              <a className="link-icon text-readable" href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a className="link-icon text-readable" href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a className="link-icon text-readable" href={`mailto:${social.email}`} aria-label="Email"><FiMail /></a>
              {profile.resumeUrl && (
                <a
                  className="link-icon text-readable inline-flex items-center gap-1.5 rounded-full border border-amber-200/40 bg-black/30 px-3 py-1 text-sm font-medium text-amber-100 backdrop-blur-md hover:border-amber-200/80"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Resume"
                >
                  <FiFileText /> Resume
                </a>
              )}
            </div>
            <p className="mt-12 flex flex-col items-center gap-1 text-xs uppercase tracking-[0.3em] text-white/90 text-readable">
              <span>Scroll to wander · 探索</span>
              <FiArrowDown className="animate-bounce text-lg text-amber-200" />
            </p>
          </div>
        </div>
      </Section>

      {/* ── About ────────────────────────────────────────── */}
      <Section id="about" place="left">
        <div className="card max-w-lg lg:max-w-2xl">
          <Kicker jp="私について" en="About" />
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
            A researcher far <Grad>from home</Grad>
          </h2>
          {profile.bio.slice(0, 2).map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-relaxed text-white/80 lg:text-[15px]">{p}</p>
          ))}
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ['Based in', 'Tokyo, Japan'],
              ['Scholarship', 'MEXT · Govt. of Japan'],
              ['Focus', 'Reinforcement learning · LLM'],
              ['Currently', "Master's @ Science Tokyo"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2">
                <p className="text-[10px] uppercase tracking-wider text-amber-200/80">{k}</p>
                <p className="text-sm text-white/90">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Selected Work ────────────────────────────────── */}
      <Section id="work" place="left">
        <div className="w-full max-w-3xl lg:max-w-5xl">
          <Kicker jp="仕事" en="Selected Work" />
          <h2 className="mb-6 font-display text-3xl font-bold text-white text-readable sm:text-4xl lg:text-5xl">
            Things I've <Grad>built</Grad>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {projects.map((p) => (
              <div key={p.title} className="card group flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white lg:text-xl">{p.title}</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-amber-200/80">{p.subtitle}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 text-white/70">
                    {p.demo && (
                      <a className="link-icon" href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} — watch demo`} title="Watch demo">
                        <FiVideo />
                      </a>
                    )}
                    {p.link && (
                      <a className="link-icon" href={p.link} target="_blank" rel="noreferrer" aria-label={`${p.title} — source code`} title="Source code">
                        <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75 lg:text-[15px]">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-white/75">{t}</span>
                  ))}
                </div>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber-200 transition-colors hover:text-amber-100"
                  >
                    <FiVideo /> Watch demo
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Beyond Code ──────────────────────────────────── */}
      <Section id="beyond" place="right">
        <div className="w-full max-w-2xl lg:max-w-3xl">
          <Kicker jp="コード以外" en="Beyond Code" />
          <h2 className="mb-6 font-display text-3xl font-bold text-white text-readable sm:text-4xl lg:text-5xl">
            When the screen <Grad>switches off</Grad>
          </h2>

          <div className="card mb-4">
            <p className="mb-2 font-jp text-sm text-pink-200/90">アニメ · Anime I love</p>
            <div className="flex flex-wrap gap-2">
              {anime.map((a) => (
                <span key={a.title} className="chip-warm">
                  {a.title} <span className="font-jp text-pink-200/80">{a.jp}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="card mb-4">
            <p className="mb-2 font-jp text-sm text-amber-200/90">趣味 · In motion</p>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <span key={h.name} className="chip-warm">{h.emoji} {h.name}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <p className="mb-2 font-jp text-sm text-amber-200/90">旅 · Places I've wandered</p>
            <ul className="space-y-1.5 text-sm text-white/80 lg:text-[15px]">
              {travel.map((t) => (
                <li key={t.place}>
                  <span className="font-medium text-white">{t.place}</span>
                  <span className="text-white/55"> — {t.region}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-xs text-white/60 text-readable">
            <span className="font-jp text-amber-200/80">学歴</span> · Currently a
            Master's student at {education[0].school} (MEXT scholar).
          </p>
        </div>
      </Section>

      {/* ── Contact ──────────────────────────────────────── */}
      <Section id="contact" place="center">
        <div className="card max-w-xl text-center lg:max-w-2xl">
          <Kicker jp="連絡" en="Let's talk" />
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Drop me a <Grad>message</Grad>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/75 lg:text-lg">
            Research, a project, or just to talk anime and mountains — my inbox is open.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${social.email}`} className="btn-glow">
              <FiMail /> Say Hello
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <FiFileText /> Resume
              </a>
            )}
            <a href={social.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <FiGithub /> GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
          <p className="mt-10 text-xs text-white/50">
            © {new Date().getFullYear()} {profile.name} · サティヤム — built with React, Three.js & a quiet dusk in Tokyo.
          </p>
        </div>
      </Section>
    </div>
  )
}
