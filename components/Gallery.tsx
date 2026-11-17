"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryCat } from "@/lib/site";
import PhotoView from "./PhotoView";

type Item = { src: string; alt: string; cat: GalleryCat; ratio: number; exists: boolean };

/** Filterable masonry gallery with a keyboard-friendly lightbox (Esc, ←, →). */
export default function Gallery({ items, filters }: { items: Item[]; filters: ("All" | GalleryCat)[] }) {
  const [filter, setFilter] = useState<"All" | GalleryCat>("All");
  const [open, setOpen] = useState<number | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const list = filter === "All" ? items : items.filter((g) => g.cat === filter);

  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    document.body.classList.add("menu-open");
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open, close, step]);

  const current = open !== null ? list[open] : null;

  return (
    <>
      <div className="filters" role="toolbar" aria-label="Filter gallery">
        {filters.map((f) => (
          <button key={f} type="button" className={`filter${filter === f ? " is-active" : ""}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <ul className="masonry" aria-live="polite">
        {list.map((g, k) => (
          <li key={g.src} className="masonry__item">
            <button
              type="button"
              className="masonry__btn"
              style={{ aspectRatio: String(g.ratio) }}
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpen(k);
              }}
              aria-label={`Open ${g.alt} (${g.cat})`}
            >
              <PhotoView src={g.src} alt={g.alt} exists={g.exists} sizes="(min-width: 1024px) 33vw, 50vw" />
              <span className="masonry__tag">{g.cat}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${current.alt}, photo ${open! + 1} of ${list.length}`} onClick={close}>
          <div className="lightbox__frame" onClick={(e) => e.stopPropagation()} style={{ aspectRatio: String(current.ratio), ["--r" as string]: current.ratio }}>
            <PhotoView src={current.src} alt={current.alt} exists={current.exists} sizes="90vw" tone="dark" />
          </div>
          <p className="lightbox__cap">{current.alt} · {current.cat} <span>{open! + 1} / {list.length}</span></p>
          <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <button type="button" className="lightbox__btn lightbox__prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" className="lightbox__btn lightbox__next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </>
  );
}
