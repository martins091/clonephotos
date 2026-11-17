"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import PhotoView from "./PhotoView";

const RM = "(prefers-reduced-motion: reduce)";
const subscribeRM = (cb: () => void) => {
  const m = window.matchMedia(RM);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

type Slide = { src: string; alt: string; caption: string; exists: boolean };
const DURATION = 6500;

/** Editorial slideshow: slow crossfade + drift, numbered progress, caption and pause. */
export default function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const reduce = useSyncExternalStore(subscribeRM, () => window.matchMedia(RM).matches, () => false);
  const [paused, setPaused] = useState(false);
  const running = !reduce && !paused && slides.length > 1;

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), DURATION);
    return () => clearInterval(t);
  }, [running, slides.length]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="show">
      <div className="show__frame">
        {slides.map((s, k) => (
          <div key={s.src} className={`show__item${k === i ? " is-active" : ""}`} aria-hidden={k !== i}>
            <PhotoView src={s.src} alt={s.alt} exists={s.exists} sizes="(min-width: 1080px) 40vw, 100vw" priority={k === 0} tone="dark" />
          </div>
        ))}
        <div className="show__shade" aria-hidden="true" />
      </div>

      <div className="show__ui">
        <p className="show__caption" aria-live="polite">
          <span className="show__count">{pad(i + 1)}<i>/</i>{pad(slides.length)}</span>
          <span className="show__label">{slides[i].caption}</span>
        </p>
        <ol className="show__bars" aria-label="Choose photo">
          {slides.map((s, k) => (
            <li key={s.src}>
              <button type="button" onClick={() => setI(k)} aria-label={`Show photo ${k + 1}: ${s.caption}`} aria-current={k === i}>
                <i className={k === i && running ? "is-running" : k < i ? "is-done" : ""} style={{ animationDuration: `${DURATION}ms` }} />
              </button>
            </li>
          ))}
        </ol>
        <button type="button" className="show__pause" onClick={() => setPaused((p) => !p)} aria-label={running ? "Pause slideshow" : "Play slideshow"}>
          {running ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" className="fill" /></svg>
          )}
        </button>
      </div>
    </div>
  );
}
