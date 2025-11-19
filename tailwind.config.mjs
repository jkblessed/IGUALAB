/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: '#000000',
          green: '#00FF00',
          'green-glow': '#00FF0080',
        }
      },
      fontFamily: {
        mono: ['"VT323"', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      boxShadow: {
        'terminal-glow': '0 0 10px #00FF00, 0 0 20px #00FF0080',
      }
    },
  },
  plugins: [],
}