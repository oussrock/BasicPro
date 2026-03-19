import { FooterTranslations } from '../constants/translations';

interface FooterProps {
  t: { footer: FooterTranslations };
  MAIL: string;
}

export function Footer({ t, MAIL }: FooterProps) {
  return (
    <footer style={{ background: "#040a1a", padding: "40px 18px", borderTop: "1px solid rgba(201,168,76,.18)" }}>
      <div className="ft" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 18 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 7 }}>
            <div style={{ width: 28, height: 28, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "var(--navy)", boxShadow: "0 0 12px rgba(201,168,76,.4)" }}>B</div>
            <span style={{ color: "white", fontWeight: 700, fontSize: 15, letterSpacing: ".06em" }}>BASIC.PRO-NET</span>
          </div>
          <p className="s" style={{ color: "rgba(255,255,255,.3)", fontSize: 12 }}>
            {t.footer.tag}
          </p>
        </div>
        <div className="s" style={{ color: "rgba(255,255,255,.26)", fontSize: 11, textAlign: "right" }}>
          <div style={{ marginBottom: 3 }}>
            <a href="tel:8194326709" style={{ color: "rgba(255,255,255,.45)", textDecoration: "none" }}>
              819 432-6709
            </a>
            {" · "}
            <a href={`mailto:${MAIL}`} style={{ color: "rgba(255,255,255,.45)", textDecoration: "none" }}>
              {MAIL}
            </a>
          </div>
          <div>
            basicpro.net · © {new Date().getFullYear()} Basic.Pro-Net. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
