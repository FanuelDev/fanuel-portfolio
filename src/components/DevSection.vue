<template>
  <section id="dev" ref="sectionEl">
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="section-tag">{{ t('dev.tag') }}</div>
        <h2 class="section-title">{{ t('dev.title') }} <span class="grad">{{ t('dev.title2') }}</span></h2>
        <p class="section-desc">{{ t('dev.desc') }}</p>
      </div>

      <div class="skills-grid" ref="skillsEl">
        <div class="skill-card" v-for="s in tm('dev.skills')" :key="s.title"
             @mouseenter="onCardEnter($event.currentTarget)"
             @mouseleave="onCardLeave($event.currentTarget)">
          <div class="card-glow"></div>
          <div class="skill-icon"><AppIcon :name="s.icon" :size="22" /></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <div class="tech-tags">
            <span class="tag" v-for="tag in Array.from(s.tags)" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>

      <div class="projects-header" ref="projHeaderEl">
        <div class="section-tag">{{ t('dev.proj_tag') }}</div>
        <h3 class="section-title" style="font-size:1.6rem">
          {{ t('dev.proj_title') }} <span class="grad">{{ t('dev.proj_title2') }}</span>
        </h3>
      </div>

      <div class="projects-grid" ref="projectsEl">
        <a class="project-card" v-for="p in tm('dev.projects')" :key="p.title"
           :href="p.url" target="_blank" rel="noopener"
           @mouseenter="onCardEnter($event.currentTarget)"
           @mouseleave="onCardLeave($event.currentTarget)">
          <div class="card-glow"></div>
          <div class="project-top">
            <span class="project-icon"><AppIcon :name="p.icon" :size="24" /></span>
            <span class="project-ext">↗</span>
          </div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
          <div class="tech-tags" style="margin-top:0.75rem">
            <span class="tag" v-for="tag in Array.from(p.tags)" :key="tag">{{ tag }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import AppIcon from './AppIcon.vue'

const { t, tm } = useI18n()
const sectionEl    = ref(null)
const headerEl     = ref(null)
const skillsEl     = ref(null)
const projHeaderEl = ref(null)
const projectsEl   = ref(null)

const onCardEnter = (card) => {
  gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out' })
  gsap.to(card.querySelector('.card-glow'), { opacity: 1, duration: 0.4 })
}
const onCardLeave = (card) => {
  gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
  gsap.to(card.querySelector('.card-glow'), { opacity: 0, duration: 0.4 })
}

onMounted(() => {
  const obs = (target, stagger = 0.1, opts = {}) => {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      gsap.from(el.children, { y: 45, opacity: 0, scale: opts.scale ?? 1, stagger, duration: 0.65, ease: 'power3.out', delay: opts.delay ?? 0 })
      io.disconnect()
    }, { threshold: 0.08 })
    io.observe(el)
  }

  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    gsap.from(headerEl.value.children, { y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' })
    io.disconnect()
  }, { threshold: 0.15 })
  io.observe(headerEl.value)

  obs(skillsEl.value, 0.1, { scale: 0.94 })
  obs(projectsEl.value, 0.12, { scale: 0.95 })
})
</script>

<style scoped>
#dev { padding: 7rem 0; background: var(--bg2); }

.skills-grid  { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.4rem; margin-bottom: 4.5rem; }
.projects-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.4rem; }
.projects-header { margin-bottom: 2rem; }

.skill-card, .project-card {
  position: relative; background: var(--card); border: 1px solid var(--border);
  border-radius: 18px; padding: 1.75rem; overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
  text-decoration: none; color: inherit; display: block;
}
.skill-card:hover, .project-card:hover { border-color: var(--purple); box-shadow: 0 4px 32px var(--glow); }
.card-glow {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(139,61,255,0.12), transparent 70%);
  opacity: 0; pointer-events: none;
}
.skill-icon { margin-bottom: 0.9rem; display: inline-flex; padding: 0.65rem; background: var(--purple-lo); border-radius: 10px; border: 1px solid var(--border); color: var(--purple); }
.skill-card h3 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.45rem; }
.skill-card p  { font-size: 0.8rem; color: var(--muted); line-height: 1.65; }
.project-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; }
.project-icon { display: flex; color: var(--purple); }
.project-ext  { color: var(--purple); font-size: 1.1rem; opacity: 0.7; transition: opacity 0.2s, transform 0.2s; }
.project-card:hover .project-ext { opacity: 1; transform: translate(2px, -2px); }
.project-card h3 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.4rem; }
.project-card p  { font-size: 0.8rem; color: var(--muted); line-height: 1.65; }
.tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.75rem; }

@media (max-width: 900px) { .skills-grid, .projects-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 580px) {
  .skills-grid, .projects-grid { grid-template-columns: 1fr; }
  .skill-card, .project-card { padding: 1.25rem; }
}
@media (max-width: 400px) {
  .skills-grid { margin-bottom: 3rem; }
}
</style>
