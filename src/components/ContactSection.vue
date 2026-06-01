<template>
  <section id="contact" ref="sectionEl">
    <div class="container">
      <div class="contact-box" ref="boxEl">
        <div class="contact-glow"></div>
        <div class="section-tag">// Travaillons ensemble</div>
        <h2 class="section-title">
          Prêt à <span class="grad">collaborer</span> ?
        </h2>
        <p>Que ce soit pour un projet web ou mobile, un conseil business, ou simplement
          pour échanger — je suis disponible. N'hésitez pas.</p>

        <div class="contact-links" ref="linksEl">
          <a v-for="c in contacts" :key="c.label" :href="c.href"
             :target="c.external ? '_blank' : undefined"
             :rel="c.external ? 'noopener' : undefined"
             class="contact-item"
             @mouseenter="onEnter($event.currentTarget)"
             @mouseleave="onLeave($event.currentTarget)">
            <span class="ci-icon">{{ c.icon }}</span>
            <span class="ci-label">{{ c.label }}</span>
          </a>
        </div>

        <a href="mailto:fanueldev2.0@gmail.com" class="btn btn-primary cta-btn">
          Envoyer un message →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const sectionEl = ref(null)
const boxEl     = ref(null)
const linksEl   = ref(null)

const contacts = [
  { icon: '✉️', label: 'fanueldev2.0@gmail.com', href: 'mailto:fanueldev2.0@gmail.com' },
  { icon: '📞', label: '+228 92 58 03 05',        href: 'tel:+22892580305' },
  { icon: '🎵', label: '@fanuelisraeltovey',       href: 'https://www.tiktok.com/@fanuelisraeltovey?lang=fr', external: true },
  { icon: '▶️', label: 'T4J Channel',              href: 'https://www.youtube.com/@T4JChannel', external: true },
]

const onEnter = (el) => gsap.to(el, { y: -3, scale: 1.02, duration: 0.3, ease: 'power2.out' })
const onLeave = (el) => gsap.to(el, { y: 0,  scale: 1,    duration: 0.3, ease: 'power2.out' })

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(boxEl.value.children, { y: 40, opacity: 0, stagger: 0.1, duration: 0.7 })
      .from(linksEl.value.children, { y: 20, opacity: 0, scale: 0.95, stagger: 0.08, duration: 0.5 }, '-=0.2')
    obs.disconnect()
  }, { threshold: 0.15 })
  obs.observe(sectionEl.value)
})
</script>

<style scoped>
#contact { padding: 7rem 0 5rem; }

.contact-box {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  padding: 1rem;
}
.contact-glow {
  position: absolute;
  top: -100px; left: 50%;
  transform: translateX(-50%);
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139,61,255,0.1) 0%, transparent 65%);
  pointer-events: none;
  animation: contact-pulse 4s ease-in-out infinite;
}
@keyframes contact-pulse {
  0%,100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
  50%      { transform: translateX(-50%) scale(1.12); opacity: 1; }
}

.contact-box .section-tag { display: block; margin-bottom: 0.75rem; }
.contact-box .section-title { margin-bottom: 1rem; }
.contact-box p { color: var(--muted); margin-bottom: 2.5rem; line-height: 1.8; }

.contact-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  color: var(--white);
  font-size: 0.85rem;
  transition: border-color 0.25s, background 0.25s;
}
.contact-item:hover {
  border-color: var(--purple);
  background: var(--purple-lo);
}
.ci-icon  { font-size: 1.1rem; }
.ci-label { font-size: 0.82rem; }

.cta-btn { font-size: 1rem; padding: 1rem 2.5rem; }
</style>
