<template>
  <section id="about" ref="sectionEl">
    <div class="container about-grid">
      <div class="photo-col" ref="photoEl">
        <div class="photo-stack">
          <picture class="p1">
            <source :srcset="about1Webp" type="image/webp" />
            <img :src="about1Jpg" alt="Fanuel" loading="lazy" />
          </picture>
          <picture class="p2">
            <source :srcset="about2Webp" type="image/webp" />
            <img :src="about2Jpg" alt="Fanuel" loading="lazy" />
          </picture>
          <div class="photo-badge">
            <span>{{ t('about.badge') }}</span>
            <img src="https://flagcdn.com/w20/tg.png" width="16" height="11" alt="🇹🇬" class="flag" />
          </div>
        </div>
      </div>

      <div class="about-text" ref="textEl">
        <div class="section-tag">{{ t('about.tag') }}</div>
        <h2 class="section-title left-title">
          {{ t('about.title') }}<br /><span class="grad">{{ t('about.title2') }}</span>
        </h2>
        <p>
          <template v-if="locale === 'fr'">
            Je suis <strong>Fanuel Israël TOVEY K.</strong>, développeur frontend freelance basé à Lomé. Je construis des applications web et mobiles performantes avec Angular, Vue.js et Flutter — des plateformes qui gèrent des milliards de transactions et digitalisent des infrastructures critiques.
          </template>
          <template v-else>
            I am <strong>Fanuel Israël TOVEY K.</strong>, a freelance frontend developer based in Lomé. I build high-performance web and mobile applications with Angular, Vue.js, and Flutter — platforms that handle billions in transactions and digitize critical infrastructure.
          </template>
        </p>
        <p>
          <template v-if="locale === 'fr'">
            Mais ma vie dépasse l'écran. Je suis conseiller pour les petites entreprises, passionné d'architecture et d'art, auteur du livre <em>40 Messages de Vie</em>, et membre de la famille <strong>TNR (The New Road)</strong>.
          </template>
          <template v-else>
            But my life goes beyond screens. I am a business consultant for small companies, passionate about architecture and art, author of <em>40 Messages of Life</em>, and part of the <strong>TNR (The New Road)</strong> family.
          </template>
        </p>
        <p>
          <template v-if="locale === 'fr'">
            Par-dessus tout, je marche comme un <strong>enfant du Dieu tout-puissant</strong> qui s'est révélé pleinement en Jésus-Christ — une identité qui éclaire tout ce que je fais.
          </template>
          <template v-else>
            Above all, I walk as a <strong>child of Almighty God</strong> who fully revealed himself in Jesus-Christ — an identity that illuminates everything I do.
          </template>
        </p>

        <div class="pillars" ref="pillarsEl">
          <div class="pillar" v-for="key in ['dev','conseil','foi','auteur']" :key="key">
            <div class="pillar-icon"><AppIcon :name="pillarsIcons[key]" :size="22" /></div>
            <div class="pillar-label">{{ t(`about.pillars.${key}.label`) }}</div>
            <div class="pillar-sub">{{ t(`about.pillars.${key}.sub`) }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import about1Jpg  from '../assets/images/IMG_4504.JPG'
import about1Webp from '../assets/images/IMG_4504.webp'
import about2Jpg  from '../assets/images/IMG_4506.JPG'
import about2Webp from '../assets/images/IMG_4506.webp'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import AppIcon from './AppIcon.vue'

const { t, locale } = useI18n()
const sectionEl = ref(null)
const photoEl   = ref(null)
const textEl    = ref(null)
const pillarsEl = ref(null)

const pillarsIcons = { dev: 'terminal', conseil: 'trending-up', foi: 'cross', auteur: 'pen' }

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

  const p1 = sectionEl.value.querySelector('.p1')
  const p2 = sectionEl.value.querySelector('.p2')
  ;[p1, p2].forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect()
      const rx = ((e.clientY - r.top ) / r.height - 0.5) * 10
      const ry = ((e.clientX - r.left) / r.width  - 0.5) * -10
      gsap.to(el, { rotateX: rx, rotateY: ry, duration: 0.4, ease: 'power2.out' })
    })
    el.addEventListener('mouseleave', () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.5 }))
  })
})
</script>

<style scoped>
#about { padding: 7rem 0; }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }

.photo-stack { position: relative; height: 580px; perspective: 1000px; }
.photo-stack picture { position: absolute; display: block; }
.photo-stack img { width: 100%; height: 100%; border-radius: 20px; border: 1px solid var(--border); object-fit: cover; object-position: top center; cursor: pointer; display: block; }
.p1 { width: 72%; height: 78%; top: 0; left: 0; box-shadow: 0 0 50px var(--glow); z-index: 2; }
.p2 { width: 56%; height: 62%; bottom: 0; right: 0; box-shadow: 0 0 35px var(--glow2); z-index: 1; }
.photo-badge {
  position: absolute; bottom: 0.75rem; left: 1rem; z-index: 3;
  background: var(--bg); backdrop-filter: blur(12px);
  border: 1px solid var(--border); border-radius: 10px;
  padding: 0.45rem 1rem; font-size: 0.75rem;
  font-family: 'Space Mono', monospace; white-space: nowrap;
  display: flex; align-items: center; gap: 0.5rem;
}
.flag { width: 16px; height: 11px; border-radius: 2px; display: inline-block; flex-shrink: 0; vertical-align: middle; object-fit: cover; image-rendering: crisp-edges; }

.about-text { padding-top: 0.5rem; }
.left-title { text-align: left; margin-bottom: 1.5rem; }
.about-text p { color: var(--muted); margin-bottom: 1.1rem; line-height: 1.85; }
.about-text strong { color: var(--white); }

.pillars { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
.pillar {
  background: var(--card); border: 1px solid var(--border); border-radius: 14px;
  padding: 1.1rem 1.25rem;
  transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
}
.pillar:hover { border-color: var(--purple); background: var(--purple-lo); transform: translateY(-3px); box-shadow: 0 8px 28px var(--glow); }
.pillar-icon  { margin-bottom: 0.6rem; color: var(--purple); display: flex; }
.pillar-label { font-size: 0.88rem; font-weight: 600; }
.pillar-sub   { font-size: 0.75rem; color: var(--muted); margin-top: 0.1rem; }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .photo-stack { height: 300px; }
  .p1 { width: 68%; height: 80%; }
  .p2 { width: 52%; height: 64%; }
}
@media (max-width: 600px) {
  .photo-stack { height: 240px; }
  .pillars { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
  .pillar { padding: 0.9rem 1rem; }
}
@media (max-width: 400px) {
  .photo-stack { height: 200px; }
  .pillars { grid-template-columns: 1fr 1fr; }
}
</style>
