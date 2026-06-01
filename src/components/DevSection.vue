<template>
  <section id="dev" ref="sectionEl">
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="section-tag">// Expertise technique</div>
        <h2 class="section-title">Développeur <span class="grad">Web &amp; Mobile</span></h2>
        <p class="section-desc">
          Freelance passionné, je crée des solutions digitales modernes — SaaS, applications mobiles,
          et plateformes métier — avec une attention particulière à la performance et à l'UX.
        </p>
      </div>

      <div class="skills-grid" ref="skillsEl">
        <div class="skill-card" v-for="s in skills" :key="s.title"
             @mouseenter="onCardEnter($event.currentTarget)"
             @mouseleave="onCardLeave($event.currentTarget)">
          <div class="card-glow"></div>
          <div class="skill-icon">{{ s.icon }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <div class="tech-tags">
            <span class="tag" v-for="t in s.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>

      <div class="projects-header" ref="projHeaderEl">
        <div class="section-tag">// Réalisations notables</div>
        <h3 class="section-title" style="font-size:1.6rem">
          Projets en <span class="grad">production</span>
        </h3>
      </div>

      <div class="projects-grid" ref="projectsEl">
        <a class="project-card" v-for="p in projects" :key="p.title"
           :href="p.url" target="_blank" rel="noopener"
           @mouseenter="onCardEnter($event.currentTarget)"
           @mouseleave="onCardLeave($event.currentTarget)">
          <div class="card-glow"></div>
          <div class="project-top">
            <span class="project-icon">{{ p.icon }}</span>
            <span class="project-ext">↗</span>
          </div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
          <div class="tech-tags" style="margin-top:0.75rem">
            <span class="tag" v-for="t in p.tags" :key="t">{{ t }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const sectionEl   = ref(null)
const headerEl    = ref(null)
const skillsEl    = ref(null)
const projHeaderEl= ref(null)
const projectsEl  = ref(null)

const skills = [
  { icon: '🖥️', title: 'Frontend Web',       desc: 'Interfaces modernes, réactives et performantes.', tags: ['Angular','Vue.js','TypeScript','NgRx','RxJS'] },
  { icon: '📱', title: 'Mobile',             desc: 'Apps cross-platform fluides avec intégration API complète.', tags: ['Flutter','Dart','Riverpod','REST API'] },
  { icon: '🎨', title: 'UI / Design System', desc: 'Interfaces élégantes et cohérentes, collaboration design.', tags: ['TailwindCSS','SCSS','Bootstrap','Figma'] },
  { icon: '⚙️', title: 'Architecture',       desc: 'Organisation du code, CI/CD, collaboration inter-équipes.', tags: ['Docker','Git','CI/CD','Postman'] },
  { icon: '🏗️', title: 'SaaS & Produit',    desc: 'Plateformes SaaS complexes à fort trafic en production.', tags: ['SaaS','Scalabilité','Performance'] },
  { icon: '🤝', title: 'Lead Frontend',      desc: 'Encadrement d\'équipes, revues de code, qualité UX.', tags: ['Leadership','Code Review','Mentoring'] },
]

const projects = [
  { icon: '🚢', title: 'GUFORD — Port de Lomé', desc: 'Digitalisation portuaire (BAD, VBS, gestion véhicules). Angular + TailwindCSS pour Africa Consulting Leaders.', url: 'https://guford.com/', tags: ['Angular','TailwindCSS','REST'] },
  { icon: '💰', title: 'GESCAPRO',             desc: 'SaaS de tontine en production générant plus d\'1 milliard FCFA de transactions avec une interface moderne.', url: 'https://gescapro.net/', tags: ['SaaS','Vue.js','Finance'] },
  { icon: '📺', title: 'Kidolé',               desc: 'Gestion des panneaux publicitaires du booking à l\'installation. Plateforme web + mobile Flutter.', url: 'https://kidole.io/', tags: ['Flutter','Vue.js','Mobile'] },
]

const onCardEnter = (card) => {
  const glow = card.querySelector('.card-glow')
  gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out' })
  gsap.to(glow, { opacity: 1, duration: 0.4 })
}
const onCardLeave = (card) => {
  const glow = card.querySelector('.card-glow')
  gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
  gsap.to(glow, { opacity: 0, duration: 0.4 })
}

onMounted(() => {
  const reveal = (target, opts = {}) => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      gsap.from(target, { y: opts.y ?? 40, opacity: 0, stagger: opts.stagger ?? 0, duration: opts.dur ?? 0.7, ease: 'power3.out', delay: opts.delay ?? 0 })
      obs.disconnect()
    }, { threshold: 0.1 })
    obs.observe(typeof target === 'string' ? document.querySelector(target) : (target.length ? target[0].parentElement : target))
  }

  const obsHeader = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    gsap.from(headerEl.value.children, { y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' })
    obsHeader.disconnect()
  }, { threshold: 0.15 })
  obsHeader.observe(headerEl.value)

  const obsSkills = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    gsap.from(skillsEl.value.children, { y: 50, opacity: 0, scale: 0.94, stagger: 0.1, duration: 0.65, ease: 'power3.out' })
    obsSkills.disconnect()
  }, { threshold: 0.08 })
  obsSkills.observe(skillsEl.value)

  const obsProj = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    gsap.from(projectsEl.value.children, { y: 50, opacity: 0, scale: 0.95, stagger: 0.12, duration: 0.65, ease: 'power3.out' })
    obsProj.disconnect()
  }, { threshold: 0.1 })
  obsProj.observe(projectsEl.value)
})
</script>

<style scoped>
#dev { padding: 7rem 0; background: var(--bg2); }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
  margin-bottom: 4.5rem;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}
.projects-header {
  margin-bottom: 2rem;
}

.skill-card,
.project-card {
  position: relative;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.75rem;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
  display: block;
}
.skill-card:hover,
.project-card:hover {
  border-color: var(--purple);
  box-shadow: 0 4px 32px var(--glow);
}

.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(139,61,255,0.12), transparent 70%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
}

.skill-icon {
  font-size: 1.6rem;
  margin-bottom: 0.9rem;
  display: inline-block;
  padding: 0.6rem;
  background: var(--purple-lo);
  border-radius: 10px;
  border: 1px solid var(--border);
}
.skill-card h3 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.45rem; }
.skill-card p  { font-size: 0.8rem; color: var(--muted); line-height: 1.65; }

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}
.project-icon { font-size: 1.6rem; }
.project-ext  { color: var(--purple); font-size: 1.1rem; opacity: 0.7; transition: opacity 0.2s, transform 0.2s; }
.project-card:hover .project-ext { opacity: 1; transform: translate(2px, -2px); }
.project-card h3 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.4rem; }
.project-card p  { font-size: 0.8rem; color: var(--muted); line-height: 1.65; }

.tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.75rem; }

@media (max-width: 900px) {
  .skills-grid   { grid-template-columns: 1fr 1fr; }
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 580px) {
  .skills-grid, .projects-grid { grid-template-columns: 1fr; }
}
</style>
