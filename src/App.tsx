import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Lightbox } from "./components/Lightbox";

export type Screen = "home" | "work" | "about";

export function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [disciplineId, setDisciplineId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  // Scroll to top whenever the screen or open discipline changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [screen, disciplineId]);

  const go = (s: Screen) => {
    setScreen(s);
    setDisciplineId(null);
  };

  const openDiscipline = (id: string) => {
    setScreen("work");
    setDisciplineId(id);
  };

  return (
    <div className="min-h-screen">
      <Nav screen={screen} onNavigate={go} />
      <main>
        {screen === "home" && <Home onNavigate={go} onOpenDiscipline={openDiscipline} />}
        {screen === "work" && (
          <Work
            disciplineId={disciplineId}
            onOpenDiscipline={setDisciplineId}
            onBack={() => setDisciplineId(null)}
            onOpenGallery={(images, index) => setLightbox({ images, index })}
          />
        )}
        {screen === "about" && <About onNavigate={go} onOpenDiscipline={openDiscipline} />}
      </main>
      <Footer />
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onIndex={(i) => setLightbox((lb) => (lb ? { ...lb, index: i } : lb))}
        />
      )}
    </div>
  );
}
