import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FDFCFB',
          dark: '#1A1916',
        },
        ink: {
          DEFAULT: 'rgba(29, 29, 31, 0.92)',
          dark: 'rgba(232, 226, 217, 0.92)',
        },
        scholar: {
          gold: '#C5A028',
          goldDark: '#D4B040',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Charter', 'Georgia', 'serif'],
        sans: ['"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [typography],
};