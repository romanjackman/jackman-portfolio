import type { Screen } from "../App";
import { profile, homeStats, disciplines } from "../data";

export function Home({
  onNavigate,
  onOpenDiscipline,
}: {
  onNavigate: (s: Screen) => void;
  onOpenDiscipline: (id: string) => void;
}) {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-muted-2" />
              {profile.eyebrow}
            </p>
            <h1 className="mt-6 text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-muted">
              {profile.homeBio}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button onClick={() => onNavigate("work")} className="pill pill-solid">
                View work →
              </button>
              <button onClick={() => onNavigate("about")} className="pill">
                About
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border border-white/10">
            <img
              src={profile.headshot}
              alt="Roman Jackman"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Stat row */}
      <section className="border-y border-white/10 bg-ink-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px lg:grid-cols-4">
          {homeStats.map((s) => (
            <div key={s.key} className="px-6 py-8">
              <p className="eyebrow">{s.key}</p>
              <p className="mt-2 text-base text-white">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">Areas of work</p>
        <h2 className="mt-4 text-3xl text-white sm:text-4xl">Four areas, one visual approach</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {disciplines.map((d) => (
            <button
              key={d.id}
              onClick={() => onOpenDiscipline(d.id)}
              className="group flex flex-col justify-between rounded-sm border border-white/10 bg-surface p-8 text-left transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div>
                <span className="font-display text-sm text-muted-2">{d.num}</span>
                <h3 className="mt-3 text-2xl text-white">{d.title}</h3>
                <p className="mt-4 max-w-[42ch] leading-relaxed text-muted">{d.blurb}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.18em] text-white/80 uppercase group-hover:text-white">
                View →
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
