'use client'

import { useTheme } from 'next-themes'

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="btn btn-square size-8 min-h-min text-xl"
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {
        theme === 'dark'
          ? <i className="icon-[lucide--moon]"></i>
          : <i className="icon-[lucide--sun]"></i>
      }
    </button>
  )
}
