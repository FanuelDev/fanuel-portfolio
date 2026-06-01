<template>
  <section id="spiritual" ref="sectionEl">
    <div class="spirit-bg-glow"></div>
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="gold-tag">// Foi &amp; Ministère</div>
        <h2 class="section-title">
          Enfant du <span class="gold">Dieu Tout-Puissant</span>
        </h2>
        <p class="section-desc">
          Je ne me définis pas d'abord comme un "chrétien" — mais comme un fils du Dieu vivant
          qui s'est révélé pleinement en Jésus-Christ. Cette identité n'est pas une case,
          c'est mon fondement.
        </p>
      </div>

      <div class="spirit-grid" ref="gridEl">
        <div class="spirit-card" v-for="c in cards" :key="c.title"
             @mouseenter="onEnter($event.currentTarget)"
             @mouseleave="onLeave($event.currentTarget)">
          <div class="spirit-glow-inner"></div>
          <div class="spirit-icon">{{ c.icon }}</div>
          <h3>{{ c.title }}</h3>
          <p v-html="c.desc"></p>
          <a :href="c.url" target="_blank" rel="noopener" class="spirit-link">
            {{ c.cta }} ↗
          </a>
        </div>
      </div>

      <div class="spirit-verse" ref="verseEl">
        <div class="verse-line"></div>
        <blockquote>
          « Car je suis convaincu que ni la mort, ni la vie… ni aucune autre créature ne pourra nous
          séparer de l'amour de Dieu manifesté en Jésus-Christ notre Seigneur. »
        </blockquote>
        <cite>— Romains 8:38-39</cite>
        <div class="verse-line"></div>
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
const verseEl   = ref(null)

const cards = [
  {
    icon: '🕊️',
    title: 'Enseignant de la Parole',
    desc: 'Je partage des enseignements fondés sur la Parole de Dieu — des messages qui touchent la vie réelle, la marche quotidienne avec le Seigneur.',
    url: 'https://www.tiktok.com/@fanuelisraeltovey?lang=fr',
    cta: 'Écouter sur TikTok',
  },
  {
    icon: '🔥',
    title: 'Leader TNR',
    desc: 'Je dirige <strong>TNR</strong>, un groupe de jeunes chrétiens passionnés par leur marche avec Dieu — un espace de croissance, de communion et de feu.',
    url: 'https://www.tiktok.com/@tnrfamille?lang=fr',
    cta: 'Voir TNR Famille',
  },
  {
    icon: '📡',
    title: 'Connexion & Reconnexion',
    desc: 'Intervenant dans l\'émission <em>Connexion &amp; Reconnexion</em> sur <strong>T4J Channel</strong>, une chaîne qui met en lumière l\'œuvre de Dieu.',
    url: 'https://youtu.be/EdyBWXCmbdM?si=uZzNH_t_mRLeZptz',
    cta: 'Voir l\'émission',
  },
]

const onEnter = (card) => {
  const glow = card.querySelector('.spirit-glow-inner')
  gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out' })
  gsap.to(glow, { opacity: 1, duration: 0.4 })
}
const onLeave = (card) => {
  const glow = card.querySelector('.spirit-glow-inner')
  gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
  gsap.to(glow, { opacity: 0, duration: 0.4 })
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
#spiritual {
  padding: 7rem 0;
  background: var(--bg2);
  position: relative;
  overflow: hidden;
}
.spirit-bg-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 700px; height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,168,83,0.05) 0%, transparent 65%);
  pointer-events: none;
  animation: spirit-pulse 5s ease-in-out infinite;
}
@keyframes spirit-pulse {
  0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
  50%      { transform: translate(-50%,-50%) scale(1.1); opacity: 1; }
}

.spirit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.spirit-card {
  position: relative;
  background: var(--card);
  border: 1px solid rgba(212,168,83,0.18);
  border-radius: 22px;
  padding: 2.2rem 1.75rem;
  text-align: center;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.spirit-card:hover {
  border-color: var(--gold);
  box-shadow: 0 8px 40px rgba(212,168,83,0.15);
}
.spirit-glow-inner {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(212,168,83,0.1), transparent 70%);
  opacity: 0;
  pointer-events: none;
}

.spirit-icon   { font-size: 2.6rem; margin-bottom: 1rem; display: block; }
.spirit-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.6rem; }
.spirit-card p  { font-size: 0.82rem; color: var(--muted); line-height: 1.75; }
.spirit-link {
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--gold);
  text-decoration: none;
  transition: color 0.2s, letter-spacing 0.2s;
}
.spirit-link:hover { color: #F5C26B; letter-spacing: 0.03em; }

.spirit-verse {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 0 2rem;
}
.verse-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,168,83,0.35));
}
.spirit-verse .verse-line:last-child {
  background: linear-gradient(90deg, rgba(212,168,83,0.35), transparent);
}
blockquote {
  font-style: italic;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.8;
  max-width: 600px;
}
cite {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--gold);
  font-style: normal;
  font-family: 'Space Mono', monospace;
}

@media (max-width: 900px) {
  .spirit-grid { grid-template-columns: 1fr; }
  .spirit-verse { grid-template-columns: 1fr; gap: 1rem; }
  .verse-line { display: none; }
}
</style>
