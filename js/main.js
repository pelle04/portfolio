/* ─────────────────────────────────────────
   TRANSLATIONS
   ───────────────────────────────────────── */
const T = {
  en: {
    nav_about: 'About', nav_skills: 'Skills', nav_exp: 'Experience',
    nav_proj: 'Projects', nav_certs: 'Certifications', nav_contact: 'Contact',
    hero_greeting: "Hi, I'm",
    hero_role_static: 'Software Engineer',
    hero_role_focus: '.NET, Industrial Systems & Cloud',
    hero_tagline: 'Building backend systems, desktop applications, and industrial automation software across the full lifecycle — from architecture to production. Currently at KION Group, based in Milan, Italy.',
    hero_cta1: 'View Projects', hero_cta2: 'Get in Touch',
    stat1_label: 'Years Experience', stat2_label: 'Major Projects', stat3_label: 'Azure Certifications',
    scroll_lbl: 'Scroll',
    about_label: 'About Me',
    about_title: 'Software Engineer Building Enterprise & Industrial Systems',
    about_p1: "I'm a software engineer focused on the .NET and C# ecosystem, working across backend systems, desktop applications, industrial automation, and enterprise platforms.",
    about_p2: "My experience spans the full software lifecycle — from architecture and development to deployment, commissioning, and production support — combining backend engineering with hands-on industrial automation. I'm Azure-certified and increasingly focused on cloud technologies, distributed systems, and scalable architecture.",
    q1_strong: 'Backend & Architecture', q1_span: 'ASP.NET Core, C#, WPF / MVVM, Dependency Injection, SQL Server',
    q2_strong: 'Industrial Automation', q2_span: 'SCADA / HMI, FT Optix Studio, Embedded C++',
    q3_strong: 'Cloud & Delivery', q3_span: 'Microsoft Azure (AZ-900, AZ-104), Docker, Git, full-lifecycle ownership',
    about_loc: 'Milan, Italy',
    skills_label: 'Tech Stack', skills_title: 'Skills & Technologies',
    skill1_title: 'Languages', skill2_title: 'Frameworks & Architecture',
    skill3_title: 'Cloud, Data & Infrastructure', skill4_title: 'Industrial & Embedded',
    exp_label: 'Career Path', exp_title: 'Experience & Education',
    kion_date: 'Jul 2026 – Present', kion_badge: 'Current',
    kion_role: 'Software Engineer',
    kion_company: 'KION Group · Milan, Italy (Hybrid)',
    kion_1: 'Develop and maintain backend and desktop software for automated warehouse and material handling systems, combining application development with field commissioning',
    kion_2: 'Deploy, troubleshoot, and support software in production environments, driving system integration and delivery for large-scale industrial installations',
    infra_date: 'Sep 2023 – Jun 2026', infra_badge: '2 yr 10 mo',
    infra_role: 'Software Developer',
    infra_company: 'Infraservice S.r.l. · Bovisio Masciago (MB)',
    infra_1: 'Designed and developed backend services and desktop applications in C#/.NET, applying WPF, MVVM, and dependency injection for maintainable, testable software',
    infra_2: 'Built and maintained REST APIs and backend logic with ASP.NET Core (MVC, Razor Pages), backed by SQL Server',
    infra_3: 'Implemented SCADA/HMI automation logic and C# scripting (FT Optix Studio), integrating third-party device SDKs and C/C++ embedded components',
    infra_4: 'Owned projects across the full lifecycle — design, development, deployment, commissioning, and long-term maintenance',
    aries_date: 'Jun 2022 – Sep 2022', aries_badge: 'Internship',
    aries_role: 'Software Developer Intern',
    aries_company: 'Aries Tech - Cathedra S.r.l. · Seregno (MB)',
    aries_1: 'Contributed to enterprise software development using C#, ASP.NET Core, and SQL Server',
    aries_2: 'Worked on backend development, database design, and an internal R&D initiative on blockchain technologies',
    edu_badge: 'Education',
    edu_role: 'Technical Diploma – Computer Science',
    edu_company: 'IIS Jean Monnet · Mariano Comense (CO)',
    edu_1: 'Programming, databases, IT systems and telecommunications',
    certs_label: 'Certifications', certs_title: 'Credentials & Certifications',
    cert_verified: 'Verified',
    cert_az104_name: 'Microsoft Certified: Azure Administrator Associate',
    cert_az900_name: 'Microsoft Azure Fundamentals',
    cert_verify: 'View Credential',
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
    avis_label: 'Featured Project · Freelance',
    avis_title: 'AVIS Ossolana ODV\nMember Management Portal',
    avis_desc: 'A production member management portal for AVIS Ossolana ODV, an Italian blood-donor association — designed and built end-to-end, freelance, replacing a legacy CSV-based system. Live at portale.avisossolana.it, serving 4,000+ real members.',
    avis_f1: 'Member registration & admin approval workflow with JWT auth (member / admin / superadmin roles)',
    avis_f2: 'Donation history and "benemerenza" (merit award) tracking per member',
    avis_f3: 'WhatsApp Business Cloud API (Meta) integration — templated messages via a guided send wizard, plus an email template system and full communication log',
    avis_f4: "Full security review & hardening pass, then deployed via Docker on a VPS (PostgreSQL, Nginx, Let's Encrypt) with legacy CSV data migrated for 4,000+ members",
    avis_case: 'View Case Study →',
    avis_live: 'Visit Live Site ↗',
    scada_type: 'Infraservice', scada_title: 'Industrial SCADA / HMI Automation Systems',
    scada_desc: 'SCADA/HMI automation platform with proprietary SDK integration for thermal cameras. Real-time monitoring, visualization, and automated control logic scripted in C# via FT Optix Studio.',
    mon_type: 'Infraservice', mon_title: 'On-Premise Monitoring & Reporting Platform',
    mon_desc: 'Multi-client on-premise web platform for real-time monitoring, alarm management, and data analytics. Integrates field data from thermal cameras to generate alarms and exportable reports.',
    contact_label: 'Get In Touch', contact_title: "Let's Work Together",
    contact_sub: "I'm open to new opportunities — full-time, freelance, or interesting projects. If you have something in mind, send me a message.",
    footer_built: 'Designed & built by',
  },
  it: {
    nav_about: 'Chi Sono', nav_skills: 'Competenze', nav_exp: 'Esperienza',
    nav_proj: 'Progetti', nav_certs: 'Certificazioni', nav_contact: 'Contatti',
    hero_greeting: 'Ciao, sono',
    hero_role_static: 'Software Engineer',
    hero_role_focus: '.NET, Sistemi Industriali e Cloud',
    hero_tagline: "Sviluppo sistemi backend, applicazioni desktop e software di automazione industriale lungo l'intero ciclo di vita — dall'architettura alla produzione. Attualmente in KION Group, con base a Milano.",
    hero_cta1: 'Vedi Progetti', hero_cta2: 'Contattami',
    stat1_label: 'Anni di Esperienza', stat2_label: 'Progetti Principali', stat3_label: 'Certificazioni Azure',
    scroll_lbl: 'Scorri',
    about_label: 'Chi Sono',
    about_title: 'Software Engineer tra Sistemi Enterprise e Industriali',
    about_p1: "Sono un software engineer focalizzato sull'ecosistema .NET e C#, con esperienza in sistemi backend, applicazioni desktop, automazione industriale e piattaforme enterprise.",
    about_p2: "La mia esperienza copre l'intero ciclo di vita del software — dall'architettura allo sviluppo, fino a deployment, commissioning e supporto in produzione — unendo backend engineering e automazione industriale sul campo. Sono certificato Microsoft Azure e sempre più orientato a cloud, sistemi distribuiti e architetture scalabili.",
    q1_strong: 'Backend & Architettura', q1_span: 'ASP.NET Core, C#, WPF / MVVM, Dependency Injection, SQL Server',
    q2_strong: 'Automazione Industriale', q2_span: 'SCADA / HMI, FT Optix Studio, Embedded C++',
    q3_strong: 'Cloud & Delivery', q3_span: 'Microsoft Azure (AZ-900, AZ-104), Docker, Git, gestione end-to-end',
    about_loc: 'Milano, Italia',
    skills_label: 'Stack Tecnologico', skills_title: 'Competenze & Tecnologie',
    skill1_title: 'Linguaggi', skill2_title: 'Framework & Architettura',
    skill3_title: 'Cloud, Dati & Infrastruttura', skill4_title: 'Industriale & Embedded',
    exp_label: 'Percorso Professionale', exp_title: 'Esperienza & Istruzione',
    kion_date: 'Lug. 2026 – Presente', kion_badge: 'Attuale',
    kion_role: 'Software Engineer',
    kion_company: 'KION Group · Milano (Ibrido)',
    kion_1: 'Sviluppo e manutenzione di software backend e desktop per sistemi automatizzati di magazzino e movimentazione materiali, unendo sviluppo applicativo e commissioning sul campo',
    kion_2: 'Deploy, troubleshooting e supporto software in ambienti di produzione, guidando integrazione di sistema e delivery per impianti industriali su larga scala',
    infra_date: 'Set. 2023 – Giu. 2026', infra_badge: '2 anni 10 mesi',
    infra_role: 'Sviluppatore Software',
    infra_company: 'Infraservice S.r.l. · Bovisio Masciago (MB)',
    infra_1: "Progettazione e sviluppo di servizi backend e applicazioni desktop in C#/.NET, con WPF, MVVM e dependency injection per software manutenibile e testabile",
    infra_2: 'Sviluppo e manutenzione di REST API e logiche backend con ASP.NET Core (MVC, Razor Pages), su database SQL Server',
    infra_3: 'Implementazione di logiche di automazione SCADA/HMI e scripting C# (FT Optix Studio), con integrazione SDK di terze parti e componenti embedded C/C++',
    infra_4: "Gestione dei progetti lungo l'intero ciclo di vita — progettazione, sviluppo, deployment, commissioning e manutenzione a lungo termine",
    aries_date: 'Giu. 2022 – Set. 2022', aries_badge: 'Stage',
    aries_role: 'Stagista Sviluppatore Software',
    aries_company: 'Aries Tech - Cathedra S.r.l. · Seregno (MB)',
    aries_1: 'Contributo allo sviluppo di software enterprise con C#, ASP.NET Core e SQL Server',
    aries_2: 'Sviluppo backend, progettazione database e iniziativa interna di R&D su tecnologie blockchain',
    edu_badge: 'Istruzione',
    edu_role: 'Diploma di Istruzione Tecnica – Informatica',
    edu_company: 'IIS Jean Monnet · Mariano Comense (CO)',
    edu_1: 'Programmazione, basi di dati, sistemi informatici e telecomunicazioni',
    certs_label: 'Certificazioni', certs_title: 'Credenziali & Certificazioni',
    cert_verified: 'Verificato',
    cert_az104_name: 'Microsoft Certified: Azure Administrator Associate',
    cert_az900_name: 'Microsoft Azure Fundamentals',
    cert_verify: 'Vedi Credenziale',
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
    avis_label: 'Progetto Principale · Freelance',
    avis_title: 'AVIS Ossolana ODV\nPortale Gestione Soci',
    avis_desc: "Un portale di gestione soci in produzione per AVIS Ossolana ODV, associazione di donatori di sangue — progettato e sviluppato end-to-end, come freelance, in sostituzione di un sistema legacy basato su CSV. Online su portale.avisossolana.it, al servizio di oltre 4.000 soci reali.",
    avis_f1: 'Registrazione soci e workflow di approvazione admin con autenticazione JWT (ruoli socio / admin / superadmin)',
    avis_f2: 'Storico donazioni e tracciamento benemerenza per ogni socio',
    avis_f3: 'Integrazione WhatsApp Business Cloud API (Meta) — messaggi con template tramite wizard guidato, oltre a un sistema di template email e registro comunicazioni completo',
    avis_f4: "Revisione e hardening completo della sicurezza, poi deploy via Docker su VPS (PostgreSQL, Nginx, Let's Encrypt) con migrazione dei dati CSV legacy per oltre 4.000 soci",
    avis_case: 'Vedi Case Study →',
    avis_live: 'Vai al Sito Live ↗',
    scada_type: 'Infraservice', scada_title: 'Sistemi Automazione Industriale SCADA / HMI',
    scada_desc: "Piattaforma SCADA/HMI con integrazione SDK proprietario per termocamere. Monitoraggio processi in tempo reale, visualizzazione e logiche di controllo automatico in C# tramite FT Optix Studio.",
    mon_type: 'Infraservice', mon_title: 'Piattaforma di Monitoraggio e Reportistica On-Premise',
    mon_desc: "Piattaforma web on-premise multi-cliente per monitoraggio in tempo reale, gestione allarmi e analisi dati. Integra dati da termocamere per generare allarmi e report esportabili.",
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
    setTimeout(() => el.classList.add('visible'), i * 90);
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
   INIT
   ───────────────────────────────────────── */
applyLang(currentLang);
document.getElementById('year').textContent = new Date().getFullYear();
