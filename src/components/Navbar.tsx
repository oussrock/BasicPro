import React from 'react';
import { Translations } from '../constants/translations';

interface NavLink {
  id: string;
  l: string;
}

interface NavbarProps {
  lang: string;
  setLang: (lang: string) => void;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  navLinks: NavLink[];
  go: (id: string) => void;
  t: Translations;
}

export function Navbar({ lang, setLang, menu, setMenu, activeSection, navLinks, go, t }: NavbarProps) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 300, background: "rgba(7,14,40,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,168,76,.2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 18px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }} onClick={() => go("home")}>
          <div style={{ width: 34, height: 34, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, color: "var(--navy)", boxShadow: "0 0 14px rgba(201,168,76,.45)" }}>B</div>
          <div>
            <div style={{ color: "white", fontWeight: 700, fontSize: 15, letterSpacing: ".06em", lineHeight: 1.1 }}>BASIC.PRO-NET</div>
            <div className="s" style={{ color: "var(--gold)", fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase" }}>Entretien Ménager</div>
          </div>
        </div>
        <div className="dn" style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {navLinks.map((l) => (
            <span key={l.id} className={`nl ${activeSection === l.id ? "na" : ""}`} style={{ color: "rgba(255,255,255,.8)" }} onClick={() => go(l.id)}>
              {l.l}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {["fr", "en"].map((lc) => (
            <button
              key={lc}
              className="s"
              style={{
                color: lang === lc ? "var(--gold)" : "rgba(255,255,255,.4)",
                background: lang === lc ? "rgba(201,168,76,.12)" : "transparent",
                border: `1.5px solid ${lang === lc ? "var(--gold)" : "rgba(255,255,255,.2)"}`,
                padding: "5px 11px",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                transition: "all .2s",
              }}
              onClick={() => setLang(lc)}
            >
              {lc}
            </button>
          ))}
          <button className="hb" onClick={() => setMenu((m) => !m)} aria-label="Menu">
            <span style={{ transform: menu ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: menu ? 0 : 1 }} />
            <span style={{ transform: menu ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </div>
      {menu && (
        <div style={{ background: "rgba(7,14,40,.97)", borderTop: "1px solid rgba(255,255,255,.07)" }}>
          {navLinks.map((l) => (
            <div
              key={l.id}
              className="s"
              style={{
                color: "rgba(255,255,255,.88)",
                padding: "15px 22px",
                cursor: "pointer",
                fontSize: 15,
                borderBottom: "1px solid rgba(255,255,255,.06)",
                borderLeft: activeSection === l.id ? "3px solid var(--gold)" : "3px solid transparent",
                fontWeight: activeSection === l.id ? 700 : 400,
              }}
              onClick={() => go(l.id)}
            >
              {l.l}
            </div>
          ))}
          <div style={{ padding: "16px 22px" }}>
            <button className="bg" style={{ width: "100%", textAlign: "center" }} onClick={() => go("quote")}>
              {t.nav.quote}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
