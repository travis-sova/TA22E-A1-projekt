/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'
import { light } from 'daisyui/src/theming/themes'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      "dark",
      {
        light: {
          ...light,
          "base-100": "#D9D9D9",
          "primary-content": "#000000",
          "primary": "#FFFFFF",
          "secondary": "#363636",
        },
      },
    ],
  },
}
