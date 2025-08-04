import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'from-blue-900',
    'to-blue-700',
    'from-amber-900',
    'to-amber-700',
    'from-green-900',
    'to-green-700',
    'from-gray-900',
    'via-gray-800',
    'to-gray-900',
    'from-pink-900',
    'to-pink-700',
    'from-gray-700',
    'to-gray-500',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          white: "#fafafa",
          charcoal: "#1f1f1f",
          crimson: "#c3272b",
        },
        // Alias for easier usage
        white: "#fafafa",
        charcoal: "#1f1f1f",
        crimson: "#c3272b",
      },
      fontFamily: {
        serif: ["Hiragino Mincho ProN", "serif"],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          'sans-serif'
        ],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1f1f1f',
            a: {
              color: '#c3272b',
              '&:hover': {
                color: '#a02125',
              },
            },
            h1: {
              fontFamily: '"Hiragino Mincho ProN", serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: '"Hiragino Mincho ProN", serif',
              fontWeight: '700',
            },
            h3: {
              fontFamily: '"Hiragino Mincho ProN", serif',
              fontWeight: '700',
            },
            h4: {
              fontFamily: '"Hiragino Mincho ProN", serif',
              fontWeight: '700',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        invert: {
          css: {
            color: '#fafafa',
            a: {
              color: '#c3272b',
              '&:hover': {
                color: '#e63946',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;