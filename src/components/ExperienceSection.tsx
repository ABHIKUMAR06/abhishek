import { experience } from '../data/content'
import { Section } from './Section'

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I’ve been shipping">
      <ol className="relative border-l border-white/10 pl-8">
        {experience.map((job) => (
          <li key={`${job.role}-${job.period}`} className="reveal relative pb-12 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[2.15rem] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 ${
                job.current
                  ? 'border-teal-400 bg-teal-400/30'
                  : 'border-white/25 bg-ink-950'
              }`}
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              {job.current && (
                <span className="rounded-full bg-teal-400/10 px-2 py-0.5 font-mono text-[10px] tracking-wide text-teal-300 uppercase">
                  Current
                </span>
              )}
            </div>
            <p className="text-accent-400 mt-1 text-sm font-medium">{job.company}</p>
            <p className="mt-1 font-mono text-xs text-slate-500">{job.period}</p>

            <ul className="mt-4 space-y-2.5">
              {job.points.map((point) => (
                <li key={point.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                  <span aria-hidden="true" className="bg-accent-500/60 mt-2 h-1 w-1 shrink-0 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
