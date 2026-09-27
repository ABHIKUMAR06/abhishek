import { profile } from '../data/content'

export function Footer() {
  // Generous bottom padding keeps footer text clear of the fixed WhatsApp button.
  return (
    <footer className="border-t border-white/8 pt-8 pb-24">
      <div className="shell flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Built with React, Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
