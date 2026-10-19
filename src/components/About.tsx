import type { Screen } from "../App";
import { profile, aboutMeta, aboutAreas } from "../data";
import { Reveal } from "./Reveal";

export function About({
  onNavigate,
}: {
  onNavigate: (s: Screen) => void;
  onOpenDiscipline: (id: string) => void;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 lg:pt-44">
      <Reveal>
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          About
        </p>
      </Reveal>

      <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Reveal>
            <h1 className="text-5xl text-white sm:text-6xl">{profile.name}</h1>
          </Reveal>
          {profile.aboutBio.map((p, i) => (
            <Reveal key={i} delay={0.08 * (i + 1)}>
              <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/[0.02] sm:grid-cols-4">
              {aboutMeta.map((m) => (
                <div key={m.key} className="px-5 py-6">
                  <p className="eyebrow">{m.key}</p>
                  <p className="mt-2 text-sm text-white">{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-full bg-accent/15 blur-3xl" />
            <div className="overflow-hidden rounded-sm border border-white/15">
              <img
                src={profile.headshot}
                alt="Roman Jackman"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-20">
          <p className="eyebrow">Areas of work</p>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutAreas.map((a) => (
              <li
                key={a}
                className="group flex items-center justify-between border-b border-white/10 pb-3 font-display text-xl text-white/90 transition-colors hover:text-white"
              >
                {a}
                <span className="text-accent/50 transition-transform group-hover:translate-x-1">→</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16">
          <button onClick={() => onNavigate("work")} className="pill pill-solid">
            View the work →
          </button>
        </div>
      </Reveal>
    </section>
  );
}
