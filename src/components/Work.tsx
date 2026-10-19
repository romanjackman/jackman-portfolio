import { disciplines, disciplineById } from "../data";

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
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-muted-2" />
          Work
        </p>
        <h1 className="mt-6 text-4xl text-white sm:text-5xl">Selected work</h1>
        <p className="mt-5 max-w-[52ch] text-lg text-muted">
          Browse by discipline, or step through the two team case studies.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {disciplines.map((d) => (
            <button
              key={d.id}
              onClick={() => onOpenDiscipline(d.id)}
              className="group rounded-sm border border-white/10 bg-surface p-8 text-left transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="font-display text-sm text-muted-2">{d.num}</span>
              <h3 className="mt-3 text-2xl text-white">{d.title}</h3>
              <p className="mt-4 max-w-[42ch] leading-relaxed text-muted">{d.blurb}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.18em] text-white/80 uppercase group-hover:text-white">
                View →
              </span>
            </button>
          ))}
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
      <h1 className="mt-6 text-4xl text-white sm:text-5xl">{active.title}</h1>
      <p className="mt-5 max-w-[56ch] text-lg text-muted">{active.blurb}</p>

      {/* Video discipline: reel grid */}
      {active.kind === "video" && active.reels && (
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {active.reels.map((r) => (
            <figure key={r.src} className="rounded-sm border border-white/10 bg-surface p-3">
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
          ))}
        </div>
      )}

      {/* Design disciplines: sections -> category galleries */}
      {active.sections?.map((section) => (
        <div key={section.title} className="mt-16">
          <h2 className="text-2xl text-white">{section.title}</h2>
          {section.blurb && <p className="mt-3 max-w-[56ch] text-muted">{section.blurb}</p>}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onOpenGallery(cat.images, 0)}
                className="group overflow-hidden rounded-sm border border-white/10 bg-surface text-left transition-colors hover:border-white/25"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={cat.images[0]}
                    alt={cat.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-lg text-white">{cat.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cat.blurb}</p>
                  <span className="mt-4 inline-block text-xs tracking-[0.2em] text-white/70 uppercase group-hover:text-white">
                    View gallery · {cat.images.length}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
