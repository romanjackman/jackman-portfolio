import { useEffect } from "react";

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const prev = () => onIndex((index - 1 + images.length) % images.length);
  const next = () => onIndex((index + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="text-sm tracking-[0.18em] text-muted uppercase">
          {index + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="text-sm tracking-[0.18em] text-white uppercase hover:text-muted"
        >
          Close ✕
        </button>
      </div>

      <div
        className="flex flex-1 items-center justify-center px-4 pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={prev}
          aria-label="Previous"
          className="shrink-0 px-4 text-3xl text-white/60 hover:text-white"
        >
          ‹
        </button>
        <img
          src={images[index]}
          alt=""
          className="max-h-[80vh] max-w-full rounded-sm object-contain"
        />
        <button
          onClick={next}
          aria-label="Next"
          className="shrink-0 px-4 text-3xl text-white/60 hover:text-white"
        >
          ›
        </button>
      </div>

      <div
        className="flex gap-2 overflow-x-auto px-6 pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => onIndex(i)}
            className={`h-16 w-16 shrink-0 overflow-hidden rounded-sm border ${
              i === index ? "border-white" : "border-white/15 opacity-60 hover:opacity-100"
            }`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
