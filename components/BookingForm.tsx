"use client";

import { useState, type FormEvent } from "react";
import { branchName, branches, packages, shootTypes, spaces, waLink } from "@/lib/site";

/** Collects booking details and opens WhatsApp with a neatly formatted message. No backend. */
export default function BookingForm() {
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    if (!v("name") || !v("phone")) {
      setError("Please add your name and phone number so we can confirm your booking.");
      return;
    }
    setError("");
    const lines = [
      "Hello Clonepictures, I'd like to book a shoot.",
      "",
      `Name: ${v("name")}`,
      `Phone: ${v("phone")}`,
      `Shoot type: ${v("type")}`,
      `Package: ${v("package")}`,
      `Studio space: ${v("space")}`,
      `Branch: ${v("branch")}`,
      `Preferred date: ${v("date") || "Flexible"}`,
      `Preferred time: ${v("time") || "Flexible"}`,
      `Number of people: ${v("people") || "1"}`,
    ];
    if (v("notes")) lines.push(`Notes: ${v("notes")}`);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        <label className="field">
          <span>Full name</span>
          <input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label className="field">
          <span>Phone / WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="080…" />
        </label>
        <label className="field">
          <span>Shoot type</span>
          <select name="type" defaultValue={shootTypes[0]}>
            {shootTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Package</span>
          <select name="package" defaultValue="Standard">
            {packages.map((p) => <option key={p.name}>{p.name}</option>)}
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="field">
          <span>Studio space</span>
          <select name="space" defaultValue={spaces[0].name}>
            {spaces.map((s) => <option key={s.id}>{s.name}</option>)}
            <option>Outdoor shoot</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="field">
          <span>Branch</span>
          <select name="branch" defaultValue={branchName(branches[0])}>
            {branches.map((b) => <option key={b.id}>{branchName(b)}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Preferred date</span>
          <input name="date" type="date" />
        </label>
        <label className="field">
          <span>Preferred time</span>
          <input name="time" type="time" />
        </label>
        <label className="field">
          <span>Number of people</span>
          <input name="people" type="number" min={1} max={50} defaultValue={1} inputMode="numeric" />
        </label>
        <label className="field field--wide">
          <span>Notes <em>(optional)</em></span>
          <textarea name="notes" rows={3} placeholder="Theme, outfits, makeup, anything we should know" />
        </label>
      </div>
      {error && <p className="form__error" role="alert">{error}</p>}
      <div className="form__foot">
        <button type="submit" className="btn btn--accent">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="ico"><path d="M4 20l1.2-4.1A8 8 0 1 1 8.3 19z" /></svg>
          Send booking on WhatsApp
        </button>
        <p>WhatsApp opens with your details filled in. Nothing is sent until you press send.</p>
      </div>
    </form>
  );
}
