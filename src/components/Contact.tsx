import { profile, socials, whatsapp, whatsappHref } from '../data/content'
import { iconFor } from '../lib/iconFor'
import { ArrowIcon, MailIcon, WhatsAppIcon } from './Icons'

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-accent-600/20 absolute bottom-0 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full blur-[130px]" />
      </div>

      <div className="shell">
        <div className="reveal card mx-auto max-w-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="eyebrow">05 — Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s build something together
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
            I’m open to backend and full-stack roles, and happy to talk through interesting
            problems. Message me on WhatsApp for a quick reply, or email me for anything detailed.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1eb457]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
          </div>

          <p className="mt-4 font-mono text-xs text-slate-500">{whatsapp.display}</p>

          <ul className="mt-8 flex items-center justify-center gap-2">
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
      </div>
    </section>
  )
}
