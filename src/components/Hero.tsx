import { profile, socials, stats } from '../data/content'
import { iconFor } from '../lib/iconFor'
import { ArrowIcon } from './Icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-accent-600/20 absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-teal-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      </div>

      <div className="shell">
        <div className="reveal is-visible flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            {profile.available && (
              <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-3 py-1.5 font-mono text-[11px] tracking-wide text-teal-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
                </span>
                Open to backend &amp; full-stack roles
              </span>
            )}

            <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="from-accent-400 mt-3 bg-gradient-to-r to-teal-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group bg-accent-500 hover:bg-accent-600 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-colors"
              >
                View my work
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-white/5"
              >
                Contact me
              </a>
            </div>

            <ul className="mt-9 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = iconFor(social.label)
                const isWhatsApp = social.label === 'WhatsApp'
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      title={`${social.label} — ${social.handle}`}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                        isWhatsApp
                          ? 'border-[#25D366]/35 bg-[#25D366]/10 text-[#25D366] hover:border-[#25D366]/60 hover:bg-[#25D366]/20'
                          : 'border-white/10 text-slate-400 hover:border-accent-500/40 hover:bg-white/5 hover:text-accent-400'
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="relative shrink-0">
            <div className="from-accent-500 absolute -inset-3 rounded-[2rem] bg-gradient-to-br to-teal-400 opacity-20 blur-2xl" />
            <img
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              width={224}
              height={224}
              loading="eager"
              className="relative h-40 w-40 rounded-[1.75rem] border border-white/10 object-cover sm:h-56 sm:w-56"
            />
          </div>
        </div>

        <dl className="reveal mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card px-5 py-5">
              <dt className="text-2xl font-bold text-white">{stat.value}</dt>
              <dd className="mt-1 text-sm text-slate-500">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
