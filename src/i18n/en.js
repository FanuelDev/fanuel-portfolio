export default {
  nav: {
    dev:      'Dev',
    conseil:  'Consulting',
    foi:      'Faith',
    livre:    'Book',
    medias:   'Media',
    contact:  'Contact',
  },

  hero: {
    tag:     '// Lomé, Togo — available for freelance',
    name1:   'Fanuel Israël',
    name2:   'TOVEY K.',
    sub:     '{dev} Business consultant. Author. Leader & Teacher.',
    sub_dev: 'Web & Mobile Developer.',
    sub2:    'A curious mind at the service of technology, people and God.',
    cta_primary:   'Let\'s work together →',
    cta_secondary: 'See my projects',
    stat1_num:   '6+',
    stat1_label: 'years of experience',
    stat2_num:   '1B+',
    stat2_label: 'FCFA in transactions',
    stat3_num:   '5+',
    stat3_label: 'live projects',
    badge_loc:   'Lomé · Togo',
    scroll:      'Scroll',
  },

  about: {
    tag:    '// About',
    title:  'Multiple worlds,',
    title2: 'one vision',
    badge:  'Lomé, Togo 🇹🇬',
    p1: 'I am {name}, a freelance frontend developer based in Lomé. I build high-performance web and mobile applications with Angular, Vue.js, and Flutter — platforms that handle billions in transactions and digitize critical infrastructure.',
    p2: 'But my life goes beyond screens. I am a business consultant for small companies, passionate about architecture and art, author of {book}, and leader of the youth group {tnr}.',
    p3: 'Above all, I walk as a {identity} who fully revealed himself in Jesus-Christ — an identity that illuminates everything I do.',
    identity: 'child of Almighty God',
    pillars: {
      dev:    { label: 'Developer',   sub: 'Web & Mobile Freelance' },
      conseil:{ label: 'Consultant',  sub: 'Strategy & Business'    },
      foi:    { label: 'Servant',     sub: 'Teacher & TNR Leader'   },
      auteur: { label: 'Author',      sub: '40 Messages of Life'    },
    },
  },

  dev: {
    tag:   '// Technical expertise',
    title: 'Web &',
    title2: 'Mobile Developer',
    desc:  'Passionate freelancer, I craft modern digital solutions — SaaS, mobile apps, and business platforms — with a strong focus on performance and UX.',
    skills: [
      { icon: 'monitor',    title: 'Frontend Web',       desc: 'Modern, reactive and performant interfaces.',                        tags: ['Angular','Vue.js','TypeScript','NgRx','RxJS'] },
      { icon: 'smartphone', title: 'Mobile',             desc: 'Smooth cross-platform apps with full API integration.',               tags: ['Flutter','Dart','Riverpod','REST API'] },
      { icon: 'layers',     title: 'UI / Design System', desc: 'Elegant and consistent interfaces, close design collaboration.',      tags: ['TailwindCSS','SCSS','Bootstrap','Figma'] },
      { icon: 'cpu',        title: 'Architecture',       desc: 'Code organization, CI/CD, cross-team collaboration.',                tags: ['Docker','Git','CI/CD','Postman'] },
      { icon: 'cloud',      title: 'SaaS & Product',    desc: 'Complex high-traffic SaaS platforms running in production.',         tags: ['SaaS','Scalability','Performance'] },
      { icon: 'users',      title: 'Frontend Lead',      desc: 'Team management, code reviews, UX quality assurance.',              tags: ['Leadership','Code Review','Mentoring'] },
    ],
    proj_tag:    '// Notable achievements',
    proj_title:  'Projects in',
    proj_title2: 'production',
    projects: [
      { icon: 'anchor',    title: 'GUFORD — Port of Lomé', desc: 'Port digitalization (BAD, VBS, vehicle management). Angular + TailwindCSS for Africa Consulting Leaders.', url: 'https://guford.com/',    tags: ['Angular','TailwindCSS','REST'] },
      { icon: 'chart',     title: 'GESCAPRO',              desc: 'Tontine SaaS platform in production handling over 1 billion FCFA in transactions with a modern interface.',  url: 'https://gescapro.net/', tags: ['SaaS','Vue.js','Finance'] },
      { icon: 'megaphone', title: 'Kidolé',                desc: 'Billboard management platform from booking to installation. Web + Flutter mobile app.',                      url: 'https://kidole.io/',    tags: ['Flutter','Vue.js','Mobile'] },
    ],
  },

  business: {
    tag:    '// Consulting & Strategy',
    title:  'Helping small businesses',
    title2: 'grow with clarity',
    p1: 'Beyond code, I help entrepreneurs and project owners structure their ideas, define a clear strategy, and grow their business with confidence.',
    p2: 'My approach combines a developer\'s rigor — analyze, structure, iterate — with a human vision grounded in African business realities.',
    float_title: 'Vision & Strategy',
    float_sub:   'Structure. Evolve. Impact.',
    services: [
      { title: 'Business idea clarification', desc: 'Turning a vague idea into a clear, viable, and communicable concept.' },
      { title: 'Development strategy',        desc: 'Defining priorities, identifying opportunities, and laying the foundation for sustainable growth.' },
      { title: 'Digitalization & Tools',      desc: 'Advising on the right digital tools to gain efficiency and visibility.' },
    ],
  },

  spiritual: {
    tag:    '// Faith & Ministry',
    title:  'Child of',
    title2: 'Almighty God',
    desc:   'I don\'t define myself first as a "Christian" — but as a son of the living God who fully revealed himself in Jesus-Christ. This identity is not a label, it\'s my foundation.',
    teaching_tag:   'In action',
    teaching_title: 'Teaching stewardship as a child of God',
    teaching_desc:  'During a teaching program organized by T4J Church, I shared on managing your finances, possessions, and resources as a child of God — a biblical vision of stewardship that concretely transforms life.',
    verse:  '"For I am convinced that neither death nor life… nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."',
    verse_ref: '— Romans 8:38-39',
    cards: [
      { icon: 'book-open', title: 'Teacher of the Word',      desc: 'I share teachings rooted in God\'s Word — messages that touch real life, the daily walk with the Lord.', url: 'https://www.tiktok.com/@fanuelisraeltovey?lang=fr', cta: 'Listen on TikTok' },
      { icon: 'flame',     title: 'TNR Leader',                desc: 'I lead <strong>TNR</strong>, a group of young Christians passionate about their walk with God — a space of growth, fellowship, and fire.', url: 'https://www.tiktok.com/@tnrfamille?lang=fr', cta: 'See TNR Family' },
      { icon: 'radio',     title: 'Connection & Reconnection', desc: 'Featured in the show <em>Connexion & Reconnexion</em> on <strong>T4J Channel</strong>, a Christian channel shining light on God\'s work.', url: 'https://youtu.be/EdyBWXCmbdM?si=uZzNH_t_mRLeZptz', cta: 'Watch the show' },
    ],
  },

  book: {
    tag:    '// Author',
    num:    '40',
    title:  'Messages\nof Life',
    part:   'Part I',
    quote:  'Forty messages to nourish the soul, illuminate the journey, and strengthen faith.',
    author: 'Written by',
    h2:     '40 Messages of Life',
    h2sub:  '— the Word that transforms',
    p1: 'I wrote the first part of {book}, a collection of messages drawn from my walk with God. This is not an academic theology book — it\'s an invitation to live God\'s Word daily, to discover who we truly are in Christ.',
    p2: 'Each message is a door: toward a deeper revelation of the Father\'s love, toward a life that exceeds the limits we set for ourselves.',
    p3: 'This project is ongoing — more is coming. The Word does not stop.',
    tags: ['Spirituality','Growth','Identity','Faith','Word of God'],
    cta: 'Request the book →',
  },

  media: {
    tag:    '// Media & Content',
    title:  'On',
    title2: 'social media',
    desc:   'I share my thoughts, teachings and perspectives across different platforms.',
    items: [
      { icon: 'tiktok',  platform: 'TikTok — @fanuelisraeltovey', title: 'Perspectives & Teachings',  desc: 'I share personal reflections on walking with the Lord — without mask, with authenticity.', links: [{ label: 'View profile', url: 'https://www.tiktok.com/@fanuelisraeltovey?lang=fr' }] },
      { icon: 'flame',   platform: 'TikTok — @tnrfamille',       title: 'TNR Family',                 desc: 'The official TNR page — sharing, encouragement and community life for young people who want to go further with God.', links: [{ label: 'View page', url: 'https://www.tiktok.com/@tnrfamille?lang=fr' }] },
      { icon: 'youtube', platform: 'YouTube — T4J Channel',      title: 'Connection & Reconnection',  desc: 'T4J is a Christian channel shining light on God\'s work. I regularly appear in the show Connexion & Reconnexion.', links: [{ label: 'The channel', url: 'https://www.youtube.com/@T4JChannel' }, { label: 'The episode', url: 'https://youtu.be/EdyBWXCmbdM?si=uZzNH_t_mRLeZptz' }] },
      { icon: 'code',    platform: 'Digital projects',           title: 'My work in production',      desc: 'GUFORD, GESCAPRO, Kidolé… Platforms with a real impact on the Togolese economy.', links: [{ label: 'GUFORD', url: 'https://guford.com/' }, { label: 'GESCAPRO', url: 'https://gescapro.net/' }, { label: 'Kidolé', url: 'https://kidole.io/' }] },
    ],
  },

  passion: {
    tag:    '// What I\'m passionate about',
    title:  'Beyond the',
    title2: 'code',
    items: [
      { icon: 'building', title: 'Architecture & Urban Design', desc: 'The way built space interacts with human beings deeply fascinates me. Architecture is not just an engineer\'s concern — it\'s an ongoing conversation between form, light, and life. I read, explore, and imagine spaces that elevate the soul.' },
      { icon: 'brush',    title: 'Art & Visual Expression',     desc: 'Art is a language I understand viscerally — whether pictorial, photographic, or digital. My artistic sensitivity also feeds my developer work: I build interfaces like one composes a work of art, with intention and harmony.' },
    ],
  },

  contact: {
    tag:    '// Let\'s work together',
    title:  'Ready to',
    title2: 'collaborate',
    title3: '?',
    desc:   'Whether for a web or mobile project, business consulting, or simply to connect — I\'m available. Don\'t hesitate.',
    cta:    'Send a message →',
  },

  footer: {
    copy: 'Designed & developed by {name} — Lomé, Togo © 2025',
  },
}
