<template>
  <section id="hero" ref="heroEl">
    <div class="hero-glow g1"></div>
    <div class="hero-glow g2"></div>

    <div class="container hero-inner">
      <div class="hero-content" ref="heroContent">
        <div class="hero-tag" ref="heroTag">{{ t('hero.tag') }}</div>
        <h1 class="hero-name" ref="heroName">
          {{ t('hero.name1') }}<br />
          <span class="grad">{{ t('hero.name2') }}</span>
        </h1>
        <p class="hero-sub" ref="heroSub">
          <strong>{{ t('hero.sub_dev') }}</strong>
          {{ ' ' }}{{ t('hero.sub', { dev: '' }).replace(t('hero.sub_dev'), '').trim() }}
        </p>
        <p class="hero-sub2" ref="heroSub2">
          {{ t('hero.sub2', { tech: '', people: '', god: '' }).split('{}')[0] }}
          <strong>{{ t('hero.sub2_tech') }}</strong>{{ ', ' }}
          <strong>{{ t('hero.sub2_people') }}</strong>{{ ' ' + (locale === 'fr' ? 'et de' : 'and') + ' ' }}
          <strong>{{ t('hero.sub2_god') }}</strong>.
        </p>
        <div class="hero-ctas" ref="heroCtas">
          <a href="#contact" class="btn btn-primary">{{ t('hero.cta_primary') }}</a>
          <a href="#dev" class="btn btn-outline">{{ t('hero.cta_secondary') }}</a>
        </div>

        <div class="hero-stats" ref="heroStats">
          <div class="stat">
            <span class="stat-num">{{ t('hero.stat1_num') }}</span>
            <span class="stat-label">{{ t('hero.stat1_label') }}</span>
          </div>
          <div class="stat">
            <span class="stat-num">{{ t('hero.stat2_num') }}</span>
            <span class="stat-label">{{ t('hero.stat2_label') }}</span>
          </div>
          <div class="stat">
            <span class="stat-num">{{ t('hero.stat3_num') }}</span>
            <span class="stat-label">{{ t('hero.stat3_label') }}</span>
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
            <div class="badge-loc"><AppIcon name="map-pin" :size="11" :stroke="2" style="display:inline;vertical-align:middle;margin-right:3px" />{{ t('hero.badge_loc') }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-hint" ref="scrollHint">
      <span>{{ t('hero.scroll') }}</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import AppIcon from './AppIcon.vue'

const { t, locale } = useI18n()

const heroTag    = ref(null)
const heroName   = ref(null)
const heroSub    = ref(null)
const heroSub2   = ref(null)
const heroCtas   = ref(null)
const heroStats  = ref(null)
const photoCol   = ref(null)
const scrollHint = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.from(heroTag.value,   { y: 30, opacity: 0, duration: 0.7, delay: 0.6 })
    .from(heroName.value,  { y: 50, opacity: 0, duration: 0.8 }, '-=0.4')
    .from(heroSub.value,   { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
    .from(heroSub2.value,  { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
    .from(heroCtas.value,  { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from(heroStats.value, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from(photoCol.value,  { x: 60, opacity: 0, duration: 1.0 }, 0.8)
    .from(scrollHint.value,{ opacity: 0, duration: 0.6 }, '-=0.2')

  gsap.to(photoCol.value, { y: -14, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1 })
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
.hero-glow { position: absolute; border-radius: 50%; pointer-events: none; }
.g1 { width: 640px; height: 640px; background: radial-gradient(circle, rgba(139,61,255,0.18) 0%, transparent 70%); top: -160px; right: -80px; }
.g2 { width: 480px; height: 480px; background: radial-gradient(circle, rgba(224,64,251,0.12) 0%, transparent 70%); bottom: -60px; left: -100px; }

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
  background: var(--purple-lo);
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

.hero-sub, .hero-sub2 {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 500px;
  line-height: 1.85;
  margin-bottom: 0.5rem;
}
.hero-sub strong, .hero-sub2 strong { color: var(--white); }
.hero-sub { margin-bottom: 0.25rem; }
.hero-sub2 { margin-bottom: 2rem; }

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

.hero-photo-col { position: relative; display: flex; justify-content: center; align-items: center; }
.photo-ring { position: absolute; border-radius: 50%; border: 1px solid var(--border); opacity: 0.5; }
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
.photo-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--bg) 0%, transparent 50%); }

.hero-badge {
  position: absolute;
  bottom: 1.5rem; left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: var(--bg);
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

.scroll-hint {
  position: absolute;
  bottom: 2rem; left: 50%;
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
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, var(--purple), transparent);
  animation: scroll-drop 1.8s ease-in-out infinite;
}
@keyframes scroll-drop {
  0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
  50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}

@media (max-width: 900px) {
  #hero { padding: 7rem 0 3.5rem; }
  .hero-inner { grid-template-columns: 1fr; gap: 2rem; }
  .hero-photo-col { order: -1; max-width: 380px; margin: 0 auto; width: 100%; }
  .scroll-hint { display: none !important; }
}
@media (max-width: 600px) {
  #hero { padding: 7.5rem 0 3rem; }
  .hero-inner { gap: 1.75rem; }
  /* Photo prend 80% de la largeur sur mobile */
  .hero-photo-col { max-width: 72vw; }
  .hero-ctas { flex-direction: column; gap: 0.75rem; }
  .hero-ctas .btn { text-align: center; justify-content: center; }
  .hero-stats { gap: 1.5rem; padding-top: 1.5rem; }
  .stat-num { font-size: 1.3rem; }
  .hero-sub, .hero-sub2 { font-size: 0.95rem; }
  .hero-sub2 { margin-bottom: 1.5rem; }
}
@media (max-width: 400px) {
  #hero { padding: 8rem 0 2.5rem; }
  .hero-photo-col { max-width: 78vw; }
  .hero-stats { gap: 1.25rem; }
  .stat-num { font-size: 1.2rem; }
}
</style>
