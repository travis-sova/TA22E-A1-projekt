/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'
import { dark, light } from 'daisyui/src/theming/themes'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      // animations for MyCinemas
      keyframes: {
        slideDown: {
          '0%': { transform: 'translatex(-80%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.9s ease-out',
        fadeIn: 'fadeIn 0.5s ease-in',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lighty: {
          ...light,
          'base-100': '#D9D9D9',
          'base-200': '#F5F5F5',
          'base-300': '#E0E0E0',
          primary: '#FFFFFF',
          'primary-content': '#000000',
          secondary: '#E6E6E6',
          neutral: '#E5E7EB',
          success: '#059669',
          accent: '#3B82F6',
          'accent-content': '#FFFFFF',
        },
      },
      {
        darky: {
          ...dark,
          'base-100': '#1E1E1E',
          'base-200': '#282828',
          'base-300': '#131313',
          primary: '#2E2E2E',
          'primary-content': '#E4E4E4',
          secondary: '#363636',
          neutral: '#1F1F1F',
          success: '#10B981',
          accent: '#3B82F6',
          'accent-content': '#FFFFFF',
        },
      },
    ],
  },
}
