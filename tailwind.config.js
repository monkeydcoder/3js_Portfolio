/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#05050a',
          800: '#0a0a0f',
          700: '#101018',
          600: '#16161f',
        },
        neon: {
          cyan: '#22d3ee',
          blue: '#38bdf8',
          magenta: '#f472b6',
          pink: '#ec4899',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Sora', 'system-ui', 'sans-serif'],
        jp: ['"Zen Kaku Gothic New"', '"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34,211,238,0.35), 0 0 40px rgba(34,211,238,0.15)',
        'glow-magenta': '0 0 20px rgba(244,114,182,0.35), 0 0 40px rgba(244,114,182,0.15)',
        'glow-soft': '0 0 30px rgba(56,189,248,0.12)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'neon-gradient':
          'linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #f472b6 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
