<template>
  <section id="about" ref="sectionEl">
    <div class="container about-grid">
      <div class="photo-col" ref="photoEl">
        <div class="photo-stack">
          <img class="p1" src="/images/IMG_4504.JPG" alt="Fanuel" />
          <img class="p2" src="/images/IMG_4506.JPG" alt="Fanuel" />
          <div class="photo-badge">
            <span>Lomé, Togo 🇹🇬</span>
          </div>
        </div>
      </div>

      <div class="about-text" ref="textEl">
        <div class="section-tag">// À propos</div>
        <h2 class="section-title left-title">
          Plusieurs univers,<br /><span class="grad">une seule vision</span>
        </h2>
        <p>Je suis <strong>Fanuel Israël TOVEY K.</strong>, développeur frontend freelance basé à Lomé.
          Je construis des applications web et mobiles performantes avec Angular, Vue.js et Flutter —
          des plateformes qui gèrent des milliards de transactions et digitalisent des infrastructures critiques.
        </p>
        <p>Mais ma vie dépasse l'écran. Je suis conseiller pour les petites entreprises, passionné
          d'architecture et d'art, auteur du livre <em>40 Messages de Vie</em>,
          et leader du groupe de jeunes <strong>TNR</strong>.
        </p>
        <p>Par-dessus tout, je marche comme un <strong>enfant du Dieu tout-puissant</strong>
          qui s'est révélé pleinement en Jésus-Christ — une identité qui éclaire tout ce que je fais.
        </p>

        <div class="pillars" ref="pillarsEl">
          <div class="pillar" v-for="p in pillars" :key="p.label">
            <div class="pillar-icon">{{ p.icon }}</div>
            <div class="pillar-label">{{ p.label }}</div>
            <div class="pillar-sub">{{ p.sub }}</div>
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
const photoEl   = ref(null)
const textEl    = ref(null)
const pillarsEl = ref(null)

const pillars = [
  { icon: '⌨️', label: 'Développeur', sub: 'Web & Mobile Freelance' },
  { icon: '📈', label: 'Conseiller',  sub: 'Stratégie & Business'   },
  { icon: '✝️', label: 'Serviteur',   sub: 'Enseignant & Leader TNR' },
  { icon: '✍️', label: 'Auteur',      sub: '40 Messages de Vie'      },
]

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(photoEl.value,  { x: -60, opacity: 0, duration: 0.9 })
      .from(textEl.value.children, { y: 40, opacity: 0, stagger: 0.1, duration: 0.7 }, '-=0.5')
      .from(pillarsEl.value.children, { y: 30, opacity: 0, scale: 0.92, stagger: 0.1, duration: 0.55 }, '-=0.3')
    obs.disconnect()
  }, { threshold: 0.12 })
  obs.observe(sectionEl.value)

  // hover tilt on photos
  const p1 = sectionEl.value.querySelector('.p1')
  const p2 = sectionEl.value.querySelector('.p2')
  ;[p1, p2].forEach(img => {
    img.addEventListener('mousemove', e => {
      const r = img.getBoundingClientRect()
      const rx = ((e.clientY - r.top ) / r.height - 0.5) * 10
      const ry = ((e.clientX - r.left) / r.width  - 0.5) * -10
      gsap.to(img, { rotateX: rx, rotateY: ry, duration: 0.4, ease: 'power2.out' })
    })
    img.addEventListener('mouseleave', () => gsap.to(img, { rotateX: 0, rotateY: 0, duration: 0.5 }))
  })
})
</script>

<style scoped>
#about { padding: 7rem 0; }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.photo-stack {
  position: relative;
  height: 520px;
  perspective: 1000px;
}
.photo-stack img {
  position: absolute;
  border-radius: 20px;
  border: 1px solid var(--border);
  object-fit: cover;
  cursor: pointer;
}
.p1 {
  width: 74%; height: 72%;
  top: 0; left: 0;
  box-shadow: 0 0 50px var(--glow);
  z-index: 2;
}
.p2 {
  width: 58%; height: 60%;
  bottom: 0; right: 0;
  box-shadow: 0 0 35px var(--glow2);
  z-index: 1;
}
.photo-badge {
  position: absolute;
  top: 58%; left: 55%;
  z-index: 3;
  background: rgba(4,4,15,0.85);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.45rem 1rem;
  font-size: 0.75rem;
  font-family: 'Space Mono', monospace;
  white-space: nowrap;
}

.about-text { padding-top: 0.5rem; }
.left-title { text-align: left; margin-bottom: 1.5rem; }
.about-text p { color: var(--muted); margin-bottom: 1.1rem; line-height: 1.85; }
.about-text strong { color: var(--white); }

.pillars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}
.pillar {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.1rem 1.25rem;
  transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: default;
}
.pillar:hover {
  border-color: var(--purple);
  background: var(--purple-lo);
  transform: translateY(-3px);
  box-shadow: 0 8px 28px var(--glow);
}
.pillar-icon  { font-size: 1.4rem; margin-bottom: 0.4rem; }
.pillar-label { font-size: 0.88rem; font-weight: 600; }
.pillar-sub   { font-size: 0.75rem; color: var(--muted); margin-top: 0.1rem; }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
  .photo-stack { height: 320px; }
}
</style>
