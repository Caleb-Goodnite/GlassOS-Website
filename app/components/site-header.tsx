"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { REPO_URL } from "@/app/release";

const LINKS = [
  { href: "#desktop", label: "The desktop" },
  { href: "#different", label: "What's different" },
  { href: "#design", label: "Design" },
  { href: "#download", label: "Download" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="topbar glass">
      <a className="topbar-brand" href="#top">
        <Image src="/glassos-mark.png" alt="" width={22} height={22} />
        <span>GlassOS</span>
      </a>
      <button
        className="topbar-menu"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className={open ? "topbar-nav is-open" : "topbar-nav"} aria-label="Sections">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={REPO_URL}>GitHub</a>
      </nav>
    </header>
  );
}
