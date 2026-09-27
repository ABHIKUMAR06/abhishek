import { projects, repos } from '../data/content'
import { ExternalIcon, GitHubIcon } from './Icons'
import { Section } from './Section'

export function Work() {
  return (
    <Section id="work" eyebrow="03 — Work" title="Things I’ve built">
      <div className="space-y-5">
        {projects.map((project) => (
          <article key={project.name} className="reveal card card-hover p-6 sm:p-7">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm text-slate-500">{project.blurb}</p>
            </div>
            <p className="mt-3 leading-relaxed text-slate-400">{project.summary}</p>

            <ul className="mt-5 space-y-2.5">
              {project.points.map((point) => (
                <li
                  key={point.slice(0, 32)}
                  className="flex gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span
                    aria-hidden="true"
                    className="bg-accent-500/60 mt-2 h-1 w-1 shrink-0 rounded-full"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <header className="reveal mb-8">
          <h3 className="text-xl font-semibold">Open source &amp; side projects</h3>
          <p className="mt-2 text-sm text-slate-500">
            Smaller experiments and learning projects living on GitHub.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <article key={repo.name} className="reveal card card-hover group flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-mono text-sm font-semibold text-white">{repo.name}</h4>
                <GitHubIcon className="h-4 w-4 shrink-0 text-slate-600 transition-colors group-hover:text-slate-300" />
              </div>
              <p className="mt-2.5 grow text-sm leading-relaxed text-slate-400">
                {repo.description}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="chip">{repo.language}</span>
                <div className="flex items-center gap-3">
                  {repo.demo && (
                    <a
                      href={repo.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-accent-400 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors"
                    >
                      Live demo
                      <ExternalIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-accent-400 text-xs font-medium text-slate-400 transition-colors"
                  >
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
