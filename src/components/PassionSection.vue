<template>
  <section id="passion" ref="sectionEl">
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="section-tag">// Ce qui me passionne</div>
        <h2 class="section-title">Au-delà du <span class="grad">code</span></h2>
      </div>
      <div class="passion-grid" ref="gridEl">
        <div class="passion-card" v-for="p in passions" :key="p.title"
             @mouseenter="onEnter($event.currentTarget)"
             @mouseleave="onLeave($event.currentTarget)">
          <div class="pc-glow"></div>
          <div class="pc-icon">{{ p.icon }}</div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const sectionEl = ref(null)
const headerEl  = ref(null)
const gridEl    = ref(null)

const passions = [
  {
    icon: '🏛️',
    title: 'Architecture & Urbanisme',
    desc: 'La façon dont l\'espace construit dialogue avec l\'humain me fascine profondément. L\'architecture n\'est pas qu\'une affaire d\'ingénieurs — c\'est une conversation permanente entre la forme, la lumière et la vie. Je lis, j\'explore, j\'imagine des espaces qui élèvent l\'âme.',
  },
  {
    icon: '🎨',
    title: 'Art & Expression visuelle',
    desc: 'L\'art est un langage que je comprends viscéralement — qu\'il soit pictural, photographique ou numérique. Ma sensibilité artistique nourrit aussi mon travail de développeur : je construis des interfaces comme on compose une œuvre, avec intention et harmonie.',
  },
]

const onEnter = (card) => {
  gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out' })
  gsap.to(card.querySelector('.pc-glow'), { opacity: 1, duration: 0.4 })
}
const onLeave = (card) => {
  gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
  gsap.to(card.querySelector('.pc-glow'), { opacity: 0, duration: 0.4 })
}

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    gsap.from(headerEl.value.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out' })
    gsap.from(gridEl.value.children,   { y: 50, opacity: 0, x: (i) => i === 0 ? -40 : 40, stagger: 0.15, duration: 0.75, ease: 'power3.out', delay: 0.2 })
    obs.disconnect()
  }, { threshold: 0.15 })
  obs.observe(sectionEl.value)
})
</script>

<style scoped>
#passion { padding: 7rem 0; }

.passion-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.passion-card {
  position: relative;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 2.5rem 2.25rem;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.passion-card:hover {
  border-color: var(--purple);
  box-shadow: 0 8px 36px var(--glow);
}
.pc-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(139,61,255,0.1), transparent 65%);
  opacity: 0;
  pointer-events: none;
}
.pc-icon   { font-size: 2.6rem; margin-bottom: 1rem; }
.passion-card h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; }
.passion-card p  { font-size: 0.85rem; color: var(--muted); line-height: 1.8; }

@media (max-width: 768px) {
  .passion-grid { grid-template-columns: 1fr; }
}
</style>
