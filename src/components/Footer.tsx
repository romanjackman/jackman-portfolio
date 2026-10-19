import { contact } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-muted-2" />
            Contact
          </p>
          <h2 className="mt-5 max-w-[14ch] text-4xl leading-tight text-white sm:text-5xl">
            For inquiries and opportunities
          </h2>
          <p className="mt-6 max-w-[46ch] text-muted">
            The best way to reach me is by email or phone. I&rsquo;m always glad to discuss the work
            in more detail.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="font-display text-2xl text-white transition-colors hover:text-muted"
          >
            {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="font-display text-2xl text-white transition-colors hover:text-muted"
          >
            {contact.phone}
          </a>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm tracking-[0.18em] text-muted uppercase transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <p className="text-xs tracking-[0.2em] text-muted-2 uppercase">
          © {new Date().getFullYear()} Jackman Media
        </p>
      </div>
    </footer>
  );
}
