/* ─────────────────────────────────────────
   TRANSLATIONS
   ───────────────────────────────────────── */
const T = {
  en: {
    typed_roles: ['.NET Developer', 'C# Engineer', 'Backend Builder', 'Freelance Dev'],
    nav_about: 'About', nav_skills: 'Skills', nav_exp: 'Experience',
    nav_proj: 'Projects', nav_certs: 'Certifications', nav_contact: 'Contact',
    hero_greeting: "Hi, I'm",
    hero_role_static: 'Software Developer',
    hero_tagline: 'Building enterprise software for logistics, industrial automation, and web platforms. Based in Milan, Italy.',
    hero_cta1: 'View Projects', hero_cta2: 'Get in Touch',
    stat1_label: 'Years Experience', stat2_label: 'Major Projects', stat3_label: 'Tech Stacks',
    scroll_lbl: 'Scroll',
    about_label: 'About Me',
    about_title: 'Software Developer with an Industrial Edge',
    about_p1: "I'm a software developer focused on the .NET and C# ecosystem, working across enterprise web platforms, logistics systems, industrial automation, and full-stack web delivery.",
    about_p2: "What sets me apart is experience with the full delivery cycle — from gathering requirements with clients, to building, containerizing, and supporting production. I've shipped freelance projects end-to-end: blank repo to running on a client's systems.",
    q1_strong: 'Backend Focus', q1_span: 'ASP.NET Core, C#, SQL Server, Entity Framework',
    q2_strong: 'Industrial & Automation', q2_span: 'SCADA / HMI, FT Optix Studio, Embedded C++',
    q3_strong: 'End-to-End Delivery', q3_span: 'Docker, Git, client requirements, post-release support',
    about_available: 'Available', about_loc: 'Milan, Italy',
    skills_label: 'Tech Stack', skills_title: 'Skills & Technologies',
    skill1_title: 'Languages', skill2_title: 'Frameworks & Platforms',
    skill3_title: 'Data & Infrastructure', skill4_title: 'Industrial & Embedded',
    skill5_title: 'Dev Tools', skill6_title: 'Soft Skills',
    skill6_1: 'Client Requirements', skill6_2: 'Freelance Delivery', skill6_3: 'Post-release Support',
    exp_label: 'Career Path', exp_title: 'Experience & Education',
    infra_date: 'Sep 2023 – Present', infra_badge: 'Current',
    infra_role: 'Software Developer',
    infra_company: 'Infraservice S.r.l. · Bovisio Masciago (MB)',
    infra_1: 'Development and maintenance of C# / .NET enterprise applications',
    infra_2: 'Backend business logic implementation with ASP.NET Core',
    infra_3: 'Embedded library and system development in C++',
    infra_4: 'Relational database design and SQL query optimization',
    infra_5: 'Industrial automation development with FT Optix Studio (SCADA/HMI)',
    aries_date: 'Mar 2022 – Jun 2022', aries_badge: 'Internship',
    aries_role: 'IT Intern',
    aries_company: 'Aries Tech Cathedra S.r.l. · Seregno (MB)',
    aries_1: '4-month school-work alternance in software development and databases',
    aries_2: 'Relational databases fundamentals and SQL language',
    aries_3: 'Introduction to C# and ASP.NET Core development',
    aries_4: 'Introductory training on blockchain technologies',
    edu_badge: 'Education',
    edu_role: 'Technical Diploma – Computer Science',
    edu_company: 'IIS Jean Monnet · Mariano Comense (CO)',
    edu_1: 'Programming, databases, IT systems and telecommunications',
    proj_label: 'Portfolio', proj_title: 'Projects',
    proj_sub: 'End-to-end deliveries, from blank repository to production.',
    w_label: 'Featured Project · Freelance',
    w_title: 'Industrial Warehouse &\nOperations Portal',
    w_desc: 'A full-stack, production-grade management platform for industrial warehouse operations. Designed for touch-screen kiosk use, supporting operators and administrators across task scheduling, inventory control, and calendar-based planning — built and delivered solo, end-to-end.',
    w_f1: 'Maintenance task scheduling with recurring patterns (daily, weekly, custom intervals)',
    w_f2: 'Warehouse inventory with critical stock alerts & hierarchical taxonomy filtering',
    w_f3: 'Calendar view across multiple date dimensions with recurring task expansion',
    w_f4: 'Custom cookie auth, role-based access, Docker containerization on SQL Server 2022',
    w_case: 'View Case Study →',
    scada_type: 'Infraservice', scada_title: 'Industrial SCADA / HMI Automation Systems',
    scada_desc: 'SCADA/HMI automation platform with proprietary SDK integration for thermal cameras. Real-time monitoring, visualization, and automated control logic scripted in C# via FT Optix Studio.',
    mon_type: 'Infraservice', mon_title: 'On-Premise Monitoring & Reporting Platform',
    mon_desc: 'Multi-client on-premise web platform for real-time monitoring, alarm management, and data analytics. Integrates field data from thermal cameras to generate alarms and exportable reports.',
    certs_label: 'Certifications', certs_title: 'Credentials & Certifications',
    cert_verified: 'Verified',
    cert_az900_name: 'Microsoft Azure Fundamentals',
    cert_verify: 'View Credential',
    contact_label: 'Get In Touch', contact_title: "Let's Work Together",
    contact_sub: "I'm open to new opportunities — full-time, freelance, or interesting projects. If you have something in mind, send me a message.",
    footer_built: 'Designed & built by',
  },
  it: {
    typed_roles: ['.NET Developer', 'C# Engineer', 'Backend Builder', 'Freelance Dev'],
    nav_about: 'Chi Sono', nav_skills: 'Competenze', nav_exp: 'Esperienza',
    nav_proj: 'Progetti', nav_certs: 'Certificazioni', nav_contact: 'Contatti',
    hero_greeting: 'Ciao, sono',
    hero_role_static: 'Software Developer',
    hero_tagline: 'Sviluppo software enterprise per logistica, automazione industriale e piattaforme web. Milano, Italia.',
    hero_cta1: 'Vedi Progetti', hero_cta2: 'Contattami',
    stat1_label: 'Anni di Esperienza', stat2_label: 'Progetti Principali', stat3_label: 'Stack Tecnologici',
    scroll_lbl: 'Scorri',
    about_label: 'Chi Sono',
    about_title: 'Software Developer con Esperienza Industriale',
    about_p1: "Sono uno sviluppatore software specializzato nell'ecosistema .NET e C#, con esperienze in piattaforme web enterprise, sistemi logistici, automazione industriale e sviluppo full-stack.",
    about_p2: "Ciò che mi distingue è l'esperienza con l'intero ciclo di consegna — dalla raccolta dei requisiti col cliente, alla costruzione, containerizzazione e supporto post-rilascio. Ho consegnato progetti freelance end-to-end: dal repository vuoto al sistema in produzione.",
    q1_strong: 'Focus Backend', q1_span: 'ASP.NET Core, C#, SQL Server, Entity Framework',
    q2_strong: 'Industriale & Automazione', q2_span: 'SCADA / HMI, FT Optix Studio, Embedded C++',
    q3_strong: 'Consegna End-to-End', q3_span: 'Docker, Git, raccolta requisiti, supporto post-rilascio',
    about_available: 'Disponibile', about_loc: 'Milano, Italia',
    skills_label: 'Stack Tecnologico', skills_title: 'Competenze & Tecnologie',
    skill1_title: 'Linguaggi', skill2_title: 'Framework & Piattaforme',
    skill3_title: 'Dati & Infrastruttura', skill4_title: 'Industriale & Embedded',
    skill5_title: 'Strumenti Dev', skill6_title: 'Soft Skills',
    skill6_1: 'Raccolta Requisiti', skill6_2: 'Consegna Freelance', skill6_3: 'Supporto Post-Rilascio',
    exp_label: 'Percorso Professionale', exp_title: 'Esperienza & Istruzione',
    infra_date: 'Set. 2023 – Presente', infra_badge: 'Attuale',
    infra_role: 'Sviluppatore Software',
    infra_company: 'Infraservice S.r.l. · Bovisio Masciago (MB)',
    infra_1: 'Sviluppo e manutenzione di applicazioni enterprise in C# / .NET',
    infra_2: 'Implementazione di logiche di business backend con ASP.NET Core',
    infra_3: 'Sviluppo di librerie embedded e sistemi in C++',
    infra_4: 'Progettazione database relazionali e ottimizzazione query SQL',
    infra_5: 'Sviluppo automazione industriale con FT Optix Studio (SCADA/HMI)',
    aries_date: 'Mar. 2022 – Giu. 2022', aries_badge: 'Stage',
    aries_role: 'Stagista IT',
    aries_company: 'Aries Tech Cathedra S.r.l. · Seregno (MB)',
    aries_1: 'Alternanza scuola/lavoro di 4 mesi in sviluppo software e database',
    aries_2: 'Fondamenti di database relazionali e linguaggio SQL',
    aries_3: 'Introduzione allo sviluppo in C# e ASP.NET Core',
    aries_4: 'Formazione introduttiva su tecnologie blockchain',
    edu_badge: 'Istruzione',
    edu_role: 'Diploma di Istruzione Tecnica – Informatica',
    edu_company: 'IIS Jean Monnet · Mariano Comense (CO)',
    edu_1: 'Programmazione, basi di dati, sistemi informatici e telecomunicazioni',
    proj_label: 'Portfolio', proj_title: 'Progetti',
    proj_sub: 'Consegne end-to-end, dal repository vuoto alla produzione.',
    w_label: 'Progetto Principale · Freelance',
    w_title: 'Gestionale Industriale\nMagazzino & Operazioni',
    w_desc: "Una piattaforma di gestione full-stack per operazioni di magazzino industriale. Progettata per uso su kiosk touch-screen, supporta operatori e amministratori nella pianificazione attività, controllo inventario e calendario — sviluppata e consegnata da solo, end-to-end.",
    w_f1: 'Pianificazione attività con pattern ricorrenti (giornaliero, settimanale, personalizzato)',
    w_f2: 'Inventario magazzino con alert giacenza critica e filtro tassonomia gerarchica',
    w_f3: 'Vista calendario su più dimensioni temporali con espansione attività ricorrenti',
    w_f4: 'Auth cookie custom, accesso role-based, Docker containerization con SQL Server 2022',
    w_case: 'Vedi Case Study →',
    scada_type: 'Infraservice', scada_title: 'Sistemi Automazione Industriale SCADA / HMI',
    scada_desc: "Piattaforma SCADA/HMI con integrazione SDK proprietario per termocamere. Monitoraggio processi in tempo reale, visualizzazione e logiche di controllo automatico in C# tramite FT Optix Studio.",
    mon_type: 'Infraservice', mon_title: 'Piattaforma di Monitoraggio e Reportistica On-Premise',
    mon_desc: "Piattaforma web on-premise multi-cliente per monitoraggio in tempo reale, gestione allarmi e analisi dati. Integra dati da termocamere per generare allarmi e report esportabili.",
    certs_label: 'Certificazioni', certs_title: 'Credenziali & Certificazioni',
    cert_verified: 'Verificato',
    cert_az900_name: 'Microsoft Azure Fundamentals',
    cert_verify: 'Vedi Credenziale',
    contact_label: 'Contattami', contact_title: 'Lavoriamo Insieme',
    contact_sub: "Sono aperto a nuove opportunità — full-time, freelance o progetti interessanti. Se hai qualcosa in mente, mandami un messaggio.",
    footer_built: 'Progettato & sviluppato da',
  }
};

/* ─────────────────────────────────────────
   I18N ENGINE
   ───────────────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  const flag = document.getElementById('langFlag');
  const label = document.getElementById('langLabel');
  if (flag && label) {
    flag.textContent  = lang === 'en' ? '🇬🇧' : '🇮🇹';
    label.textContent = lang === 'en' ? 'EN' : 'IT';
  }

  // Re-init typed with new language roles
  currentRoles = t.typed_roles;
  roleIndex = 0; charIndex = 0; isDeleting = false;
}

/* ─────────────────────────────────────────
   REVEAL ON SCROLL
   ───────────────────────────────────────── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Hero elements animate immediately on load
setTimeout(() => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 130);
  });
}, 80);

/* ─────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  highlightNav();
}, { passive: true });

function highlightNav() {
  const y = window.scrollY + 120;
  document.querySelectorAll('section[id]').forEach(sec => {
    const link = document.querySelector(`.nav__links a[href="#${sec.id}"]`);
    if (!link) return;
    link.classList.toggle('active', y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight);
  });
}

/* ─────────────────────────────────────────
   MOBILE NAV
   ───────────────────────────────────────── */
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ─────────────────────────────────────────
   LANGUAGE TOGGLE
   ───────────────────────────────────────── */
const langBtn = document.getElementById('langToggle');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'it' : 'en');
  });
}

/* ─────────────────────────────────────────
   TYPED TEXT
   ───────────────────────────────────────── */
let currentRoles = T[currentLang].typed_roles;
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  if (!typedEl) return;
  const word = currentRoles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = word.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % currentRoles.length;
      setTimeout(type, 360);
      return;
    }
  } else {
    typedEl.textContent = word.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === word.length) {
      isDeleting = true;
      setTimeout(type, 1900);
      return;
    }
  }
  setTimeout(type, isDeleting ? 46 : 80);
}
type();

/* ─────────────────────────────────────────
   COUNTER ANIMATION
   ───────────────────────────────────────── */
const cntObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const target = +e.target.dataset.count;
    let val = 0;
    const step = target / 35;
    const t = setInterval(() => {
      val += step;
      if (val >= target) { e.target.textContent = target; clearInterval(t); }
      else e.target.textContent = Math.floor(val);
    }, 28);
    cntObs.unobserve(e.target);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat__num[data-count]').forEach(el => cntObs.observe(el));

/* ─────────────────────────────────────────
   INIT
   ───────────────────────────────────────── */
applyLang(currentLang);
document.getElementById('year').textContent = new Date().getFullYear();
