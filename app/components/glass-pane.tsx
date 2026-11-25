"use client";

import { useState, type ReactNode } from "react";

// The same Glass slider as Settings > Appearance: one control moves blur, tint and colour
// together, from Clear (light blur, thin tint) to Frosted (heavy blur, milky tint).
// GlassOS starts at 35.
function glassAt(v: number) {
  const t = v / 100;
  return {
    "--pane-blur": `${(6 + t * 30).toFixed(1)}px`,
    "--pane-tint": (0.36 + t * 0.36).toFixed(3), // 0.36 keeps white text above 4.5:1 over the brightest wallpaper at Clear
    "--pane-sat": (1.8 - t * 0.7).toFixed(2),
  } as React.CSSProperties;
}

export function GlassPane({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(35);
  return (
    <div className="pane glass" style={glassAt(value)}>
      {children}
      <div className="pane-slider">
        <label htmlFor="glass-slider">Glass</label>
        <span aria-hidden="true">Clear</span>
        <input
          id="glass-slider"
          type="range"
          min={0}
          max={100}
          value={value}
          aria-valuetext={`${value} of 100, ${value < 34 ? "clear" : value > 66 ? "frosted" : "in between"}`}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <span aria-hidden="true">Frosted</span>
      </div>
    </div>
  );
}
