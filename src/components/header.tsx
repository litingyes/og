import SwitchTheme from '@/components/switch-theme'

export default function Header() {
  return (
    <header className="fixed inset-0 flex h-14 items-center justify-between px-6 py-4">
      <div className="flex items-end gap-2">
        <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-3xl font-bold text-transparent">OG</span>
      </div>
      <div className="flex items-end gap-2">
        <SwitchTheme />
        <a href="https://github.com/litingyes/og.git" rel="noreferrer noopener" target="_blank">
          <button type="button" className="btn btn-square size-8 min-h-min text-xl">
            <i className="icon-[line-md--github]"></i>
          </button>
        </a>
      </div>
    </header>
  )
}
