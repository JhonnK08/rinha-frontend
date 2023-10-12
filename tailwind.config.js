import defaultConfig from 'tailwindcss/defaultConfig';
import * as tokens from './src/tokens';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: tokens.colors,
    fontFamily: {
      sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
      mono: defaultConfig.theme.fontFamily.mono
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    }
  },
  plugins: [],
}

