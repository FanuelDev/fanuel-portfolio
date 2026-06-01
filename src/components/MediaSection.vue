<template>
  <section id="media" ref="sectionEl">
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="section-tag">{{ t('media.tag') }}</div>
        <h2 class="section-title">{{ t('media.title') }} <span class="grad">{{ t('media.title2') }}</span></h2>
        <p class="section-desc">{{ t('media.desc') }}</p>
      </div>
      <div class="media-grid" ref="gridEl">
        <div class="media-card" v-for="m in tm('media.items')" :key="m.title"
             @mouseenter="onEnter($event.currentTarget)"
             @mouseleave="onLeave($event.currentTarget)">
          <div class="mc-glow"></div>
          <div class="mc-header">
            <div class="mc-platform-wrap">
              <span class="mc-platform-icon"><AppIcon :name="m.icon" :size="18" /></span>
              <span class="mc-platform">{{ m.platform }}</span>
            </div>
          </div>
          <h3>{{ m.title }}</h3>
          <p>{{ m.desc }}</p>
          <div class="mc-footer">
            <a v-for="l in m.links" :key="l.label" :href="l.url" target="_blank" rel="noopener" class="mc-link">{{ l.label }} ↗</a>
          </div>
        </div>
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
const sectionEl = ref(null); const headerEl = ref(null); const gridEl = ref(null)

const onEnter = (card) => { gsap.to(card, { y: -5, duration: 0.35, ease: 'power2.out' }); gsap.to(card.querySelector('.mc-glow'), { opacity: 1, duration: 0.35 }) }
const onLeave = (card) => { gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' }); gsap.to(card.querySelector('.mc-glow'), { opacity: 0, duration: 0.4 }) }

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    gsap.from(headerEl.value.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out' })
    gsap.from(gridEl.value.children, { y: 50, opacity: 0, scale: 0.94, stagger: 0.12, duration: 0.65, ease: 'power3.out', delay: 0.2 })
    obs.disconnect()
  }, { threshold: 0.1 })
  obs.observe(sectionEl.value)
})
</script>

<style scoped>
#media { padding: 7rem 0; background: var(--bg2); }
.media-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
.media-card { position: relative; background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 1.75rem; overflow: hidden; transition: border-color 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; }
.media-card:hover { border-color: var(--purple); box-shadow: 0 8px 36px var(--glow); }
.mc-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(139,61,255,0.1), transparent 65%); opacity: 0; pointer-events: none; }
.mc-header { margin-bottom: 0.75rem; }
.mc-platform-wrap { display: flex; align-items: center; gap: 0.5rem; }
.mc-platform-icon { display: flex; color: var(--purple); }
.mc-platform { font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--purple); }
.media-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
.media-card p  { font-size: 0.82rem; color: var(--muted); line-height: 1.7; flex: 1; }
.mc-footer { display: flex; gap: 1rem; flex-wrap: wrap; padding-top: 1rem; margin-top: 1rem; border-top: 1px solid var(--border); }
.mc-link { font-size: 0.78rem; font-weight: 600; color: var(--purple); text-decoration: none; transition: color 0.2s; }
.mc-link:hover { color: var(--magenta); }
@media (max-width: 768px) { .media-grid { grid-template-columns: 1fr; } }
</style>
