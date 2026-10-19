import type { Screen } from "../App";
import { profile, aboutMeta, aboutAreas } from "../data";

export function About({
  onNavigate,
}: {
  onNavigate: (s: Screen) => void;
  onOpenDiscipline: (id: string) => void;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 lg:pt-44">
      <p className="eyebrow flex items-center gap-3">
        <span className="h-px w-8 bg-muted-2" />
        About
      </p>

      <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <h1 className="text-4xl text-white sm:text-5xl">{profile.name}</h1>
          {profile.aboutBio.map((p, i) => (
            <p key={i} className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted">
              {p}
            </p>
          ))}

          <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/[0.02] sm:grid-cols-4">
            {aboutMeta.map((m) => (
              <div key={m.key} className="px-5 py-6">
                <p className="eyebrow">{m.key}</p>
                <p className="mt-2 text-sm text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-white/10">
          <img src={profile.headshot} alt="Roman Jackman" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <p className="eyebrow">Areas of work</p>
        <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {aboutAreas.map((a) => (
            <li
              key={a}
              className="border-b border-white/10 pb-3 font-display text-xl text-white/90"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <button onClick={() => onNavigate("work")} className="pill pill-solid">
          View the work →
        </button>
      </div>
    </section>
  );
}
