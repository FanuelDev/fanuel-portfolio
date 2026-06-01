<template>
  <section id="spiritual" ref="sectionEl">
    <div class="spirit-bg-glow"></div>
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="gold-tag">{{ t('spiritual.tag') }}</div>
        <h2 class="section-title">
          {{ t('spiritual.title') }} <span class="gold">{{ t('spiritual.title2') }}</span>
        </h2>
        <p class="section-desc">{{ t('spiritual.desc') }}</p>
      </div>

      <div class="spirit-grid" ref="gridEl">
        <div class="spirit-card" v-for="c in tm('spiritual.cards')" :key="c.title"
             @mouseenter="onEnter($event.currentTarget)"
             @mouseleave="onLeave($event.currentTarget)">
          <div class="spirit-glow-inner"></div>
          <div class="spirit-icon"><AppIcon :name="c.icon" :size="32" /></div>
          <h3>{{ c.title }}</h3>
          <p v-html="c.desc"></p>
          <a :href="c.url" target="_blank" rel="noopener" class="spirit-link">{{ c.cta }} ↗</a>
        </div>
      </div>

      <div class="spirit-verse" ref="verseEl">
        <div class="verse-line"></div>
        <blockquote>
          {{ t('spiritual.verse') }}
          <cite>{{ t('spiritual.verse_ref') }}</cite>
        </blockquote>
        <div class="verse-line"></div>
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
const sectionEl = ref(null); const headerEl = ref(null)
const gridEl = ref(null); const verseEl = ref(null)

const onEnter = (card) => {
  gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out' })
  gsap.to(card.querySelector('.spirit-glow-inner'), { opacity: 1, duration: 0.4 })
}
const onLeave = (card) => {
  gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
  gsap.to(card.querySelector('.spirit-glow-inner'), { opacity: 0, duration: 0.4 })
}

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(headerEl.value.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.7 })
      .from(gridEl.value.children,  { y: 50, opacity: 0, scale: 0.93, stagger: 0.15, duration: 0.7 }, '-=0.3')
      .from(verseEl.value,           { opacity: 0, y: 25, duration: 0.8 }, '-=0.2')
    obs.disconnect()
  }, { threshold: 0.08 })
  obs.observe(sectionEl.value)
})
</script>

<style scoped>
#spiritual { padding: 7rem 0; background: var(--bg2); position: relative; overflow: hidden; }
.spirit-bg-glow {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 700px; height: 700px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,168,83,0.05) 0%, transparent 65%);
  pointer-events: none; animation: spirit-pulse 5s ease-in-out infinite;
}
@keyframes spirit-pulse {
  0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
  50%      { transform: translate(-50%,-50%) scale(1.1); opacity: 1; }
}
.spirit-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-bottom: 4rem; }
.spirit-card {
  position: relative; background: var(--card); border: 1px solid rgba(212,168,83,0.18);
  border-radius: 22px; padding: 2.2rem 1.75rem; text-align: center; overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.spirit-card:hover { border-color: var(--gold); box-shadow: 0 8px 40px rgba(212,168,83,0.15); }
.spirit-glow-inner { position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(212,168,83,0.1), transparent 70%); opacity: 0; pointer-events: none; }
.spirit-icon { margin-bottom: 1.1rem; display: flex; justify-content: center; color: var(--gold); }
.spirit-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.6rem; }
.spirit-card p  { font-size: 0.82rem; color: var(--muted); line-height: 1.75; }
.spirit-link { display: inline-block; margin-top: 1.25rem; font-size: 0.78rem; font-weight: 600; color: var(--gold); text-decoration: none; transition: color 0.2s, letter-spacing 0.2s; }
.spirit-link:hover { color: #F5C26B; letter-spacing: 0.03em; }
.spirit-verse { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 2rem; text-align: center; padding: 0 2rem; }
.verse-line { height: 1px; background: linear-gradient(90deg, transparent, rgba(212,168,83,0.35)); }
.spirit-verse .verse-line:last-child { background: linear-gradient(90deg, rgba(212,168,83,0.35), transparent); }
blockquote { font-style: italic; color: var(--muted); font-size: 0.88rem; line-height: 1.8; max-width: 600px; }
cite { display: block; margin-top: 0.5rem; font-size: 0.75rem; color: var(--gold); font-style: normal; font-family: 'Space Mono', monospace; }
@media (max-width: 900px) {
  .spirit-grid { grid-template-columns: 1fr; }
  .spirit-verse { grid-template-columns: 1fr; gap: 1rem; }
  .verse-line { display: none; }
}
@media (max-width: 600px) {
  .spirit-card { padding: 1.75rem 1.25rem; }
  blockquote { font-size: 0.82rem; }
}
</style>
