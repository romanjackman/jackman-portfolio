import { disciplines, disciplineById } from "../data";
import { Reveal } from "./Reveal";

export function Work({
  disciplineId,
  onOpenDiscipline,
  onBack,
  onOpenGallery,
}: {
  disciplineId: string | null;
  onOpenDiscipline: (id: string) => void;
  onBack: () => void;
  onOpenGallery: (images: string[], index: number) => void;
}) {
  const active = disciplineId ? disciplineById(disciplineId) : null;

  if (!active) {
    return (
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 lg:pt-44">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            Work
          </p>
          <h1 className="mt-6 text-5xl text-white sm:text-6xl">Selected work</h1>
          <p className="mt-5 max-w-[52ch] text-lg text-muted">
            Browse by discipline, or step through the two team case studies.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {disciplines.map((d, i) => {
            return (
              <Reveal key={d.id} delay={(i % 2) * 0.08}>
                <button
                  onClick={() => onOpenDiscipline(d.id)}
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10 text-left"
                >
                  <img
                    src={d.cover}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-45 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="font-display text-sm text-accent">{d.num}</span>
                    <h3 className="mt-2 text-3xl text-white">{d.title}</h3>
                    <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-muted">{d.blurb}</p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 lg:pt-44">
      <button
        onClick={onBack}
        className="eyebrow flex items-center gap-2 text-muted transition-colors hover:text-white"
      >
        ← Work / <span className="text-white">{active.title}</span>
      </button>
      <h1 className="mt-6 text-5xl text-white sm:text-6xl">{active.title}</h1>
      <p className="mt-5 max-w-[56ch] text-lg text-muted">{active.blurb}</p>

      {/* Video discipline: reel grid */}
      {active.kind === "video" && active.reels && (
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {active.reels.map((r) => (
            <Reveal key={r.src}>
              <figure className="rounded-sm border border-white/10 bg-surface p-3">
                <video
                  controls
                  preload="none"
                  poster={r.poster}
                  className="aspect-video w-full rounded-sm bg-black object-cover"
                >
                  <source src={r.src} type="video/mp4" />
                </video>
                <figcaption className="px-2 py-4">
                  <p className="text-lg text-white">{r.title}</p>
                  <p className="mt-1 text-sm text-muted">{r.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      )}

      {/* Design disciplines: sections -> category thumbnail grids */}
      {active.sections?.map((section) => (
        <div key={section.title} className="mt-16">
          <Reveal>
            <h2 className="text-2xl text-white sm:text-3xl">{section.title}</h2>
            {section.blurb && <p className="mt-3 max-w-[56ch] text-muted">{section.blurb}</p>}
          </Reveal>
          <div className="mt-8 space-y-12">
            {section.categories.map((cat) => (
              <Reveal key={cat.id}>
                <div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
                    <h3 className="font-display text-xl text-white">{cat.title}</h3>
                    <span className="text-xs tracking-[0.2em] text-muted-2 uppercase">
                      {cat.images.length} pieces
                    </span>
                  </div>
                  <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted">{cat.blurb}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {cat.images.map((src, i) => (
                      <button
                        key={src}
                        onClick={() => onOpenGallery(cat.images, i)}
                        className="group aspect-[4/5] overflow-hidden rounded-sm border border-white/10 transition-colors hover:border-accent/50"
                        aria-label={`${cat.title} — open image ${i + 1}`}
                      >
                        <img
                          src={src}
                          alt={`${cat.title} ${i + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
