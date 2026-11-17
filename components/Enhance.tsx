"use client";

import { useEffect, useState } from "react";
import { bookMessage, waLink } from "@/lib/site";

/** Gentle fade-up for [data-reveal] elements. */
export function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

/** Floating "Book a Shoot" WhatsApp pill. */
export function FloatingBook() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.6);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <a className={`float${show ? "" : " is-hidden"}`} href={waLink(bookMessage)} target="_blank" rel="noopener" aria-label="Book a shoot on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20l1.2-4.1A8 8 0 1 1 8.3 19z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.5l-.5.6c-.1.2-.2.3 0 .6.6 1 1.5 1.8 2.6 2.3.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.5.7c.3.1.3.3.3.5 0 .9-.7 1.6-1.6 1.7-.9.1-2.6-.2-4.4-1.8-1.6-1.4-2.4-3-2.4-4 0-.6.2-1.2.4-1.7z" fill="currentColor" />
      </svg>
      <span>Book a Shoot</span>
    </a>
  );
}
