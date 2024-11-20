/** @type {import('tailwindcss').Config} */

import path from 'path'
import daisyui from 'daisyui'

export default {
  content: [
    path.resolve(__dirname, '../index.html'),
    path.resolve(__dirname, '../src/**/*.{vue,js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [daisyui],
}
