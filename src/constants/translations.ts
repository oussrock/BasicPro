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

export interface ProcessStep {
  title: string;
  desc: string;
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
  sectorsTitle: string;
  sectors: string[];
  methodTitle: string;
  methodSteps: ProcessStep[];
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
        { icon:"🏢", title:"Bureaux & Commerces", desc:"Spécialistes du nettoyage de bureaux à Sherbrooke. Nous désinfectons les surfaces communes, claviers et poignées pour réduire l'absentéisme." },
        { icon:"🍽️", title:"Restaurants & Bars", desc:"Nettoyage profond pour la restauration. Nous suivons les protocoles MAPAQ pour les cuisines, hottes et salles à manger impeccables." },
        { icon:"✨", title:"Grand Ménage", desc:"Nettoyage intensif : décapage, cirage de planchers, nettoyage après construction et remise à neuf complète de vos locaux industriels." },
        { icon:"🏠", title:"Entretien Résidentiel", desc:"Service de ménage de luxe pour résidences privées et immeubles à revenus. Discrétion, fiabilité et produits haut de gamme." },
        { icon:"🧼", title:"Tapis & Fenêtres", desc:"Lavage de vitres commercial en hauteur et nettoyage de tapis par extraction pour prolonger la durée de vie de vos revêtements de sol." },
        { icon:"🌿", title:"Produits Certifiés", desc:"Nous privilégions des produits écologiques performants, sécuritaires pour vos employés et l'environnement de travail." },
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
      { q: "Quelles zones desservez-vous exactement?", a: "Notre équipe mobile dessert Sherbrooke (Rock Forest, Fleurimont, Lennoxville), Magog, North Hatley et Orford." },
      { q: "Quelles sont vos certifications et assurances?", a: "Nous possédons une assurance responsabilité civile de 2M$ et tous nos employés subissent une vérification d'antécédents rigoureuse." },
      { q: "Comment assurez-vous la qualité du nettoyage?", a: "Nous utilisons une fiche de contrôle stricte et effectuons des inspections surprises régulières par nos superviseurs de zone." },
      { q: "Offrez-vous des contrats personnalisés?", a: "Oui, nous créons des plans d'entretien sur mesure (quotidien, hebdomadaire ou mensuel) adaptés à votre budget et vos horaires." }
    ],
    trust: {
      title: "Votre Partenaire de Confiance",
      items: ["Assurance Responsabilité Complète", "Équipe Formée & Vérifiée", "Produits Certifiés", "Satisfaction 100% Garantie"]
    },
    sectorsTitle: "Secteurs d'activité",
    sectors: ["Bureaux & Espaces corporatifs", "Restaurants, Bars & Cafés", "Garderies & Centres de la petite enfance", "Cliniques Médicales & Dentaires", "Établissements d'enseignement", "Magasins & Centres commerciaux", "Salles de sport & Gyms", "Entrepôts & Espaces industriels"],
    methodTitle: "Notre Méthode d'Excellence",
    methodSteps: [
      { title: "1. Inspection", desc: "Analyse personnalisée de vos besoins et des points critiques de votre établissement." },
      { title: "2. Planification", desc: "Établissement d'un horaire sur mesure pour ne jamais déranger vos opérations." },
      { title: "3. Exécution", desc: "Nettoyage rigoureux par nos experts utilisant des produits de qualité supérieure." },
      { title: "4. Contrôle Qualité", desc: "Suivi rigoureux pour garantir un résultat impeccable à chaque visite." }
    ],
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
      title:"Our Cleaning Services", sub:"Complete maintenance solutions for Sherbrooke and Magog",
      items:[
        { icon:"🏢", title:"Offices & Commercial", desc:"Sherbrooke office cleaning specialists. We disinfect high-touch surfaces, keyboards, and handles to reduce workplace illness and absenteeism." },
        { icon:"🍽️", title:"Restaurants & Bars", desc:"Deep cleaning for the food industry. We follow strict MAPAQ protocols for kitchens, hoods, and immaculate dining rooms." },
        { icon:"✨", title:"Grand Ménage", desc:"Intensive deep cleaning: floor stripping, waxing, post-construction cleanup, and complete industrial facility restoration." },
        { icon:"🏠", title:"Residential Cleaning", desc:"Premium housekeeping for private residences and income properties. Discretion, reliability, and top-tier cleaning products." },
        { icon:"🧼", title:"Carpets & Windows", desc:"High-rise commercial window washing and steam carpet extraction to extend the life of your flooring." },
        { icon:"🌿", title:"Certified Products", desc:"We prioritize high-performance eco-friendly products that are safe for your employees and the environment." },
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
      { q: "Which areas do you serve exactly?", a: "Our mobile team serves Sherbrooke (Rock Forest, Fleurimont, Lennoxville), Magog, North Hatley, and Orford." },
      { q: "What are your certifications and insurance coverage?", a: "We carry $2M in general liability insurance, and all staff members undergo rigorous background checks for your peace of mind." },
      { q: "How do you ensure cleaning quality?", a: "We use a detailed checklist for every visit, and our area supervisors perform regular surprise spot-checks to maintain our high standards." },
      { q: "Do you offer customized service contracts?", a: "Yes, we design tailored maintenance plans (daily, weekly, or monthly) that fit your specific facility needs and budget." }
    ],
    trust: {
      title: "Your Trusted Partner",
      items: ["Full Liability Insurance", "Trained & Verified Team", "Certified Products", "100% Satisfaction Guaranteed"]
    },
    sectorsTitle: "Industries We Serve",
    sectors: ["Offices & Corporate Spaces", "Restaurants, Bars & Cafes", "Daycares & Preschools", "Medical & Dental Clinics", "Educational Institutions", "Retail Stores & Shopping Malls", "Gyms & Fitness Centers", "Warehouses & Industrial Spaces"],
    methodTitle: "Our Method of Excellence",
    methodSteps: [
      { title: "1. Inspection", desc: "Customized analysis of your needs and the critical points of your facility." },
      { title: "2. Planning", desc: "Establishing a tailored schedule to never disrupt your operations." },
      { title: "3. Execution", desc: "Rigorous cleaning by our experts using top-quality products." },
      { title: "4. Quality Control", desc: "Regular follow-ups to guarantee a spotless result at every visit." }
    ],
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
