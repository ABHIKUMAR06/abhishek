import { skills } from '../data/content'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="The toolkit">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group} className="reveal card card-hover p-5">
            <p className="eyebrow">{group.group}</p>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
