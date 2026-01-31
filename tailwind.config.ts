import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Blue - Authority, stability, protective
        brand: {
          50: '#e6edf5',
          100: '#ccdaeb',
          200: '#99b5d6',
          300: '#6690c2',
          400: '#336bad',
          500: '#003366', // Primary Brand Blue
          600: '#002952',
          700: '#001f3d',
          800: '#001529',
          900: '#000a14',
        },
        // Active Shield Blue - Modern, energetic, tech-forward (CTAs)
        shield: {
          50: '#e8eef8',
          100: '#d1ddf1',
          200: '#a3bbe3',
          300: '#7599d5',
          400: '#4777c7',
          500: '#1E4BA3', // Active Shield Blue
          600: '#183c82',
          700: '#122d62',
          800: '#0c1e41',
          900: '#060f21',
        },
        // Corporate Slate - Neutral, professional, sophisticated
        slate: {
          50: '#f4f6f7',
          100: '#e9ecef',
          200: '#d3d9df',
          300: '#bdc6cf',
          400: '#96a3af',
          500: '#708090', // Corporate Slate
          600: '#5a6673',
          700: '#434d56',
          800: '#2d333a',
          900: '#161a1d',
        },
        // Digital Frost - Clean, airy, backgrounds/accents
        frost: {
          50: '#f8fbfe',
          100: '#E3F2FD', // Digital Frost (primary)
          200: '#bbdefb',
          300: '#90caf9',
          400: '#64b5f6',
          500: '#42a5f5',
        },
        // Pure Contrast
        pure: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-frost': 'linear-gradient(to bottom, #E3F2FD, #d3d9df)',
        'gradient-brand': 'linear-gradient(135deg, #003366, #001f3d)',
        'gradient-shield': 'radial-gradient(circle at center, #1E4BA3, #003366)',
      },
    },
  },
  plugins: [],
};
export default config;
