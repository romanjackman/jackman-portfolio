import { useEffect, useState } from "react";
import type { Screen } from "../App";

const links: { label: string; screen: Screen }[] = [
  { label: "Home", screen: "home" },
  { label: "Work", screen: "work" },
  { label: "About", screen: "about" },
];

export function Nav({
  screen,
  onNavigate,
}: {
  screen: Screen;
  onNavigate: (s: Screen) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[rgba(6,11,20,0.78)] backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button onClick={() => onNavigate("home")} className="text-left leading-none">
          <span className="block text-xl font-bold tracking-[0.12em] text-white">JACKMAN</span>
          <span className="block text-[0.6rem] tracking-[0.5em] text-muted-2">MEDIA</span>
        </button>
        <ul className="flex items-center gap-8">
          {links.map((l) => (
            <li key={l.screen}>
              <button
                onClick={() => onNavigate(l.screen)}
                className={`text-sm tracking-[0.18em] uppercase transition-colors ${
                  screen === l.screen ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
