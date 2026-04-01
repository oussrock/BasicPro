export interface NavTranslations {
  home: string;
  services: string;
  night: string;
  contact: string;
  quote: string;
}

export interface HeroTranslations {
  badge: string;
  title: string;
  hi: string;
  sub: string;
  cta: string;
  cta2: string;
  t1: string;
  t2: string;
  t3: string;
}

export interface NightCard {
  icon: string;
  title: string;
  desc: string;
}

export interface NightTranslations {
  ey: string;
  title: string;
  hi: string;
  desc: string;
  cards: NightCard[];
  quote: string;
  cta: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceTranslations {
  title: string;
  sub: string;
  items: ServiceItem[];
}

export interface Stat {
  n: string;
  l: string;
}

export interface WhyTranslations {
  title: string;
  sub: string;
  stats: Stat[];
  pts: string[];
}

export interface FormTranslations {
  title: string;
  sub: string;
  name: string;
  email: string;
  phone: string;
  addr: string;
  type: string;
  types: string[];
  size: string;
  freq: string;
  freqs: string[];
  det: string;
  ph: string;
  send: string;
  sending: string;
  ok: string;
}

export interface ContactTranslations {
  title: string;
  sub: string;
  phone: string;
  email: string;
  zones: string;
  zonesV: string;
  hours: string;
  hoursV: string;
  hoursN: string;
}

export interface FooterTranslations {
  tag: string;
  rights: string;
  zonesTitle: string;
  zones: {
    sherbrooke: string[];
    magog: string[];
    others: string[];
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  clientsTitle: string;
  night: NightTranslations;
  svc: ServiceTranslations;
  why: WhyTranslations;
  form: FormTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  faqTitle: string;
  faq: FAQItem[];
  trust: {
    title: string;
    items: string[];
  };
}

export const T: Record<string, Translations> = {
  fr: {
    nav: { home:"Accueil", services:"Services", night:"On travaille la nuit", contact:"Contact", quote:"Soumission gratuite" },
    hero: {
      badge:"Nettoyage Sherbrooke & Magog", title:"Services de", hi:"nettoyage professionnel",
      sub:"L'expert en entretien ménager à Sherbrooke. Nettoyage de restaurants, bureaux et grand ménage commercial. Qualité garantie, estimation gratuite.",
      cta:"Estimation gratuite", cta2:"Nos services",
      t1:"Nettoyage de Bureaux", t2:"Sherbrooke & Magog", t3:"Satisfaction garantie",
    },
    clientsTitle: "Ils nous font confiance",
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
      title:"Nos Services de Nettoyage", sub:"Expertise complète en entretien ménager à Sherbrooke et Magog",
      items:[
        { icon:"🏢", title:"Bureaux & Commerces", desc:"Entretien régulier de bureaux à Sherbrooke. Environnement sain pour vos employés et clients." },
        { icon:"🍽️", title:"Restaurants & Bars", desc:"Nettoyage spécialisé pour la restauration. Respect strict des normes sanitaires du MAPAQ." },
        { icon:"✨", title:"Grand Ménage", desc:"Nettoyage en profondeur, décapage et cirage de planchers, et grand ménage après construction." },
        { icon:"🏠", title:"Entretien Résidentiel", desc:"Service de ménage professionnel pour votre domicile ou vos immeubles à revenus." },
        { icon:"🧼", title:"Tapis & Fenêtres", desc:"Nettoyage professionnel de tapis et lavage de vitres commercial pour une image impeccable." },
        { icon:"🌿", title:"Produits Certifiés", desc:"Utilisation de produits de nettoyage efficaces et respectueux de l'environnement." },
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
    faqTitle: "Questions Fréquentes",
    faq: [
      { q: "Quelles zones desservez-vous?", a: "Nous couvrons Sherbrooke, Magog, Lennoxville, North Hatley et toute la région de l'Estrie." },
      { q: "Êtes-vous assurés?", a: "Oui, nous possédons une assurance responsabilité complète pour protéger votre établissement." },
      { q: "Nettoyez-vous durant la nuit?", a: "Absolument. Nous sommes experts en services nocturnes pour éviter toute interruption de vos activités." },
      { q: "Quels types de produits utilisez-vous?", a: "Nous utilisons des produits professionnels certifiés, et des options écologiques sont disponibles sur demande." }
    ],
    trust: {
      title: "Votre Partenaire de Confiance",
      items: ["Assurance Responsabilité Complète", "Équipe Formée & Vérifiée", "Produits Certifiés", "Satisfaction 100% Garantie"]
    },
    footer:{ 
      tag:"L'entretien ménager professionnel à votre service.", 
      rights:"Tous droits réservés.",
      zonesTitle: "Zones Desservies",
      zones: {
        sherbrooke: ["Rock Forest", "Bromptonville", "Lennoxville", "Fleurimont", "Ascot Corner"],
        magog: ["Magog", "Orford", "Deauville", "North Hatley", "Stanstead"],
        others: ["Coaticook", "Richmond", "Windsor", "East Angus", "Estrie"]
      }
    },
  },
  en: {
    nav:{ home:"Home", services:"Services", night:"We Work Nights", contact:"Contact", quote:"Free Quote" },
    hero:{
      badge:"Sherbrooke & Magog", title:"The excellence of", hi:"professional cleaning",
      sub:"Spotless spaces for your restaurants, offices, and institutions. Guaranteed quality, remarkable results.",
      cta:"Get a Free Quote", cta2:"Our Services",
      t1:"Restaurants & Offices", t2:"Sherbrooke & Magog", t3:"Satisfaction Guaranteed",
    },
    clientsTitle: "Trusted by Local Leaders",
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
    faqTitle: "Frequently Asked Questions",
    faq: [
      { q: "Which areas do you serve?", a: "We cover Sherbrooke, Magog, Lennoxville, North Hatley, and the entire Eastern Townships region." },
      { q: "Are you insured?", a: "Yes, we carry full liability insurance to protect your business premises." },
      { q: "Do you clean during the night?", a: "Absolutely. We specialize in overnight services to ensure zero interruption to your business." },
      { q: "What cleaning products do you use?", a: "We use certified professional products, with eco-friendly options available upon request." }
    ],
    trust: {
      title: "Your Trusted Partner",
      items: ["Full Liability Insurance", "Trained & Verified Team", "Certified Products", "100% Satisfaction Guaranteed"]
    },
    footer:{ 
      tag:"Professional cleaning services at your service.", 
      rights:"All rights reserved.",
      zonesTitle: "Service Areas",
      zones: {
        sherbrooke: ["Lennoxville", "Fleurimont", "Brompton", "Rock Forest"],
        magog: ["Magog", "Orford", "North Hatley", "Stanstead"],
        others: ["Coaticook", "Richmond", "Windsor", "Eastern Townships"]
      }
    },
  },
};

export const MAIL = "oussrock@gmail.com";
