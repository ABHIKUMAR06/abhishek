import { about, education, interests, profile } from '../data/content'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A backend engineer who likes the messy seams">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="reveal space-y-5">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed text-slate-400">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="reveal space-y-4">
          <div className="card p-5">
            <p className="eyebrow">Education</p>
            <p className="mt-3 font-semibold text-white">{education.degree}</p>
            <p className="mt-1 text-sm text-slate-400">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-slate-500">{education.period}</p>
          </div>

          <div className="card p-5">
            <p className="eyebrow">Based in</p>
            <p className="mt-3 text-sm text-slate-300">{profile.location}</p>
          </div>

          <div className="card p-5">
            <p className="eyebrow">Away from the keyboard</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <li key={interest} className="chip">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  )
}
