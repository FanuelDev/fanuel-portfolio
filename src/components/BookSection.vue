<template>
  <section id="book" ref="sectionEl">
    <div class="container book-wrap">
      <div class="book-cover-wrap" ref="coverEl">
        <div class="book-cover">
          <div class="book-spine"></div>
          <div class="cover-top-bar"></div>
          <div class="cover-num">{{ t('book.num') }}</div>
          <div class="cover-title">{{ t('book.title').replace('\n', '\n') }}</div>
          <div class="cover-part">{{ t('book.part') }}</div>
          <div class="cover-divider"></div>
          <div class="cover-quote">{{ t('book.quote') }}</div>
          <div class="cover-author-line">{{ t('book.author') }}<strong>Fanuel Israël TOVEY K.</strong></div>
          <div class="cover-pattern">
            <div class="cp-circle c1"></div><div class="cp-circle c2"></div><div class="cp-circle c3"></div>
          </div>
        </div>
        <div class="book-shadow"></div>
      </div>

      <div class="book-text" ref="textEl">
        <div class="section-tag">{{ t('book.tag') }}</div>
        <h2 class="section-title left-title">
          <span class="grad">{{ t('book.h2') }}</span><br />{{ t('book.h2sub') }}
        </h2>
        <p>
          <template v-if="locale === 'fr'">
            J'ai écrit la première partie de <em>40 Messages de Vie</em>, un recueil de messages issus de ma marche avec Dieu. Ce n'est pas un livre de théologie académique — c'est une invitation à vivre la Parole de Dieu au quotidien, à découvrir qui nous sommes réellement en Christ.
          </template>
          <template v-else>
            I wrote the first part of <em>40 Messages of Life</em>, a collection of messages drawn from my walk with God. This is not an academic theology book — it's an invitation to live God's Word daily, to discover who we truly are in Christ.
          </template>
        </p>
        <p>{{ t('book.p2') }}</p>
        <p>{{ t('book.p3') }}</p>
        <div class="book-tags" ref="tagsEl">
          <span class="btag" v-for="tag in tm('book.tags')" :key="tag">{{ tag }}</span>
        </div>
        <a href="#contact" class="btn btn-outline" style="margin-top:2rem;display:inline-flex">{{ t('book.cta') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'

const { t, tm, locale } = useI18n()
const sectionEl = ref(null); const coverEl = ref(null)
const textEl = ref(null); const tagsEl = ref(null)

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(coverEl.value, { x: -80, opacity: 0, rotateY: -20, duration: 1.0 })
      .from(textEl.value.children, { y: 35, opacity: 0, stagger: 0.1, duration: 0.7 }, '-=0.5')
      .from(tagsEl.value.children, { y: 15, opacity: 0, stagger: 0.08, duration: 0.45 }, '-=0.3')
    obs.disconnect()
  }, { threshold: 0.12 })
  obs.observe(sectionEl.value)
  gsap.to(coverEl.value, { y: -10, rotateZ: 1, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1 })
})
</script>

<style scoped>
#book { padding: 7rem 0; }
.book-wrap { display: grid; grid-template-columns: 300px 1fr; gap: 5rem; align-items: center; }
.book-cover-wrap { perspective: 800px; display: flex; flex-direction: column; align-items: center; }
.book-cover {
  position: relative; width: 220px;
  background: linear-gradient(155deg, #16063a, #2a0a5e, #1c0650);
  border-radius: 4px 18px 18px 4px; padding: 2.5rem 2rem 2.5rem 2.4rem;
  border: 1px solid rgba(139,61,255,0.35);
  box-shadow: 0 0 60px rgba(139,61,255,0.35), 8px 8px 0 rgba(139,61,255,0.18), 0 30px 80px rgba(0,0,0,0.5);
  overflow: hidden; transform-style: preserve-3d;
}
.cover-top-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--purple), var(--magenta)); }
.book-spine { position: absolute; top: 0; left: 0; width: 12px; height: 100%; background: linear-gradient(180deg, #5b1fbf, #8b3dff); border-radius: 4px 0 0 4px; }
/* Fond du livre toujours sombre → textes toujours clairs, indépendants du thème */
.cover-num { font-family: 'Space Mono', monospace; font-size: 4rem; font-weight: 700; background: linear-gradient(135deg, #8B3DFF, #E040FB); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1; }
.cover-title { font-size: 1.1rem; font-weight: 700; margin-top: 0.5rem; line-height: 1.25; white-space: pre-line; color: #F0EFFF; }
.cover-part { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #9090B0; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.3rem; }
.cover-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(139,61,255,0.5), transparent); margin: 1rem 0; }
.cover-quote { font-size: 0.68rem; color: #9090B0; line-height: 1.6; }
.cover-author-line { font-size: 0.68rem; color: #9090B0; margin-top: 0.75rem; }
.cover-author-line strong { display: block; color: #F0EFFF; }
.cover-pattern { position: absolute; bottom: -20px; right: -20px; }
.cp-circle { position: absolute; border-radius: 50%; border: 1px solid rgba(139,61,255,0.2); }
.c1 { width: 80px;  height: 80px;  top: -40px; left: -40px; }
.c2 { width: 120px; height: 120px; top: -60px; left: -60px; }
.c3 { width: 160px; height: 160px; top: -80px; left: -80px; }
.book-shadow { width: 200px; height: 20px; background: radial-gradient(ellipse, rgba(139,61,255,0.3) 0%, transparent 70%); margin-top: 1rem; filter: blur(8px); }
.left-title { text-align: left; margin-bottom: 1.5rem; }
.book-text p { color: var(--muted); margin-bottom: 1rem; line-height: 1.85; }
.book-text em { color: var(--white); font-style: italic; }
.book-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
.btag { font-family: 'Space Mono', monospace; font-size: 0.68rem; padding: 0.3rem 0.8rem; border-radius: 100px; background: rgba(212,168,83,0.1); border: 1px solid rgba(212,168,83,0.25); color: var(--gold); }
@media (max-width: 900px) {
  .book-wrap { grid-template-columns: 1fr; gap: 3rem; }
  .book-cover-wrap { margin: 0 auto; }
}
@media (max-width: 480px) {
  .book-cover { width: 190px; padding: 2rem 1.75rem 2rem 2rem; }
  .cover-num { font-size: 3rem; }
}
</style>
