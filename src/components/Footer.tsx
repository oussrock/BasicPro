import { FooterTranslations } from '../constants/translations';

interface FooterProps {
  t: { footer: FooterTranslations };
  MAIL: string;
}

export function Footer({ t, MAIL }: FooterProps) {
  return (
    <footer style={{ background: "#040a1a", padding: "60px 18px 40px", borderTop: "1px solid rgba(201,168,76,.18)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* ZONES DESSERVIES / SERVICE AREAS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 48, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: 13, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Sherbrooke</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {t.footer.zones.sherbrooke.map(z => <li key={z} style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 6 }}>{z}</li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: 13, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Magog</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {t.footer.zones.magog.map(z => <li key={z} style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 6 }}>{z}</li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: 13, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Estrie</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {t.footer.zones.others.map(z => <li key={z} style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 6 }}>{z}</li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: 13, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Contact</h4>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 6 }}>📞 819 432-6709</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 6 }}>📧 {MAIL}</p>
          </div>
        </div>

        <div className="ft" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 18 }}>
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
            <div>
              basicpro.net · © {new Date().getFullYear()} Basic.Pro-Net. {t.footer.rights}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
