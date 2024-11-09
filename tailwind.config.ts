/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss'

const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('daisyui'),
    addDynamicIconSelectors(),
  ],
} satisfies Config
