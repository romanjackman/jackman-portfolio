import { motion } from "motion/react";
import type { Screen } from "../App";
import { profile, homeStats, disciplines, programs, featured } from "../data";
import { Reveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Home({
  onNavigate,
  onOpenDiscipline,
}: {
  onNavigate: (s: Screen) => void;
  onOpenDiscipline: (id: string) => void;
}) {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pt-28 pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.p
              className="eyebrow flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="h-px w-10 bg-accent" />
              {profile.studio} — Portfolio
            </motion.p>

            <h1 className="mt-6 text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.92] text-white">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease }}
              >
                Roman
              </motion.span>
              <motion.span
                className="block italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-paper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.18, ease }}
              >
                Jackman
              </motion.span>
            </h1>

            <motion.p
              className="mt-7 max-w-[46ch] text-lg leading-relaxed text-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              {profile.homeBio}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
            >
              <button onClick={() => onNavigate("work")} className="pill pill-solid">
                View work →
              </button>
              <button onClick={() => onNavigate("about")} className="pill">
                About
              </button>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            <div className="absolute -inset-6 -z-10 rounded-full bg-accent/20 blur-3xl" />
            <div className="overflow-hidden rounded-sm border border-white/15 shadow-[0_30px_80px_rgba(4,10,25,0.6)]">
              <img
                src={profile.headshot}
                alt="Roman Jackman, sports and brand designer"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── Program marquee ───────── */}
      <section className="border-y border-white/10 py-6">
        <div className="marquee gap-10 whitespace-nowrap">
          {[...programs, ...programs].map((p, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl text-white/35">
              {p}
              <span className="text-accent/60">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ───────── Featured work band ───────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 text-3xl text-white sm:text-4xl">Recent graphics</h2>
            </div>
            <button
              onClick={() => onNavigate("work")}
              className="hidden text-sm tracking-[0.18em] text-muted uppercase transition-colors hover:text-white sm:inline"
            >
              All work →
            </button>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {featured.map((f, i) => (
            <Reveal key={f.src} delay={(i % 3) * 0.08}>
              <button
                onClick={() => onNavigate("work")}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10"
              >
                <img
                  src={f.src}
                  alt={f.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left text-sm tracking-[0.14em] text-white/0 uppercase transition-colors group-hover:text-white/90">
                  {f.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── Stat row ───────── */}
      <section className="border-y border-white/10 bg-ink-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {homeStats.map((s) => (
            <div key={s.key} className="border-white/10 px-6 py-8 [&:not(:nth-child(2n))]:border-r lg:[&:not(:last-child)]:border-r">
              <p className="eyebrow">{s.key}</p>
              <p className="mt-2 text-base text-white">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Areas of work ───────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow">Areas of work</p>
          <h2 className="mt-4 text-3xl text-white sm:text-5xl">Four areas, one visual approach</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {disciplines.map((d, i) => {
            const cover = d.cover;
            return (
              <Reveal key={d.id} delay={(i % 2) * 0.08}>
                <button
                  onClick={() => onOpenDiscipline(d.id)}
                  className="group grid w-full grid-cols-[1fr_120px] overflow-hidden rounded-sm border border-white/10 bg-surface text-left transition-colors hover:border-accent/40 sm:grid-cols-[1fr_160px]"
                >
                  <div className="p-8">
                    <span className="font-display text-sm text-accent">{d.num}</span>
                    <h3 className="mt-3 text-2xl text-white">{d.title}</h3>
                    <p className="mt-3 max-w-[38ch] leading-relaxed text-muted">{d.blurb}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.18em] text-white/70 uppercase group-hover:text-white">
                      View →
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={cover}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
