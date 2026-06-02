<template>
  <section id="clients" ref="sectionEl">
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="section-tag">{{ t('clients.tag') }}</div>
        <h2 class="section-title">
          {{ t('clients.title') }} <span class="grad">{{ t('clients.title2') }}</span>
        </h2>
        <p class="section-desc">{{ t('clients.desc') }}</p>
      </div>

      <div class="clients-grid" ref="gridEl">
        <a
          v-for="c in tm('clients.list')"
          :key="c.name"
          :href="c.url || null"
          :target="c.url ? '_blank' : null"
          rel="noopener"
          class="client-card"
          :class="{ 'no-link': !c.url }"
          @mouseenter="onEnter($event.currentTarget)"
          @mouseleave="onLeave($event.currentTarget)"
        >
          <div class="client-glow"></div>
          <div class="client-top">
            <div class="client-icon"><AppIcon :name="c.icon" :size="28" /></div>
            <div class="client-sector">{{ c.sector }}</div>
          </div>
          <h3 class="client-name">{{ c.name }}</h3>
          <p class="client-desc">{{ c.desc }}</p>
          <div v-if="c.url" class="client-link">{{ c.url.replace('https://', '') }} ↗</div>
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
const sectionEl = ref(null)
const headerEl  = ref(null)
const gridEl    = ref(null)

const onEnter = (card) => {
  gsap.to(card, { y: -6, duration: 0.3, ease: 'power2.out' })
  gsap.to(card.querySelector('.client-glow'), { opacity: 1, duration: 0.35 })
}
const onLeave = (card) => {
  gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
  gsap.to(card.querySelector('.client-glow'), { opacity: 0, duration: 0.4 })
}

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(headerEl.value.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.7 })
      .from(gridEl.value.children,   { y: 50, opacity: 0, scale: 0.93, stagger: 0.1, duration: 0.6 }, '-=0.4')
    obs.disconnect()
  }, { threshold: 0.08 })
  obs.observe(sectionEl.value)
})
</script>

<style scoped>
#clients { padding: 7rem 0; }

.clients-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.client-card {
  position: relative;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.client-card:not(.no-link):hover {
  border-color: var(--purple);
  box-shadow: 0 8px 36px var(--glow);
}
.client-card.no-link { cursor: default; }

.client-glow {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 0%, var(--purple-lo), transparent 65%);
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s;
}

.client-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.client-icon { color: var(--purple); display: flex; }
.client-sector {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 0.2rem 0.65rem;
}

.client-name {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
}
.client-desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.75;
  flex: 1;
}
.client-link {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  color: var(--purple);
  margin-top: 0.5rem;
  transition: letter-spacing 0.2s;
}
.client-card:hover .client-link { letter-spacing: 0.03em; }

@media (max-width: 900px) {
  .clients-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .clients-grid { grid-template-columns: 1fr; }
}
</style>
