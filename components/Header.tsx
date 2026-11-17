"use client";

import { useEffect, useRef, useState } from "react";
import { bookMessage, branches, nav, waLink } from "@/lib/site";

/** Aperture mark recreated from the studio's shopfront sign. `mono` renders it in a single tone for dark/light UI. */
export function Mark({ mono, className = "logo__mark" }: { mono?: boolean; className?: string }) {
  const colors = mono
    ? ["currentColor", "currentColor", "currentColor", "currentColor", "currentColor", "currentColor"]
    : ["#E23B2E", "#2E6BD8", "#3BAA5B", "#8D3FB4", "#F2B12E", "#E9417D"];
  const C = 2 * Math.PI * 17;
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      {colors.map((c, i) => (
        <circle
          key={i}
          cx="24" cy="24" r="17" fill="none" stroke={c} strokeWidth="9"
          strokeDasharray={`${C / 6 - 1.6} ${C - C / 6 + 1.6}`}
          transform={`rotate(${i * 60 - 90} 24 24)`}
          opacity={mono ? 1 - i * 0.11 : 1}
        />
      ))}
      <circle cx="24" cy="24" r="7.2" fill="none" stroke={mono ? "currentColor" : "#FFFFFF"} strokeWidth="2.4" opacity={mono ? 0.9 : 1} />
    </svg>
  );
}

export function Logo({ light, mono }: { light?: boolean; mono?: boolean }) {
  return (
    <span className={`logo${light ? " logo--light" : ""}`}>
      <Mark mono={mono} />
      <span className="logo__text">
        <span className="logo__word">clone</span>
        <span className="logo__sub">Photo Studio &amp; Make-up</span>
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const openRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        openRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`header${solid ? " is-solid" : ""}`}>
        <div className="header__inner">
          <a href="#top" className="header__logo" aria-label="Clonepictures Photo Studio, back to top">
            <Logo light={!solid} />
          </a>
          <nav className="header__nav" aria-label="Primary">
            {nav.map((n) => <a key={n.label} href={n.href}>{n.label}</a>)}
          </nav>
          <a className="btn btn--accent btn--sm header__cta" href="#book">Book a Shoot</a>
          <button
            ref={openRef}
            className="header__burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div id="site-menu" className={`menu${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open} inert={!open}>
        <div className="menu__top">
          <Logo light />
          <button ref={closeRef} className="menu__close" onClick={() => setOpen(false)} aria-label="Close menu"><span /><span /></button>
        </div>
        <nav className="menu__nav" aria-label="Mobile">
          {nav.map((n, i) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}>
              <span className="menu__num">{String(i + 1).padStart(2, "0")}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="menu__foot">
          <a className="btn btn--accent btn--block" href={waLink(bookMessage)} target="_blank" rel="noopener">Book on WhatsApp</a>
          <p>{branches.length} branches · Yaba &amp; Surulere, Lagos</p>
        </div>
      </div>
    </>
  );
}
