<template>
  <footer ref="footerEl">
    <div class="footer-inner">
      <span class="footer-logo">FI•TOVEY</span>
      <p>{{ locale === 'fr' ? 'Conçu & développé par' : 'Designed & developed by' }}
        <strong>Fanuel Israël TOVEY K.</strong> — Lomé, Togo © 2025</p>
      <div class="footer-links">
        <a href="https://www.tiktok.com/@fanuelisraeltovey?lang=fr" target="_blank" rel="noopener">TikTok</a>
        <a href="https://www.youtube.com/@T4JChannel" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:fanueldev2.0@gmail.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'

const { locale } = useI18n()
const footerEl = ref(null)
onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    gsap.from(footerEl.value, { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' })
    obs.disconnect()
  }, { threshold: 0.5 })
  obs.observe(footerEl.value)
})
</script>

<style scoped>
footer { position: relative; z-index: 1; border-top: 1px solid var(--border); padding: 2.5rem 2rem; }
.footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; max-width: 1120px; margin: 0 auto; }
.footer-logo { font-family: 'Space Mono', monospace; font-size: 0.9rem; font-weight: 700; background: linear-gradient(135deg, var(--purple), var(--magenta)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
footer p { font-size: 0.75rem; color: var(--muted); font-family: 'Space Mono', monospace; }
footer strong { color: var(--white); }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a { font-size: 0.75rem; color: var(--muted); text-decoration: none; font-family: 'Space Mono', monospace; transition: color 0.2s; }
.footer-links a:hover { color: var(--purple); }
@media (max-width: 600px) { .footer-inner { flex-direction: column; text-align: center; } }
</style>
