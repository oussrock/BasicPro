import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { T, MAIL } from "./constants/translations";
import { useSectionObserver } from "./hooks/useSectionObserver";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";

const SECTION_IDS = ["home", "night", "services", "why", "quote", "contact"];

// --- EMAILJS CONFIGURATION ---
// Get these by signing up for free at https://www.emailjs.com/
// Replace with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_8z2lu4g"; 
const EMAILJS_TEMPLATE_ID = "template_dg0w7if"; // Updated Template ID
const EMAILJS_PUBLIC_KEY = "745QYWaz8LqCp0xPc";

interface FormData {
  name: string;
  email: string;
  phone: string;
  addr: string;
  type: string;
  size: string;
  freq: string;
  det: string;
}

export default function App() {
  const [lang, setLang] = useState<string>("fr");
  const [menu, setMenu] = useState<boolean>(false);
  const [fd, setFd] = useState<FormData>({ name: "", email: "", phone: "", addr: "", type: "", size: "", freq: "", det: "" });
  const [sent, setSent] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { visibleSections, activeSection } = useSectionObserver(SECTION_IDS);
  const t = T[lang];

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => 
    setFd((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fd.name,
          from_email: fd.email,
          phone: fd.phone,
          address: fd.addr,
          service_type: fd.type,
          size: fd.size,
          frequency: fd.freq,
          message: fd.det,
          to_email: MAIL, // Recipient email address
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setFd({ name: "", email: "", phone: "", addr: "", type: "", size: "", freq: "", det: "" });
    } catch (err: any) {
      console.Berror("FAILED TO SEND VIA EMAILJS:", err);
      setError(`❌ Error sending message: ${err.message}. Please try again or call us.`);
    } finally {
      setSending(false);
    }
  };

  const v = (id: string) => (visibleSections[id] ? " vis" : "");
  const navLinks = [
    { id: "home", l: t.nav.home },
    { id: "night", l: t.nav.night },
    { id: "services", l: t.nav.services },
    { id: "quote", l: t.nav.quote },
    { id: "contact", l: t.nav.contact },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar
        lang={lang}
        setLang={setLang}
        menu={menu}
        setMenu={setMenu}
        activeSection={activeSection}
        navLinks={navLinks}
        go={go}
        t={t}
      />

      {/* HERO */}
      <Section
        id="home"
        style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}
        bgImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
        overlay="linear-gradient(135deg,rgba(7,14,40,.87) 0%,rgba(13,27,75,.80) 55%,rgba(10,20,60,.78) 100%)"
      >
        <div className="dot" style={{ left: 100, top: 180, width: 12, height: 12, animationDelay: "0s" }} />
        <div className="dot" style={{ left: 320, top: 140, width: 7, height: 7, animationDelay: "1.2s" }} />
        <div className="dot" style={{ left: 680, top: 260, width: 9, height: 9, animationDelay: "0.6s" }} />
        <div className="dot" style={{ left: 900, top: 120, width: 6, height: 6, animationDelay: "2s" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "110px 18px 80px", width: "100%", position: "relative", zIndex: 4 }}>
          <div className="s" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(201,168,76,.14)", border: "1px solid rgba(201,168,76,.38)", color: "var(--gold)", padding: "8px 18px", fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 28 }}>
            📍 {t.hero.badge}
          </div>
          <h1 style={{ fontSize: "clamp(38px,7vw,72px)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: 20, maxWidth: 700 }}>
            {t.hero.title}
            <br />
            <span className="gs">{t.hero.hi}</span>
          </h1>
          <p className="s" style={{ fontSize: "clamp(15px,2.2vw,17px)", color: "rgba(255,255,255,.73)", maxWidth: 520, lineHeight: 1.82, marginBottom: 42 }}>
            {t.hero.sub}
          </p>
          <div className="hb2" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="bg" onClick={() => go("quote")}>
              {t.hero.cta}
            </button>
            <button className="bo" onClick={() => go("services")}>
              {t.hero.cta2}
            </button>
          </div>
          <div style={{ marginTop: 56, display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[[t.hero.t1, "🏢"], [t.hero.t2, "📍"], [t.hero.t3, "⭐"]].map(([txt, ic], i) => (
              <div key={i} className="s" style={{ color: "rgba(255,255,255,.55)", fontSize: 13, display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,.06)", backdropFilter: "blur(8px)", padding: "8px 14px", border: "1px solid rgba(255,255,255,.1)" }}>
                <span>{ic}</span>
                {txt}
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(transparent,#f8f6f1)", zIndex: 5, pointerEvents: "none" }} />
      </Section>

      {/* CLIENTS / TRUSTED BY */}
      <section style={{ background: "#f8f6f1", padding: "40px 18px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div className="s" style={{ color: "var(--gold)", fontSize: 10, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 24 }}>
            — {t.clientsTitle} —
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "clamp(30px, 8vw, 60px)", opacity: 0.8 }}>
            <img src="logo-lacage.jpg" alt="La Cage" style={{ height: "clamp(35px, 6vw, 50px)", width: "auto", objectFit: "contain" }} />
            <img src="logo-caffuccino.jpg" alt="Caffuccino" style={{ height: "clamp(35px, 6vw, 50px)", width: "auto", objectFit: "contain" }} />
            <img src="logo-eggsquis.jpg" alt="Eggsquis" style={{ height: "clamp(30px, 5vw, 45px)", width: "auto", objectFit: "contain" }} />
          </div>
        </div>
      </section>

      {/* NIGHT */}
      <Section
        id="night"
        className="p"
        bgImage="https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1600&q=80"
        overlay="linear-gradient(135deg,rgba(4,8,24,.93) 0%,rgba(7,14,40,.90) 60%,rgba(13,27,75,.88) 100%)"
        style={{ padding: "92px 18px" }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className={`s fu${v("night")} d0`} style={{ color: "var(--gold)", fontSize: 10, fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", marginBottom: 12 }}>
              🌙 — {t.night.ey} — 🌙
            </div>
            <h2 className={`fu${v("night")} d1`} style={{ fontSize: "clamp(26px,5vw,50px)", fontWeight: 900, color: "white", lineHeight: 1.15, marginBottom: 8 }}>
              {t.night.title}
              <br />
              <em className="gs">{t.night.hi}</em>
            </h2>
            <p className={`s fu${v("night")} d2`} style={{ color: "rgba(255,255,255,.62)", fontSize: "clamp(13px,2vw,16px)", maxWidth: 560, margin: "14px auto 0", lineHeight: 1.82 }}>
              {t.night.desc}
            </p>
          </div>
          <div className="gn" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14, marginBottom: 44 }}>
            {t.night.cards.map((c, i) => (
              <div key={i} className={`gc fu${v("night")} d${i + 1}`} style={{ padding: "28px 24px" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: "clamp(15px,2.2vw,19px)", fontWeight: 700, color: "white", marginBottom: 9 }}>{c.title}</h3>
                <p className="s" style={{ color: "rgba(255,255,255,.6)", fontSize: 14, lineHeight: 1.75 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
          <div className={`fu${v("night")} d5`} style={{ textAlign: "center", padding: "36px 24px", background: "rgba(201,168,76,.08)", border: "1px solid rgba(201,168,76,.3)", backdropFilter: "blur(12px)" }}>
            <p style={{ fontSize: "clamp(17px,2.8vw,24px)", fontWeight: 700, fontStyle: "italic", color: "white", lineHeight: 1.5, maxWidth: 620, margin: "0 auto" }}>{t.night.quote}</p>
            <div className="gl" style={{ width: 55, marginTop: 22 }} />
            <div style={{ marginTop: 26 }}>
              <button className="bg" onClick={() => go("quote")}>
                {t.night.cta} →
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="services"
        className="p"
        isLight
        bgImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
        style={{ padding: "92px 18px" }}
      >
        <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className={`s fu${v("services")} d0`} style={{ color: "var(--gold)", fontSize: 10, fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", marginBottom: 12 }}>
              — {t.svc.title} —
            </div>
            <h2 className={`fu${v("services")} d1`} style={{ fontSize: "clamp(26px,5vw,46px)", fontWeight: 900, color: "var(--navy)" }}>
              {t.svc.title}
            </h2>
            <p className={`s fu${v("services")} d2`} style={{ color: "var(--muted)", fontSize: "clamp(13px,2vw,16px)", marginTop: 9 }}>
              {t.svc.sub}
            </p>
            <div className="gl" style={{ width: 65, marginTop: 18 }} />
          </div>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {t.svc.items.map((s, i) => (
              <div key={i} className={`gw fu${v("services")} d${i + 1}`} style={{ padding: "30px 24px" }}>
                <div style={{ fontSize: 34, marginBottom: 13 }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(15px,2vw,19px)", fontWeight: 700, color: "var(--navy)", marginBottom: 9 }}>{s.title}</h3>
                <p className="s" style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: 14 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY */}
      <Section
        id="why"
        className="p"
        bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
        overlay="linear-gradient(135deg,rgba(13,27,75,.91) 0%,rgba(7,14,40,.90) 100%)"
        style={{ padding: "92px 18px" }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className={`s fu${v("why")} d0`} style={{ color: "var(--gold)", fontSize: 10, fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", marginBottom: 12 }}>
              — Notre force —
            </div>
            <h2 className={`fu${v("why")} d1`} style={{ fontSize: "clamp(26px,5vw,46px)", fontWeight: 900, color: "white" }}>
              {t.why.title}
            </h2>
            <p className={`s fu${v("why")} d2`} style={{ color: "rgba(255,255,255,.55)", fontSize: "clamp(13px,2vw,16px)", marginTop: 9 }}>
              {t.why.sub}
            </p>
          </div>
          <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 36 }}>
            {t.why.stats.map((s, i) => (
              <div key={i} className={`gc fu${v("why")} d${i + 1}`} style={{ textAlign: "center", padding: "30px 12px" }}>
                <div className="sn" style={{ fontSize: "clamp(30px,4.5vw,50px)", fontWeight: 900, color: "var(--gold)", fontFamily: "Playfair Display,serif", lineHeight: 1 }}>
                  {s.n}
                </div>
                <div className="s" style={{ color: "rgba(255,255,255,.62)", fontSize: 12, marginTop: 9, fontWeight: 500, lineHeight: 1.4 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <div className="gc" style={{ padding: "clamp(22px,4vw,40px)" }}>
            <div className="wp" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {t.why.pts.map((p, i) => (
                <div key={i} className="s" style={{ display: "flex", alignItems: "center", gap: 11, color: "rgba(255,255,255,.85)", fontSize: "clamp(12px,2vw,14px)" }}>
                  <div style={{ width: 24, height: 24, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0, fontWeight: 700, color: "var(--navy)" }}>✓</div>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* QUOTE */}
      <Section
        id="quote"
        className="p"
        isLight
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        style={{ padding: "92px 18px" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className={`s fu${v("quote")} d0`} style={{ color: "var(--gold)", fontSize: 10, fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", marginBottom: 12 }}>
              — {t.form.title} —
            </div>
            <h2 className={`fu${v("quote")} d1`} style={{ fontSize: "clamp(26px,5vw,46px)", fontWeight: 900, color: "var(--navy)" }}>
              {t.form.title}
            </h2>
            <p className={`s fu${v("quote")} d2`} style={{ color: "var(--muted)", fontSize: "clamp(13px,2vw,16px)", marginTop: 9 }}>
              {t.form.sub}
            </p>
            <div className="gl" style={{ width: 65, marginTop: 18 }} />
          </div>
          {sent ? (
            <div style={{ background: "rgba(212,237,218,.97)", border: "1px solid #c3e6cb", padding: "clamp(18px,4vw,32px)", textAlign: "center" }}>
              <p className="s" style={{ fontSize: 16, color: "#155724", fontWeight: 600 }}>
                {t.form.ok}
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="fi" style={{ background: "rgba(255,255,255,.95)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", padding: "clamp(22px,5vw,48px)", boxShadow: "0 24px 64px rgba(0,0,0,.12)", border: "1px solid rgba(255,255,255,.7)" }}>
              <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <div className="fg">
                  <label>{t.form.name} *</label>
                  <input name="name" value={fd.name} onChange={ch} required placeholder="Jean Tremblay" />
                </div>
                <div className="fg">
                  <label>{t.form.email} *</label>
                  <input name="email" type="email" value={fd.email} onChange={ch} required placeholder="jean@exemple.com" />
                </div>
                <div className="fg">
                  <label>{t.form.phone}</label>
                  <input name="phone" value={fd.phone} onChange={ch} placeholder="819 000-0000" />
                </div>
                <div className="fg">
                  <label>{t.form.type} *</label>
                  <select name="type" value={fd.type} onChange={ch} required>
                    <option value="">— Sélectionner / Select —</option>
                    {t.form.types.map((o, i) => (
                      <option key={i} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="fg">
                <label>{t.form.addr}</label>
                <input name="addr" value={fd.addr} onChange={ch} placeholder="123 Rue Principale, Sherbrooke, QC" />
              </div>
              <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <div className="fg">
                  <label>{t.form.size}</label>
                  <input name="size" value={fd.size} onChange={ch} placeholder="ex: 2000" type="number" />
                </div>
                <div className="fg">
                  <label>{t.form.freq}</label>
                  <select name="freq" value={fd.freq} onChange={ch}>
                    <option value="">— Sélectionner / Select —</option>
                    {t.form.freqs.map((o, i) => (
                      <option key={i} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="fg">
                <label>{t.form.det}</label>
                <textarea name="det" value={fd.det} onChange={ch} rows={4} placeholder={t.form.ph} />
              </div>
              {error && <p className="s" style={{ color: "#721c24", fontSize: 13, marginBottom: 14 }}>{error}</p>}
              <div style={{ textAlign: "center", marginTop: 6 }}>
                <button type="submit" className="bg" disabled={sending} style={{ fontSize: 15, padding: "15px 44px", width: "100%", maxWidth: 320 }}>
                  {sending ? t.form.sending : t.form.send}
                </button>
                <p className="s" style={{ color: "var(--muted)", fontSize: 12, marginTop: 12 }}>
                  📧 {MAIL} &nbsp;|&nbsp; 📞 819 432-6709
                </p>
              </div>
            </form>
          )}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        className="p"
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
        overlay="linear-gradient(135deg,rgba(13,27,75,.92) 0%,rgba(7,14,40,.90) 100%)"
        style={{ padding: "92px 18px" }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className={`s fu${v("contact")} d0`} style={{ color: "var(--gold)", fontSize: 10, fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", marginBottom: 12 }}>
              — {t.contact.title} —
            </div>
            <h2 className={`fu${v("contact")} d1`} style={{ fontSize: "clamp(26px,5vw,46px)", fontWeight: 900, color: "white" }}>
              {t.contact.title}
            </h2>
            <p className={`s fu${v("contact")} d2`} style={{ color: "rgba(255,255,255,.55)", fontSize: "clamp(13px,2vw,16px)", marginTop: 9 }}>
              {t.contact.sub}
            </p>
          </div>
          <div className="cg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>
            {[
              { icon: "📞", label: t.contact.phone, val: "819 432-6709", href: "tel:8194326709" },
              { icon: "📧", label: t.contact.email, val: MAIL, href: `mailto:${MAIL}` },
              { icon: "📍", label: t.contact.zones, val: t.contact.zonesV, href: null },
              { icon: "🌙", label: t.contact.hours, val: t.contact.hoursV, sub: t.contact.hoursN, href: null },
            ].map((c, i) => (
              <div key={i} className={`gc fu${v("contact")} d${i + 1}`} style={{ padding: "24px 20px", borderLeft: "4px solid var(--gold)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 13 }}>
                  <span style={{ fontSize: 24, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
                  <div>
                    <div className="s" style={{ color: "var(--gold)", fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 5 }}>
                      {c.label}
                    </div>
                    {c.href ? (
                      <a href={c.href} className="s" style={{ color: "white", fontSize: 15, fontWeight: 700, textDecoration: "none", display: "block", wordBreak: "break-all" }}>
                        {c.val}
                      </a>
                    ) : (
                      <div className="s" style={{ color: "white", fontSize: 14, fontWeight: 600 }}>
                        {c.val}
                      </div>
                    )}
                    {c.sub && <div className="s" style={{ color: "rgba(255,255,255,.42)", fontSize: 11, marginTop: 3 }}>{c.sub}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button className="bg" style={{ fontSize: 15, padding: "16px 48px" }} onClick={() => go("quote")}>
              {t.nav.quote} →
            </button>
          </div>
        </div>
      </Section>

      <Footer t={t} MAIL={MAIL} />
    </div>
  );
}
