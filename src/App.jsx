import { useState, useEffect } from "react";

const T = {
  fr: {
    nav: { home:"Accueil", services:"Services", night:"On travaille la nuit", contact:"Contact", quote:"Soumission gratuite" },
    hero: {
      badge:"Sherbrooke & Magog", title:"L'excellence du", hi:"nettoyage professionnel",
      sub:"Des espaces impeccables pour vos restaurants, bureaux et institutions. Qualité garantie, résultats remarquables.",
      cta:"Soumission gratuite", cta2:"Nos services",
      t1:"Restaurants & Bureaux", t2:"Sherbrooke & Magog", t3:"Satisfaction garantie",
    },
    night: {
      ey:"Notre promesse", title:"Vous partez. On s'occupe du reste.", hi:"Revenez à un espace parfait.",
      desc:"Nous intervenons quand votre établissement est fermé — tôt le matin, tard le soir, la nuit — pour que tout soit impeccable à votre arrivée.",
      cards:[
        { icon:"🌙", title:"On travaille pendant que vous dormez", desc:"Notre équipe commence dès 4h du matin. Quand vous ouvrez vos portes, tout brille déjà." },
        { icon:"🍽️", title:"Votre restaurant, prêt pour le service", desc:"Cuisines, salles à manger, vestiaires — tout nettoyé et désinfecté avant votre premier client." },
        { icon:"🏢", title:"Votre bureau, propre avant 9h", desc:"Vos employés arrivent dans un espace frais et sain, sans jamais croiser notre équipe." },
        { icon:"🔑", title:"Zéro interruption pour vous", desc:"Discrets, fiables et ponctuels. Vous nous faites confiance avec vos clés — nous le méritons." },
      ],
      quote:"« Vous revenez le matin et votre espace est impeccable. C'est notre engagement. »",
      cta:"Planifier mon service nocturne",
    },
    svc: {
      title:"Nos Services", sub:"Des solutions complètes pour chaque espace",
      items:[
        { icon:"🏢", title:"Bureaux & Commerces", desc:"Entretien régulier et en profondeur de vos espaces de travail. Environnement sain, employés productifs." },
        { icon:"🍽️", title:"Restaurants", desc:"Nettoyage spécialisé : cuisines, salles à manger, normes sanitaires strictement respectées." },
        { icon:"🏠", title:"Résidentiel", desc:"Votre domicile mérite le meilleur. Service personnalisé, discret et de confiance." },
        { icon:"🏛️", title:"Institutions", desc:"Hôpitaux, écoles, centres communautaires — nous gérons les environnements les plus exigeants." },
        { icon:"✨", title:"Nettoyage en profondeur", desc:"Décapage, cirage de planchers, nettoyage de vitres et bien plus pour un résultat impeccable." },
        { icon:"🌿", title:"Produits écologiques", desc:"Options de produits respectueux de l'environnement disponibles sur demande." },
      ],
    },
    why: {
      title:"Pourquoi nous choisir?", sub:"Plus de satisfaction, moins de tracas",
      stats:[{n:"10+",l:"Années d'expérience"},{n:"200+",l:"Clients satisfaits"},{n:"100%",l:"Satisfaction garantie"},{n:"4h",l:"On commence à 4h AM"}],
      pts:["Équipe professionnelle et fiable","Produits de qualité supérieure","Horaires flexibles selon vos besoins","Estimation gratuite sans engagement","Assurés et certifiés","Service dans Sherbrooke & Magog"],
    },
    form: {
      title:"Soumission gratuite", sub:"Remplissez le formulaire et nous vous répondrons dans les 24 heures",
      name:"Nom complet", email:"Adresse courriel", phone:"Numéro de téléphone",
      addr:"Adresse du lieu à nettoyer", type:"Type de service",
      types:["Bureaux / Commerce","Restaurant","Résidentiel","Institution","Autre"],
      size:"Superficie approximative (pi²)", freq:"Fréquence souhaitée",
      freqs:["Une fois","Hebdomadaire","Bi-hebdomadaire","Mensuel","À définir"],
      det:"Détails supplémentaires", ph:"Décrivez vos besoins, horaires préférés (nuit, matin), etc.",
      send:"Envoyer ma demande", sending:"Envoi en cours...",
      ok:"✅ Votre demande a été envoyée! Nous vous contacterons sous 24h.",
    },
    contact: {
      title:"Contactez-nous", sub:"Nous sommes là pour vous",
      phone:"Téléphone", email:"Courriel", zones:"Zones desservies", zonesV:"Sherbrooke & Magog et environs",
      hours:"Heures d'opération", hoursV:"Lun–Ven: 4h–20h | Sam: 4h–17h",
      hoursN:"Interventions nocturnes disponibles sur entente",
    },
    footer:{ tag:"L'entretien ménager professionnel à votre service.", rights:"Tous droits réservés." },
  },
  en: {
    nav:{ home:"Home", services:"Services", night:"We Work Nights", contact:"Contact", quote:"Free Quote" },
    hero:{
      badge:"Sherbrooke & Magog", title:"The excellence of", hi:"professional cleaning",
      sub:"Spotless spaces for your restaurants, offices, and institutions. Guaranteed quality, remarkable results.",
      cta:"Get a Free Quote", cta2:"Our Services",
      t1:"Restaurants & Offices", t2:"Sherbrooke & Magog", t3:"Satisfaction Guaranteed",
    },
    night:{
      ey:"Our Promise", title:"You leave. We handle the rest.", hi:"Come back to perfection.",
      desc:"We step in while your business is closed — early mornings, late evenings, overnight — so everything is spotless when you arrive.",
      cards:[
        { icon:"🌙", title:"We work while you sleep", desc:"Our team starts as early as 4 AM. When you open your doors, everything is already sparkling." },
        { icon:"🍽️", title:"Your restaurant, ready for service", desc:"Kitchens, dining rooms, washrooms — cleaned and sanitized before your first customer walks in." },
        { icon:"🏢", title:"Your office, fresh before 9 AM", desc:"Your employees arrive to a clean, healthy space — without ever crossing paths with our team." },
        { icon:"🔑", title:"Zero disruption for you", desc:"Discreet, reliable, and punctual. You trust us with your keys — we earn every bit of that trust." },
      ],
      quote:"\"You come back in the morning and your space is perfect. That's our commitment.\"",
      cta:"Schedule my overnight service",
    },
    svc:{
      title:"Our Services", sub:"Complete solutions for every space",
      items:[
        { icon:"🏢", title:"Offices & Commercial", desc:"Regular and deep cleaning of your workspaces. Healthy environment, productive employees." },
        { icon:"🍽️", title:"Restaurants", desc:"Specialized restaurant cleaning: kitchens, dining rooms, strict sanitary standards always met." },
        { icon:"🏠", title:"Residential", desc:"Your home deserves the best. Personalized, discreet, and trusted service for your house." },
        { icon:"🏛️", title:"Institutions", desc:"Hospitals, schools, community centres — we handle the most demanding environments." },
        { icon:"✨", title:"Deep Cleaning", desc:"Stripping, floor waxing, window cleaning and much more for a flawless result." },
        { icon:"🌿", title:"Eco-Friendly Options", desc:"Environmentally respectful product options available upon request." },
      ],
    },
    why:{
      title:"Why choose us?", sub:"More satisfaction, less hassle",
      stats:[{n:"10+",l:"Years of Experience"},{n:"200+",l:"Happy Clients"},{n:"100%",l:"Satisfaction Guaranteed"},{n:"4AM",l:"We start at 4 AM"}],
      pts:["Professional and reliable team","Top-quality products","Flexible schedules to fit your needs","Free estimate with no commitment","Insured and certified","Serving Sherbrooke & Magog"],
    },
    form:{
      title:"Free Estimate", sub:"Fill out the form and we'll get back to you within 24 hours",
      name:"Full Name", email:"Email Address", phone:"Phone Number",
      addr:"Address of the space to clean", type:"Service Type",
      types:["Office / Commercial","Restaurant","Residential","Institution","Other"],
      size:"Approximate size (sq ft)", freq:"Desired frequency",
      freqs:["One time","Weekly","Bi-weekly","Monthly","To be determined"],
      det:"Additional details", ph:"Describe your specific needs, preferred schedule (night, early morning), etc.",
      send:"Send my request", sending:"Sending...",
      ok:"✅ Your request has been sent! We'll contact you within 24h.",
    },
    contact:{
      title:"Contact Us", sub:"We're here for you",
      phone:"Phone", email:"Email", zones:"Service Areas", zonesV:"Sherbrooke & Magog and surroundings",
      hours:"Operating Hours", hoursV:"Mon–Fri: 4AM–8PM | Sat: 4AM–5PM",
      hoursN:"Overnight services available by arrangement",
    },
    footer:{ tag:"Professional cleaning services at your service.", rights:"All rights reserved." },
  },
};

const MAIL = "almirbasic@live.ca";

export default function App() {
  const [lang, setLang] = useState("fr");
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [vis, setVis] = useState({});
  const [fd, setFd] = useState({ name:"",email:"",phone:"",addr:"",type:"",size:"",freq:"",det:"" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const t = T[lang];

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { setVis(v => ({...v,[e.target.id]:true})); setActive(e.target.id); } }),
      { threshold: 0.07 }
    );
    document.querySelectorAll("section[id]").forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenu(false); };
  const ch = e => setFd(f => ({...f,[e.target.name]:e.target.value}));
  const submit = e => {
    e.preventDefault(); setSending(true);
    const s = encodeURIComponent(`[BasicPro-Net] Soumission – ${fd.name}`);
    const b = encodeURIComponent(`Nom: ${fd.name}\nEmail: ${fd.email}\nTél: ${fd.phone}\nAdresse: ${fd.addr}\nService: ${fd.type}\nSuperficie: ${fd.size}\nFréquence: ${fd.freq}\n\nDétails:\n${fd.det}`);
    window.location.href = `mailto:${MAIL}?subject=${s}&body=${b}`;
    setTimeout(() => { setSending(false); setSent(true); setFd({name:"",email:"",phone:"",addr:"",type:"",size:"",freq:"",det:""}); }, 900);
  };

  const v = id => vis[id] ? " vis" : "";
  const navLinks = [{id:"home",l:t.nav.home},{id:"night",l:t.nav.night},{id:"services",l:t.nav.services},{id:"quote",l:t.nav.quote},{id:"contact",l:t.nav.contact}];

  // Inline section style with bg image + overlay
  const secBg = (img, overlay, extra={}) => ({
    position:"relative", overflow:"hidden", ...extra,
    backgroundImage: `${overlay}, url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  });

  // Light section style (cream bg with subtle image behind overlay)
  const secBgLight = (img, extra={}) => ({
    position:"relative", overflow:"hidden", ...extra,
    backgroundImage: `linear-gradient(rgba(248,246,241,0.91), rgba(235,229,215,0.93)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (
    <div style={{ fontFamily:"'Playfair Display',Georgia,serif", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{overflow-x:hidden;-webkit-text-size-adjust:100%}
        :root{--navy:#0d1b4b;--gold:#c9a84c;--cream:#f8f6f1;--dark:#070e28;--muted:#6b7280}
        .s{font-family:'DM Sans',sans-serif}

        /* Fade-up animation */
        .fu{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease}
        .fu.vis{opacity:1;transform:translateY(0)}
        .d0{transition-delay:0s}.d1{transition-delay:.12s}.d2{transition-delay:.22s}
        .d3{transition-delay:.32s}.d4{transition-delay:.42s}.d5{transition-delay:.52s}.d6{transition-delay:.62s}

        /* Gold shimmer */
        @keyframes shimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .gs{background:linear-gradient(90deg,#c9a84c,#f5d87a,#c9a84c,#9a7020);background-size:300%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3.5s ease infinite}

        /* Floating dots */
        @keyframes fl{0%,100%{transform:translateY(0);opacity:.5}50%{transform:translateY(-16px);opacity:1}}
        .dot{position:absolute;border-radius:50%;background:rgba(201,168,76,.35);animation:fl 5s ease-in-out infinite;pointer-events:none;z-index:3}

        /* Buttons */
        .bg{background:var(--gold);color:var(--navy);padding:14px 30px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:700;font-size:14px;letter-spacing:.07em;text-transform:uppercase;transition:all .25s;white-space:nowrap;display:inline-block}
        .bg:hover{background:#b8922f;transform:translateY(-2px);box-shadow:0 8px 28px rgba(201,168,76,.5)}
        .bo{background:rgba(255,255,255,.08);color:white;padding:14px 30px;border:2px solid rgba(255,255,255,.5);cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:500;font-size:14px;letter-spacing:.07em;text-transform:uppercase;transition:all .25s;white-space:nowrap}
        .bo:hover{background:rgba(255,255,255,.18);border-color:white}

        /* Nav */
        .nl{cursor:pointer;transition:color .2s;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;letter-spacing:.04em}
        .nl:hover{color:var(--gold)!important}
        .na{color:var(--gold)!important}

        /* Glass cards */
        .gc{background:rgba(255,255,255,.1);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.2);transition:all .3s}
        .gc:hover{background:rgba(255,255,255,.18);border-color:rgba(201,168,76,.6);transform:translateY(-5px)}
        .gw{background:rgba(255,255,255,.93);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.7);box-shadow:0 8px 32px rgba(0,0,0,.1);transition:all .3s}
        .gw:hover{box-shadow:0 20px 48px rgba(0,0,0,.15);transform:translateY(-5px);border-bottom:3px solid var(--gold)}

        /* Form inputs */
        input,select,textarea{width:100%;padding:13px 15px;border:1.5px solid #d1cdc4;background:rgba(255,255,255,.97);font-family:'DM Sans',sans-serif;font-size:15px;color:#2c2c3e;outline:none;transition:border-color .2s,box-shadow .2s;border-radius:0;-webkit-appearance:none;appearance:none}
        input:focus,select:focus,textarea:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(201,168,76,.13)}
        label{font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:6px}
        .fg{margin-bottom:18px}

        /* Divider */
        .gl{height:1.5px;background:linear-gradient(90deg,transparent,var(--gold),transparent);margin:0 auto}

        /* Hamburger */
        .hb{display:none;background:none;border:none;cursor:pointer;padding:6px;flex-direction:column;gap:5px}
        .hb span{display:block;width:24px;height:2px;background:white;border-radius:2px;transition:all .3s}

        @media(max-width:900px){.dn{display:none!important}.hb{display:flex!important}}
        @media(max-width:768px){
          .p{padding:64px 18px!important}
          .g2,.g3,.gn{grid-template-columns:1fr!important}
          .g4{grid-template-columns:1fr 1fr!important}
          .hb2{flex-direction:column!important}
          .hb2 button{width:100%;text-align:center}
          .fi{padding:22px 18px!important}
          .wp{grid-template-columns:1fr!important}
          .cg{grid-template-columns:1fr!important}
          .ft{flex-direction:column!important;align-items:flex-start!important}
        }
        @media(max-width:480px){.sn{font-size:32px!important}}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:300,background:"rgba(7,14,40,0.88)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(201,168,76,.2)" }}>
        <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 18px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64 }}>
          <div style={{ cursor:"pointer",display:"flex",alignItems:"center",gap:10,flexShrink:0 }} onClick={() => go("home")}>
            <div style={{ width:34,height:34,background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:15,color:"var(--navy)",boxShadow:"0 0 14px rgba(201,168,76,.45)" }}>B</div>
            <div>
              <div style={{ color:"white",fontWeight:700,fontSize:15,letterSpacing:".06em",lineHeight:1.1 }}>BASIC.PRO-NET</div>
              <div className="s" style={{ color:"var(--gold)",fontSize:9,letterSpacing:".22em",textTransform:"uppercase" }}>Entretien Ménager</div>
            </div>
          </div>
          <div className="dn" style={{ display:"flex",alignItems:"center",gap:26 }}>
            {navLinks.map(l => <span key={l.id} className={`nl ${active===l.id?"na":""}`} style={{ color:"rgba(255,255,255,.8)" }} onClick={() => go(l.id)}>{l.l}</span>)}
          </div>
          <div style={{ display:"flex",alignItems:"center",gap:8 }}>
            {["fr","en"].map(lc => (
              <button key={lc} className="s" style={{ color:lang===lc?"var(--gold)":"rgba(255,255,255,.4)",background:lang===lc?"rgba(201,168,76,.12)":"transparent",border:`1.5px solid ${lang===lc?"var(--gold)":"rgba(255,255,255,.2)"}`,padding:"5px 11px",cursor:"pointer",fontSize:11,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",transition:"all .2s" }} onClick={() => setLang(lc)}>{lc}</button>
            ))}
            <button className="hb" onClick={() => setMenu(m=>!m)} aria-label="Menu">
              <span style={{ transform:menu?"rotate(45deg) translate(5px,5px)":"none" }} />
              <span style={{ opacity:menu?0:1 }} />
              <span style={{ transform:menu?"rotate(-45deg) translate(5px,-5px)":"none" }} />
            </button>
          </div>
        </div>
        {menu && (
          <div style={{ background:"rgba(7,14,40,.97)",borderTop:"1px solid rgba(255,255,255,.07)" }}>
            {navLinks.map(l => <div key={l.id} className="s" style={{ color:"rgba(255,255,255,.88)",padding:"15px 22px",cursor:"pointer",fontSize:15,borderBottom:"1px solid rgba(255,255,255,.06)",borderLeft:active===l.id?"3px solid var(--gold)":"3px solid transparent",fontWeight:active===l.id?700:400 }} onClick={() => go(l.id)}>{l.l}</div>)}
            <div style={{ padding:"16px 22px" }}><button className="bg" style={{ width:"100%",textAlign:"center" }} onClick={() => go("quote")}>{t.nav.quote}</button></div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{
        ...secBg(
          "https://picsum.photos/id/1067/1600/900",
          "linear-gradient(135deg,rgba(7,14,40,.87) 0%,rgba(13,27,75,.80) 55%,rgba(10,20,60,.78) 100%)"
        ),
        minHeight:"100svh", display:"flex", alignItems:"center"
      }}>
        <div className="dot" style={{ left:100,top:180,width:12,height:12,animationDelay:"0s" }} />
        <div className="dot" style={{ left:320,top:140,width:7,height:7,animationDelay:"1.2s" }} />
        <div className="dot" style={{ left:680,top:260,width:9,height:9,animationDelay:"0.6s" }} />
        <div className="dot" style={{ left:900,top:120,width:6,height:6,animationDelay:"2s" }} />
        <div style={{ maxWidth:1200,margin:"0 auto",padding:"110px 18px 80px",width:"100%",position:"relative",zIndex:4 }}>
          <div className="s" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(201,168,76,.14)",border:"1px solid rgba(201,168,76,.38)",color:"var(--gold)",padding:"8px 18px",fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:28 }}>
            📍 {t.hero.badge}
          </div>
          <h1 style={{ fontSize:"clamp(38px,7vw,72px)",fontWeight:900,color:"white",lineHeight:1.1,marginBottom:20,maxWidth:700 }}>
            {t.hero.title}<br /><span className="gs">{t.hero.hi}</span>
          </h1>
          <p className="s" style={{ fontSize:"clamp(15px,2.2vw,17px)",color:"rgba(255,255,255,.73)",maxWidth:520,lineHeight:1.82,marginBottom:42 }}>{t.hero.sub}</p>
          <div className="hb2" style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
            <button className="bg" onClick={() => go("quote")}>{t.hero.cta}</button>
            <button className="bo" onClick={() => go("services")}>{t.hero.cta2}</button>
          </div>
          <div style={{ marginTop:56,display:"flex",gap:16,flexWrap:"wrap" }}>
            {[[t.hero.t1,"🏢"],[t.hero.t2,"📍"],[t.hero.t3,"⭐"]].map(([txt,ic],i) => (
              <div key={i} className="s" style={{ color:"rgba(255,255,255,.55)",fontSize:13,display:"flex",alignItems:"center",gap:7,background:"rgba(255,255,255,.06)",backdropFilter:"blur(8px)",padding:"8px 14px",border:"1px solid rgba(255,255,255,.1)" }}>
                <span>{ic}</span>{txt}
              </div>
            ))}
          </div>
        </div>
        <div style={{ position:"absolute",bottom:0,left:0,right:0,height:80,background:"linear-gradient(transparent,#f8f6f1)",zIndex:5,pointerEvents:"none" }} />
      </section>

      {/* NIGHT */}
      <section id="night" className="p" style={{
        ...secBg(
          "https://picsum.photos/id/1040/1600/900",
          "linear-gradient(135deg,rgba(4,8,24,.93) 0%,rgba(7,14,40,.90) 60%,rgba(13,27,75,.88) 100%)"
        ),
        padding:"92px 18px"
      }}>
        <div style={{ maxWidth:1080,margin:"0 auto",position:"relative",zIndex:2 }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <div className={`s fu${v("night")} d0`} style={{ color:"var(--gold)",fontSize:10,fontWeight:700,letterSpacing:".28em",textTransform:"uppercase",marginBottom:12 }}>🌙 — {t.night.ey} — 🌙</div>
            <h2 className={`fu${v("night")} d1`} style={{ fontSize:"clamp(26px,5vw,50px)",fontWeight:900,color:"white",lineHeight:1.15,marginBottom:8 }}>
              {t.night.title}<br /><em className="gs">{t.night.hi}</em>
            </h2>
            <p className={`s fu${v("night")} d2`} style={{ color:"rgba(255,255,255,.62)",fontSize:"clamp(13px,2vw,16px)",maxWidth:560,margin:"14px auto 0",lineHeight:1.82 }}>{t.night.desc}</p>
          </div>
          <div className="gn" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14,marginBottom:44 }}>
            {t.night.cards.map((c,i) => (
              <div key={i} className={`gc fu${v("night")} d${i+1}`} style={{ padding:"28px 24px" }}>
                <div style={{ fontSize:32,marginBottom:12 }}>{c.icon}</div>
                <h3 style={{ fontSize:"clamp(15px,2.2vw,19px)",fontWeight:700,color:"white",marginBottom:9 }}>{c.title}</h3>
                <p className="s" style={{ color:"rgba(255,255,255,.6)",fontSize:14,lineHeight:1.75 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className={`fu${v("night")} d5`} style={{ textAlign:"center",padding:"36px 24px",background:"rgba(201,168,76,.08)",border:"1px solid rgba(201,168,76,.3)",backdropFilter:"blur(12px)" }}>
            <p style={{ fontSize:"clamp(17px,2.8vw,24px)",fontWeight:700,fontStyle:"italic",color:"white",lineHeight:1.5,maxWidth:620,margin:"0 auto" }}>{t.night.quote}</p>
            <div className="gl" style={{ width:55,marginTop:22 }} />
            <div style={{ marginTop:26 }}><button className="bg" onClick={() => go("quote")}>{t.night.cta} →</button></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="p" style={{
        ...secBgLight("https://picsum.photos/id/1060/1600/900"),
        padding:"92px 18px"
      }}>
        <div style={{ maxWidth:1140,margin:"0 auto",position:"relative",zIndex:2 }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <div className={`s fu${v("services")} d0`} style={{ color:"var(--gold)",fontSize:10,fontWeight:700,letterSpacing:".28em",textTransform:"uppercase",marginBottom:12 }}>— {t.svc.title} —</div>
            <h2 className={`fu${v("services")} d1`} style={{ fontSize:"clamp(26px,5vw,46px)",fontWeight:900,color:"var(--navy)" }}>{t.svc.title}</h2>
            <p className={`s fu${v("services")} d2`} style={{ color:"var(--muted)",fontSize:"clamp(13px,2vw,16px)",marginTop:9 }}>{t.svc.sub}</p>
            <div className="gl" style={{ width:65,marginTop:18 }} />
          </div>
          <div className="g3" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {t.svc.items.map((s,i) => (
              <div key={i} className={`gw fu${v("services")} d${i+1}`} style={{ padding:"30px 24px" }}>
                <div style={{ fontSize:34,marginBottom:13 }}>{s.icon}</div>
                <h3 style={{ fontSize:"clamp(15px,2vw,19px)",fontWeight:700,color:"var(--navy)",marginBottom:9 }}>{s.title}</h3>
                <p className="s" style={{ color:"var(--muted)",lineHeight:1.75,fontSize:14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="p" style={{
        ...secBg(
          "https://picsum.photos/id/1025/1600/900",
          "linear-gradient(135deg,rgba(13,27,75,.91) 0%,rgba(7,14,40,.90) 100%)"
        ),
        padding:"92px 18px"
      }}>
        <div style={{ maxWidth:1080,margin:"0 auto",position:"relative",zIndex:2 }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <div className={`s fu${v("why")} d0`} style={{ color:"var(--gold)",fontSize:10,fontWeight:700,letterSpacing:".28em",textTransform:"uppercase",marginBottom:12 }}>— Notre force —</div>
            <h2 className={`fu${v("why")} d1`} style={{ fontSize:"clamp(26px,5vw,46px)",fontWeight:900,color:"white" }}>{t.why.title}</h2>
            <p className={`s fu${v("why")} d2`} style={{ color:"rgba(255,255,255,.55)",fontSize:"clamp(13px,2vw,16px)",marginTop:9 }}>{t.why.sub}</p>
          </div>
          <div className="g4" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:36 }}>
            {t.why.stats.map((s,i) => (
              <div key={i} className={`gc fu${v("why")} d${i+1}`} style={{ textAlign:"center",padding:"30px 12px" }}>
                <div className="sn" style={{ fontSize:"clamp(30px,4.5vw,50px)",fontWeight:900,color:"var(--gold)",fontFamily:"Playfair Display,serif",lineHeight:1 }}>{s.n}</div>
                <div className="s" style={{ color:"rgba(255,255,255,.62)",fontSize:12,marginTop:9,fontWeight:500,lineHeight:1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className="gc" style={{ padding:"clamp(22px,4vw,40px)" }}>
            <div className="wp" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
              {t.why.pts.map((p,i) => (
                <div key={i} className="s" style={{ display:"flex",alignItems:"center",gap:11,color:"rgba(255,255,255,.85)",fontSize:"clamp(12px,2vw,14px)" }}>
                  <div style={{ width:24,height:24,background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0,fontWeight:700,color:"var(--navy)" }}>✓</div>{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="p" style={{
        ...secBgLight("https://picsum.photos/id/1068/1600/900"),
        padding:"92px 18px"
      }}>
        <div style={{ maxWidth:800,margin:"0 auto",position:"relative",zIndex:2 }}>
          <div style={{ textAlign:"center",marginBottom:48 }}>
            <div className={`s fu${v("quote")} d0`} style={{ color:"var(--gold)",fontSize:10,fontWeight:700,letterSpacing:".28em",textTransform:"uppercase",marginBottom:12 }}>— {t.form.title} —</div>
            <h2 className={`fu${v("quote")} d1`} style={{ fontSize:"clamp(26px,5vw,46px)",fontWeight:900,color:"var(--navy)" }}>{t.form.title}</h2>
            <p className={`s fu${v("quote")} d2`} style={{ color:"var(--muted)",fontSize:"clamp(13px,2vw,16px)",marginTop:9 }}>{t.form.sub}</p>
            <div className="gl" style={{ width:65,marginTop:18 }} />
          </div>
          {sent ? (
            <div style={{ background:"rgba(212,237,218,.97)",border:"1px solid #c3e6cb",padding:"clamp(18px,4vw,32px)",textAlign:"center" }}>
              <p className="s" style={{ fontSize:16,color:"#155724",fontWeight:600 }}>{t.form.ok}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="fi" style={{ background:"rgba(255,255,255,.95)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",padding:"clamp(22px,5vw,48px)",boxShadow:"0 24px 64px rgba(0,0,0,.12)",border:"1px solid rgba(255,255,255,.7)" }}>
              <div className="g2" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:18 }}>
                <div className="fg"><label>{t.form.name} *</label><input name="name" value={fd.name} onChange={ch} required placeholder="Jean Tremblay" /></div>
                <div className="fg"><label>{t.form.email} *</label><input name="email" type="email" value={fd.email} onChange={ch} required placeholder="jean@exemple.com" /></div>
                <div className="fg"><label>{t.form.phone}</label><input name="phone" value={fd.phone} onChange={ch} placeholder="819 000-0000" /></div>
                <div className="fg"><label>{t.form.type} *</label>
                  <select name="type" value={fd.type} onChange={ch} required>
                    <option value="">— Sélectionner / Select —</option>
                    {t.form.types.map((o,i) => <option key={i} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="fg"><label>{t.form.addr}</label><input name="addr" value={fd.addr} onChange={ch} placeholder="123 Rue Principale, Sherbrooke, QC" /></div>
              <div className="g2" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:18 }}>
                <div className="fg"><label>{t.form.size}</label><input name="size" value={fd.size} onChange={ch} placeholder="ex: 2000" type="number" /></div>
                <div className="fg"><label>{t.form.freq}</label>
                  <select name="freq" value={fd.freq} onChange={ch}>
                    <option value="">— Sélectionner / Select —</option>
                    {t.form.freqs.map((o,i) => <option key={i} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="fg"><label>{t.form.det}</label><textarea name="det" value={fd.det} onChange={ch} rows={4} placeholder={t.form.ph} /></div>
              <div style={{ textAlign:"center",marginTop:6 }}>
                <button type="submit" className="bg" disabled={sending} style={{ fontSize:15,padding:"15px 44px",opacity:sending?.7:1,width:"100%",maxWidth:320 }}>
                  {sending?t.form.sending:t.form.send}
                </button>
                <p className="s" style={{ color:"var(--muted)",fontSize:12,marginTop:12 }}>📧 {MAIL} &nbsp;|&nbsp; 📞 819 432-6709</p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="p" style={{
        ...secBg(
          "https://picsum.photos/id/1071/1600/900",
          "linear-gradient(135deg,rgba(13,27,75,.92) 0%,rgba(7,14,40,.90) 100%)"
        ),
        padding:"92px 18px"
      }}>
        <div style={{ maxWidth:960,margin:"0 auto",position:"relative",zIndex:2 }}>
          <div style={{ textAlign:"center",marginBottom:48 }}>
            <div className={`s fu${v("contact")} d0`} style={{ color:"var(--gold)",fontSize:10,fontWeight:700,letterSpacing:".28em",textTransform:"uppercase",marginBottom:12 }}>— {t.contact.title} —</div>
            <h2 className={`fu${v("contact")} d1`} style={{ fontSize:"clamp(26px,5vw,46px)",fontWeight:900,color:"white" }}>{t.contact.title}</h2>
            <p className={`s fu${v("contact")} d2`} style={{ color:"rgba(255,255,255,.55)",fontSize:"clamp(13px,2vw,16px)",marginTop:9 }}>{t.contact.sub}</p>
          </div>
          <div className="cg" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:32 }}>
            {[
              { icon:"📞",label:t.contact.phone,val:"819 432-6709",href:"tel:8194326709" },
              { icon:"📧",label:t.contact.email,val:MAIL,href:`mailto:${MAIL}` },
              { icon:"📍",label:t.contact.zones,val:t.contact.zonesV,href:null },
              { icon:"🌙",label:t.contact.hours,val:t.contact.hoursV,sub:t.contact.hoursN,href:null },
            ].map((c,i) => (
              <div key={i} className={`gc fu${v("contact")} d${i+1}`} style={{ padding:"24px 20px",borderLeft:"4px solid var(--gold)" }}>
                <div style={{ display:"flex",alignItems:"flex-start",gap:13 }}>
                  <span style={{ fontSize:24,flexShrink:0,marginTop:1 }}>{c.icon}</span>
                  <div>
                    <div className="s" style={{ color:"var(--gold)",fontSize:9,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:5 }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} className="s" style={{ color:"white",fontSize:15,fontWeight:700,textDecoration:"none",display:"block",wordBreak:"break-all" }}>{c.val}</a>
                      : <div className="s" style={{ color:"white",fontSize:14,fontWeight:600 }}>{c.val}</div>}
                    {c.sub && <div className="s" style={{ color:"rgba(255,255,255,.42)",fontSize:11,marginTop:3 }}>{c.sub}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center",marginTop:28 }}>
            <button className="bg" style={{ fontSize:15,padding:"16px 48px" }} onClick={() => go("quote")}>{t.nav.quote} →</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"#040a1a",padding:"40px 18px",borderTop:"1px solid rgba(201,168,76,.18)" }}>
        <div className="ft" style={{ maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:18 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:9,marginBottom:7 }}>
              <div style={{ width:28,height:28,background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:13,color:"var(--navy)",boxShadow:"0 0 12px rgba(201,168,76,.4)" }}>B</div>
              <span style={{ color:"white",fontWeight:700,fontSize:15,letterSpacing:".06em" }}>BASIC.PRO-NET</span>
            </div>
            <p className="s" style={{ color:"rgba(255,255,255,.3)",fontSize:12 }}>{t.footer.tag}</p>
          </div>
          <div className="s" style={{ color:"rgba(255,255,255,.26)",fontSize:11,textAlign:"right" }}>
            <div style={{ marginBottom:3 }}>
              <a href="tel:8194326709" style={{ color:"rgba(255,255,255,.45)",textDecoration:"none" }}>819 432-6709</a>
              {" · "}
              <a href={`mailto:${MAIL}`} style={{ color:"rgba(255,255,255,.45)",textDecoration:"none" }}>{MAIL}</a>
            </div>
            <div>basicpro.net · © {new Date().getFullYear()} Basic.Pro-Net. {t.footer.rights}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
