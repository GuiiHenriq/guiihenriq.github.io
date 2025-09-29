/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      display: ['var(--font-calistoga)', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(8, 145, 178, 0.4)',
      },
    },
  },
  plugins: [],
}
