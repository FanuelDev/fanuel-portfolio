<template>
  <section id="business" ref="sectionEl">
    <div class="container biz-wrap">
      <div class="biz-content" ref="contentEl">
        <div class="section-tag">// Conseil &amp; Stratégie</div>
        <h2 class="section-title left-title">
          Aider les petites entreprises à<br />
          <span class="gold">grandir avec clarté</span>
        </h2>
        <p>Au-delà du code, j'accompagne les entrepreneurs et porteurs de projets
          à structurer leurs idées, définir une stratégie claire et faire évoluer
          leur activité avec confiance.</p>
        <p>Mon approche combine la rigueur du développeur — analyser, structurer,
          itérer — avec une vision humaine centrée sur les réalités du terrain africain.</p>

        <div class="services" ref="servicesEl">
          <div class="service" v-for="(s, i) in services" :key="s.title">
            <div class="service-num">{{ String(i+1).padStart(2,'0') }}</div>
            <div class="service-body">
              <h4>{{ s.title }}</h4>
              <p>{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="biz-visual" ref="visualEl">
        <div class="biz-glow"></div>
        <div class="biz-photo">
          <img src="/images/IMG_4511.JPG" alt="Fanuel — Conseiller" />
          <div class="biz-photo-overlay"></div>
        </div>
        <div class="biz-float-card">
          <div class="float-icon">🎯</div>
          <div>
            <div class="float-title">Vision &amp; Stratégie</div>
            <div class="float-sub">Structurez. Évoluez. Impactez.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const sectionEl = ref(null)
const contentEl = ref(null)
const servicesEl= ref(null)
const visualEl  = ref(null)

const services = [
  { title: 'Clarification de l\'idée business',  desc: 'Transformer une idée floue en concept clair, viable et communicable.' },
  { title: 'Stratégie de développement',         desc: 'Définir les priorités, identifier les opportunités et poser les bases d\'une croissance durable.' },
  { title: 'Digitalisation &amp; Outils',        desc: 'Conseiller sur les outils numériques adaptés pour gagner en efficacité et visibilité.' },
]

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(contentEl.value.children, { y: 40, opacity: 0, stagger: 0.1, duration: 0.7 })
      .from(servicesEl.value.children, { x: -30, opacity: 0, stagger: 0.12, duration: 0.6 }, '-=0.3')
      .from(visualEl.value, { x: 60, opacity: 0, duration: 0.9 }, 0.2)
    obs.disconnect()
  }, { threshold: 0.1 })
  obs.observe(sectionEl.value)

  // floating card bob
  gsap.to('.biz-float-card', {
    y: -8, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1,
  })
})
</script>

<style scoped>
#business { padding: 7rem 0; }

.biz-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.left-title { text-align: left; margin-bottom: 1.25rem; }
.biz-content p { color: var(--muted); margin-bottom: 1rem; line-height: 1.85; }

.services { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
.service {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: var(--card);
  border: 1px solid rgba(212,168,83,0.18);
  border-radius: 14px;
  padding: 1.1rem 1.25rem;
  transition: border-color 0.3s, background 0.3s, transform 0.3s;
}
.service:hover {
  border-color: var(--gold);
  background: var(--gold-lo);
  transform: translateX(4px);
}
.service-num {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: var(--gold);
  padding-top: 0.15rem;
  min-width: 28px;
}
.service-body h4 { font-size: 0.88rem; font-weight: 600; margin-bottom: 0.2rem; }
.service-body p  { font-size: 0.78rem; color: var(--muted); margin: 0; line-height: 1.6; }

.biz-visual { position: relative; }
.biz-glow {
  position: absolute;
  width: 110%; height: 110%;
  top: -5%; left: -5%;
  background: radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 65%);
  pointer-events: none;
}
.biz-photo {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(212,168,83,0.22);
  box-shadow: 0 0 60px rgba(212,168,83,0.12);
}
.biz-photo img { width: 100%; display: block; }
.biz-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg) 0%, transparent 40%);
}

.biz-float-card {
  position: absolute;
  bottom: -1.5rem;
  right: -1.5rem;
  background: rgba(4,4,15,0.88);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(212,168,83,0.3);
  border-radius: 16px;
  padding: 1rem 1.25rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(212,168,83,0.1);
}
.float-icon    { font-size: 1.5rem; }
.float-title   { font-size: 0.85rem; font-weight: 600; }
.float-sub     { font-size: 0.72rem; color: var(--muted); }

@media (max-width: 900px) {
  .biz-wrap { grid-template-columns: 1fr; }
  .biz-float-card { right: 0.5rem; bottom: 0.5rem; }
}
</style>
