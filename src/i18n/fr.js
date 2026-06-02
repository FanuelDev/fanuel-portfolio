export default {
  nav: {
    dev:      'Dev',
    conseil:  'Conseil',
    foi:      'Foi',
    livre:    'Livre',
    medias:   'Médias',
    contact:  'Contact',
  },

  hero: {
    tag:     '// Lomé, Togo — disponible en freelance',
    name1:   'Fanuel Israël',
    name2:   'TOVEY K.',
    sub:     '{dev} Conseiller d\'entreprises. Auteur. Leader & Enseignant.',
    sub_dev: 'Développeur Web & Mobile.',
    sub2:    'Un esprit curieux au service de la technologie, des hommes et de Dieu.',
    cta_primary: 'Travaillons ensemble →',
    cta_secondary: 'Voir mes projets',
    stat1_num:   '6+',
    stat1_label: 'ans d\'expérience',
    stat2_num:   '5+',
    stat2_label: 'entreprises servies',
    stat3_num:   '5+',
    stat3_label: 'projets en prod.',
    badge_loc:   'Lomé · Togo',
    scroll:      'Défiler',
  },

  about: {
    tag:   '// À propos',
    title: 'Plusieurs univers,',
    title2: 'une seule vision',
    badge: 'Lomé, Togo 🇹🇬',
    p1: 'Je suis {name}, développeur frontend freelance basé à Lomé. Je construis des applications web et mobiles performantes avec Angular, Vue.js et Flutter — des plateformes qui gèrent des milliards de transactions et digitalisent des infrastructures critiques.',
    p2: 'Mais ma vie dépasse l\'écran. Je suis conseiller pour les petites entreprises, passionné d\'architecture et d\'art, auteur du livre {book}, et leader du groupe de jeunes {tnr}.',
    p3: 'Par-dessus tout, je marche comme un {identity} qui s\'est révélé pleinement en Jésus-Christ — une identité qui éclaire tout ce que je fais.',
    identity: 'enfant du Dieu tout-puissant',
    pillars: {
      dev:    { label: 'Développeur',  sub: 'Web & Mobile Freelance' },
      conseil:{ label: 'Conseiller',   sub: 'Stratégie & Business'   },
      foi:    { label: 'Serviteur',    sub: 'Enseignant & Leader TNR' },
      auteur: { label: 'Auteur',       sub: '40 Messages de Vie'      },
    },
  },

  dev: {
    tag:   '// Expertise technique',
    title: 'Développeur',
    title2: 'Web & Mobile',
    desc:  'Freelance passionné, je crée des solutions digitales modernes — SaaS, applications mobiles, et plateformes métier — avec une attention particulière à la performance et à l\'UX.',
    skills: [
      { icon: 'monitor',    title: 'Frontend Web',       desc: 'Interfaces modernes, réactives et performantes.',                       tags: ['Angular','Vue.js','TypeScript','NgRx','RxJS'] },
      { icon: 'smartphone', title: 'Mobile',             desc: 'Apps cross-platform fluides avec intégration API complète.',             tags: ['Flutter','Dart','Riverpod','REST API'] },
      { icon: 'layers',     title: 'UI / Design System', desc: 'Interfaces élégantes et cohérentes, collaboration design.',             tags: ['TailwindCSS','SCSS','Bootstrap','Figma'] },
      { icon: 'cpu',        title: 'Architecture',       desc: 'Organisation du code, CI/CD, collaboration inter-équipes.',             tags: ['Docker','Git','CI/CD','Postman'] },
      { icon: 'cloud',      title: 'SaaS & Produit',    desc: 'Plateformes SaaS complexes à fort trafic en production.',               tags: ['SaaS','Scalabilité','Performance'] },
      { icon: 'users',      title: 'Lead Frontend',      desc: 'Encadrement d\'équipes, revues de code, qualité UX.',                  tags: ['Leadership','Code Review','Mentoring'] },
    ],
    proj_tag:   '// Réalisations notables',
    proj_title: 'Projets en',
    proj_title2: 'production',
    projects: [
      { icon: 'anchor',    title: 'GUFORD — Port de Lomé', desc: 'Digitalisation portuaire (BAD, VBS, gestion véhicules). Angular + TailwindCSS pour Africa Consulting Leaders.', url: 'https://guford.com/',    tags: ['Angular','TailwindCSS','REST'] },
      { icon: 'chart',     title: 'GESCAPRO',              desc: 'SaaS de tontine en production générant plus d\'1 milliard FCFA de transactions avec une interface moderne.',    url: 'https://gescapro.net/', tags: ['SaaS','Vue.js','Finance'] },
      { icon: 'megaphone', title: 'Kidolé',                desc: 'Gestion des panneaux publicitaires du booking à l\'installation. Plateforme web + mobile Flutter.',              url: 'https://kidole.io/',    tags: ['Flutter','Vue.js','Mobile'] },
    ],
  },

  business: {
    tag:    '// Conseil & Stratégie',
    title:  'Aider les petites entreprises à',
    title2: 'grandir avec clarté',
    p1: 'Au-delà du code, j\'accompagne les entrepreneurs et porteurs de projets à structurer leurs idées, définir une stratégie claire et faire évoluer leur activité avec confiance.',
    p2: 'Mon approche combine la rigueur du développeur — analyser, structurer, itérer — avec une vision humaine centrée sur les réalités du terrain africain.',
    float_title: 'Vision & Stratégie',
    float_sub:   'Structurez. Évoluez. Impactez.',
    services: [
      { title: 'Clarification de l\'idée business',  desc: 'Transformer une idée floue en concept clair, viable et communicable.' },
      { title: 'Stratégie de développement',         desc: 'Définir les priorités, identifier les opportunités et poser les bases d\'une croissance durable.' },
      { title: 'Digitalisation & Outils',            desc: 'Conseiller sur les outils numériques adaptés pour gagner en efficacité et visibilité.' },
    ],
  },

  spiritual: {
    tag:   '// Foi & Ministère',
    title: 'Enfant du',
    title2: 'Dieu Tout-Puissant',
    desc:  'Je ne me définis pas d\'abord comme un "chrétien" — mais comme un fils du Dieu vivant qui s\'est révélé pleinement en Jésus-Christ. Cette identité n\'est pas une case, c\'est mon fondement.',
    teaching_tag:   'En action',
    teaching_title: 'Enseignement sur la gestion de ses avoirs en tant qu\'enfant de Dieu',
    teaching_desc:  'À l\'occasion du premier anniversaire de TNR, j\'ai partagé lors d\'un talk show aux côtés de Mr. Luc Kekle (Responsable et fondateur de T4J Channel), du Pasteur LARE (Missionnaire au service de Dieu) et de Sophie AKOGO (Communicatrice d\'entreprise et Fondatrice de SaeMenus) — un enseignement sur la gestion de sa finance, de ses biens et de ses ressources en tant qu\'enfant de Dieu.',
    verse: '« Car je suis convaincu que ni la mort, ni la vie… ni aucune autre créature ne pourra nous séparer de l\'amour de Dieu manifesté en Jésus-Christ notre Seigneur. »',
    verse_ref: '— Romains 8:38-39',
    cards: [
      { icon: 'book-open', title: 'Enseignant de la Parole', desc: 'Je partage des enseignements fondés sur la Parole de Dieu — des messages qui touchent la vie réelle, la marche quotidienne avec le Seigneur.', url: 'https://www.tiktok.com/@fanuelisraeltovey?lang=fr', cta: 'Écouter sur TikTok' },
      { icon: 'flame',     title: 'Leader TNR',               desc: 'Je dirige <strong>TNR</strong>, un groupe de jeunes chrétiens passionnés par leur marche avec Dieu — un espace de croissance, de communion et de feu.', url: 'https://www.tiktok.com/@tnrfamille?lang=fr', cta: 'Voir TNR Famille' },
      { icon: 'radio',     title: 'Connexion & Reconnexion',  desc: 'Intervenant dans l\'émission <em>Connexion & Reconnexion</em> sur <strong>T4J Channel</strong>, une chaîne qui met en lumière l\'œuvre de Dieu.', url: 'https://youtu.be/EdyBWXCmbdM?si=uZzNH_t_mRLeZptz', cta: 'Voir l\'émission' },
    ],
  },

  book: {
    tag:    '// Auteur',
    num:    '40',
    title:  'Messages\nde Vie',
    part:   'Partie I',
    quote:  'Quarante messages pour nourrir l\'âme, éclairer la marche et fortifier la foi.',
    author: 'Écrit par',
    h2:     '40 Messages de Vie',
    h2sub:  '— la Parole qui transforme',
    p1: 'J\'ai écrit la première partie de {book}, un recueil de messages issus de ma marche avec Dieu. Ce n\'est pas un livre de théologie académique — c\'est une invitation à vivre la Parole de Dieu au quotidien, à découvrir qui nous sommes réellement en Christ.',
    p2: 'Chaque message est une porte : vers une révélation plus profonde de l\'amour du Père, vers une vie qui dépasse les limites que nous nous imposons.',
    p3: 'Ce projet est en cours — la suite arrive. La Parole ne s\'arrête pas.',
    tags: ['Spiritualité','Croissance','Identité','Foi','Parole de Dieu'],
    cta: 'Demander le livre →',
  },

  media: {
    tag:   '// Médias & Contenu',
    title: 'Sur les',
    title2: 'réseaux',
    desc:  'Je partage mes réflexions, enseignements et points de vue sur différentes plateformes.',
    items: [
      { icon: 'tiktok',  platform: 'TikTok — @fanuelisraeltovey', title: 'Points de vue & Enseignements', desc: 'Je partage mes réflexions personnelles sur la marche avec le Seigneur — sans masque, avec authenticité.', links: [{ label: 'Voir le profil', url: 'https://www.tiktok.com/@fanuelisraeltovey?lang=fr' }] },
      { icon: 'flame',   platform: 'TikTok — @tnrfamille',       title: 'TNR Famille',                   desc: 'La page officielle de TNR — partages, encouragements et vie de communauté pour les jeunes qui veulent aller plus loin avec Dieu.', links: [{ label: 'Voir la page', url: 'https://www.tiktok.com/@tnrfamille?lang=fr' }] },
      { icon: 'youtube', platform: 'YouTube — T4J Channel',      title: 'Connexion & Reconnexion',       desc: 'T4J est une chaîne chrétienne qui met la lumière sur l\'œuvre de Dieu. J\'y interviens dans l\'émission Connexion & Reconnexion.', links: [{ label: 'La chaîne', url: 'https://www.youtube.com/@T4JChannel' }, { label: 'L\'épisode', url: 'https://youtu.be/EdyBWXCmbdM?si=uZzNH_t_mRLeZptz' }] },
      { icon: 'code',    platform: 'Projets digitaux',           title: 'Mon travail en production',     desc: 'GUFORD, GESCAPRO, Kidolé… Des plateformes qui ont un impact réel sur l\'économie togolaise.', links: [{ label: 'GUFORD', url: 'https://guford.com/' }, { label: 'GESCAPRO', url: 'https://gescapro.net/' }, { label: 'Kidolé', url: 'https://kidole.io/' }] },
    ],
  },

  passion: {
    tag:   '// Ce qui me passionne',
    title: 'Au-delà du',
    title2: 'code',
    items: [
      { icon: 'building', title: 'Architecture & Urbanisme',     desc: 'La façon dont l\'espace construit dialogue avec l\'humain me fascine profondément. L\'architecture n\'est pas qu\'une affaire d\'ingénieurs — c\'est une conversation permanente entre la forme, la lumière et la vie. Je lis, j\'explore, j\'imagine des espaces qui élèvent l\'âme.' },
      { icon: 'brush',    title: 'Art & Expression visuelle',    desc: 'L\'art est un langage que je comprends viscéralement — qu\'il soit pictural, photographique ou numérique. Ma sensibilité artistique nourrit aussi mon travail de développeur : je construis des interfaces comme on compose une œuvre, avec intention et harmonie.' },
    ],
  },

  contact: {
    tag:   '// Travaillons ensemble',
    title: 'Prêt à',
    title2: 'collaborer',
    title3: '?',
    desc:  'Que ce soit pour un projet web ou mobile, un conseil business, ou simplement pour échanger — je suis disponible. N\'hésitez pas.',
    cta:   'Envoyer un message →',
  },

  footer: {
    copy: 'Conçu & développé par {name} — Lomé, Togo © 2025',
  },
}
