/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Palette 1: The Power & Authority Palette (Elite Athletics / Powerlifting)
        power: {
          black: '#000000',
          charcoal: '#1D2320',
          crimson: '#B00C11',
          vibrant: '#CB4928',
        },
        // Palette 2: The Modern Sport & Speed Palette (Field Athletes / Running)
        speed: {
          navy: '#0D2047',
          electric: '#4758D6',
          volt: '#AEE710',
          slate: '#64748B',
        },
        // Palette 3: The Premium Longevity Palette (Gen-Pop / Executives / Tactical)
        longevity: {
          white: '#FFFFFF',
          charcoal: '#1F2937',
          forest: '#6A7E59',
          gold: '#FFC107',
        },
        // Harmonized brand & UI tokens
        brand: {
          50: '#f0f3ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4758D6', // Electric Blue
          600: '#3746ba',
          700: '#2b379b',
          800: '#1e2670',
          900: '#0D2047', // Midnight Navy Blue
          950: '#060f23',
        },
        athletic: {
          crimson: '#B00C11',
          crimsonHover: '#8f080c',
          vibrantRed: '#CB4928',
          navy: '#0D2047',
          electric: '#4758D6',
          electricHover: '#3746ba',
          volt: '#AEE710',
          voltHover: '#98cc0d',
          forest: '#6A7E59',
          forestHover: '#566747',
          gold: '#FFC107',
          goldHover: '#e0a800',
          charcoal: '#1D2320',
          deepBlack: '#000000',
          slate: '#64748B',
          softCharcoal: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Poppins', 'sans-serif'],
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        normal: '0',
      }
    },
  },
  plugins: [],
}
