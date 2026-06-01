<template>
  <section id="hero" ref="heroEl">
    <div class="hero-glow g1"></div>
    <div class="hero-glow g2"></div>

    <div class="container hero-inner">
      <div class="hero-content" ref="heroContent">
        <div class="hero-tag" ref="heroTag">// Lomé, Togo — disponible en freelance</div>
        <h1 class="hero-name" ref="heroName">
          Fanuel Israël<br />
          <span class="grad">TOVEY K.</span>
        </h1>
        <p class="hero-sub" ref="heroSub">
          <strong>Développeur Web &amp; Mobile.</strong> Conseiller d'entreprises.
          Auteur. Leader &amp; Enseignant.<br />
          Un esprit curieux au service de la <strong>technologie</strong>,
          des <strong>hommes</strong> et de <strong>Dieu</strong>.
        </p>
        <div class="hero-ctas" ref="heroCtas">
          <a href="#contact" class="btn btn-primary">Travaillons ensemble →</a>
          <a href="#dev" class="btn btn-outline">Voir mes projets</a>
        </div>

        <div class="hero-stats" ref="heroStats">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat-num">{{ s.num }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-photo-col" ref="photoCol">
        <div class="photo-ring ring1"></div>
        <div class="photo-ring ring2"></div>
        <div class="hero-photo-frame">
          <img src="/images/IMG_4501.JPG" alt="Fanuel Israël TOVEY" />
          <div class="photo-overlay"></div>
        </div>
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <div>
            <div class="badge-name">Fanuel Israël TOVEY K.</div>
            <div class="badge-loc">📍 Lomé · Togo</div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-hint" ref="scrollHint">
      <span>Défiler</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroEl     = ref(null)
const heroTag    = ref(null)
const heroName   = ref(null)
const heroSub    = ref(null)
const heroCtas   = ref(null)
const heroStats  = ref(null)
const photoCol   = ref(null)
const scrollHint = ref(null)

const stats = [
  { num: '5+', label: 'ans d\'expérience' },
  { num: '1B+', label: 'FCFA transactés' },
  { num: '3', label: 'projets en prod.' },
]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.from(heroTag.value,   { y: 30, opacity: 0, duration: 0.7, delay: 0.6 })
    .from(heroName.value,  { y: 50, opacity: 0, duration: 0.8 }, '-=0.4')
    .from(heroSub.value,   { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
    .from(heroCtas.value,  { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from(heroStats.value, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from(photoCol.value,  { x: 60, opacity: 0, duration: 1.0 }, 0.8)
    .from(scrollHint.value,{ opacity: 0, duration: 0.6 }, '-=0.2')

  // floating photo
  gsap.to(photoCol.value, {
    y: -14,
    duration: 3.5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })

  // pulsing rings
  gsap.to('.ring1', { scale: 1.06, opacity: 0.4, duration: 2.2, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  gsap.to('.ring2', { scale: 1.10, opacity: 0.25, duration: 3.0, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.8 })
})
</script>

<style scoped>
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  overflow: hidden;
  position: relative;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.g1 {
  width: 640px; height: 640px;
  background: radial-gradient(circle, rgba(139,61,255,0.18) 0%, transparent 70%);
  top: -160px; right: -80px;
}
.g2 {
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(224,64,251,0.12) 0%, transparent 70%);
  bottom: -60px; left: -100px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
}

.hero-tag {
  display: inline-block;
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--purple);
  border: 1px solid var(--border);
  padding: 0.4rem 1.1rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
  background: rgba(139,61,255,0.07);
}

.hero-name {
  font-size: clamp(2.6rem, 5.5vw, 4.2rem);
  font-weight: 700;
  line-height: 1.08;
  margin-bottom: 0.6rem;
  letter-spacing: -0.02em;
}
.grad {
  background: linear-gradient(135deg, var(--purple), var(--magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-sub {
  font-size: 1.1rem;
  color: var(--muted);
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.85;
}
.hero-sub strong { color: var(--white); }

.hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }

.hero-stats {
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
.stat { display: flex; flex-direction: column; gap: 0.2rem; }
.stat-num {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--purple), var(--magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.stat-label { font-size: 0.75rem; color: var(--muted); }

/* photo */
.hero-photo-col {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--border);
  opacity: 0.5;
}
.ring1 { width: 110%; height: 110%; }
.ring2 { width: 125%; height: 125%; border-color: rgba(224,64,251,0.15); }

.hero-photo-frame {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 0 70px var(--glow), 0 0 140px rgba(224,64,251,0.08);
  width: 100%;
}
.hero-photo-frame img { width: 100%; display: block; }
.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg) 0%, transparent 45%);
}

.hero-badge {
  position: absolute;
  bottom: 1.5rem; left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: rgba(4,4,15,0.82);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
}
.badge-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #22C55E;
  box-shadow: 0 0 8px #22C55E;
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,100% { box-shadow: 0 0 6px #22C55E; }
  50%      { box-shadow: 0 0 14px #22C55E; }
}
.badge-name { font-weight: 700; font-size: 0.88rem; }
.badge-loc  { font-family: 'Space Mono', monospace; font-size: 0.68rem; color: var(--muted); }

/* scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}
.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--purple), transparent);
  animation: scroll-drop 1.8s ease-in-out infinite;
}
@keyframes scroll-drop {
  0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
  50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-photo-col { order: -1; max-width: 320px; margin: 0 auto; }
  .scroll-hint { display: none; }
}
</style>
