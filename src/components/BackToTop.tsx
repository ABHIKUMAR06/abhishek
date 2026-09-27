import { useEffect, useState } from 'react'
import { RocketIcon } from './Icons'

/** Rocket button that scrolls back to the top of the page. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [launching, setLaunching] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => {
    setLaunching(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.setTimeout(() => setLaunching(false), 700)
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-800 text-slate-200 shadow-lg shadow-black/40 transition-all duration-300 hover:border-accent-500/50 hover:bg-accent-500 hover:text-white ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <RocketIcon
        className={`h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 ${
          launching ? '-translate-y-8 scale-90 opacity-0' : ''
        }`}
      />
    </button>
  )
}
