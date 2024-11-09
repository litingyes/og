import antfu from '@antfu/eslint-config'
import next from '@next/eslint-plugin-next'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: true,
    react: true,
    plugins: {
      next,
    },
    ignores: ['./node_modules', './.next', './pnpm-lock.yaml'],
  },
  ...tailwind.configs['flat/recommended'],
)
