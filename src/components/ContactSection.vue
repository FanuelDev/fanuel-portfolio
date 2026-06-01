<template>
  <section id="contact" ref="sectionEl">
    <div class="container">
      <div class="contact-box" ref="boxEl">
        <div class="contact-glow"></div>
        <div class="section-tag">{{ t('contact.tag') }}</div>
        <h2 class="section-title">
          {{ t('contact.title') }} <span class="grad">{{ t('contact.title2') }}</span>{{ t('contact.title3') }}
        </h2>
        <p>{{ t('contact.desc') }}</p>
        <div class="contact-links" ref="linksEl">
          <a v-for="c in contacts" :key="c.label" :href="c.href"
             :target="c.external ? '_blank' : undefined"
             :rel="c.external ? 'noopener' : undefined"
             class="contact-item"
             :class="`ci-${c.icon}`"
             @mouseenter="onEnter($event.currentTarget)"
             @mouseleave="onLeave($event.currentTarget)">
            <!-- SVG icons -->
            <span class="ci-icon">
              <!-- Email -->
              <svg v-if="c.icon === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <!-- Phone -->
              <svg v-else-if="c.icon === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <!-- WhatsApp -->
              <svg v-else-if="c.icon === 'whatsapp'" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              <!-- TikTok -->
              <svg v-else-if="c.icon === 'tiktok'" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
              <!-- YouTube -->
              <svg v-else-if="c.icon === 'youtube'" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </span>
            <span class="ci-label">{{ c.label }}</span>
          </a>
        </div>
        <a href="mailto:fanueldev2.0@gmail.com" class="btn btn-primary cta-btn">{{ t('contact.cta') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'

const { t } = useI18n()
const sectionEl = ref(null); const boxEl = ref(null); const linksEl = ref(null)

const contacts = [
  { icon: 'email',    label: 'fanueldev2.0@gmail.com', href: 'mailto:fanueldev2.0@gmail.com' },
  { icon: 'phone',    label: '+228 92 58 03 05',        href: 'tel:+22892580305' },
  { icon: 'whatsapp', label: 'WhatsApp',                href: 'https://wa.me/22892580305', external: true },
  { icon: 'tiktok',   label: '@fanuelisraeltovey',      href: 'https://www.tiktok.com/@fanuelisraeltovey?lang=fr', external: true },
  { icon: 'youtube',  label: 'T4J Channel',             href: 'https://www.youtube.com/@T4JChannel', external: true },
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
.contact-box { position: relative; max-width: 740px; margin: 0 auto; text-align: center; overflow: hidden; padding: 1rem; }
.contact-glow { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(139,61,255,0.1) 0%, transparent 65%); pointer-events: none; animation: contact-pulse 4s ease-in-out infinite; }
@keyframes contact-pulse { 0%,100% { transform: translateX(-50%) scale(1); opacity: 0.8; } 50% { transform: translateX(-50%) scale(1.12); opacity: 1; } }
.contact-box .section-tag { display: block; margin-bottom: 0.75rem; }
.contact-box .section-title { margin-bottom: 1rem; }
.contact-box p { color: var(--muted); margin-bottom: 2.5rem; line-height: 1.8; }
.contact-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 2.5rem; }

.contact-item {
  display: flex; align-items: center; gap: 0.6rem;
  background: var(--card); border: 1px solid var(--border);
  border-radius: 12px; padding: 0.75rem 1.25rem;
  text-decoration: none; color: var(--white);
  transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
}
.contact-item:hover { background: var(--card); box-shadow: 0 4px 20px var(--glow); }

/* Couleurs d'accent par réseau */
.ci-email:hover    { border-color: var(--purple); }
.ci-phone:hover    { border-color: #22C55E; box-shadow: 0 4px 20px rgba(34,197,94,0.2); }
.ci-whatsapp:hover { border-color: #25D366; box-shadow: 0 4px 20px rgba(37,211,102,0.25); }
.ci-tiktok:hover   { border-color: #ff0050; box-shadow: 0 4px 20px rgba(255,0,80,0.2); }
.ci-youtube:hover  { border-color: #FF0000; box-shadow: 0 4px 20px rgba(255,0,0,0.2); }

/* Couleur de l'icône SVG */
.ci-whatsapp .ci-icon { color: #25D366; }
.ci-tiktok   .ci-icon { color: var(--white); }
.ci-youtube  .ci-icon { color: #FF0000; }
.ci-email    .ci-icon { color: var(--purple); }
.ci-phone    .ci-icon { color: #22C55E; }

.ci-icon { display: flex; align-items: center; justify-content: center; }
.ci-icon svg { width: 18px; height: 18px; flex-shrink: 0; }
.ci-label { font-size: 0.82rem; }
.cta-btn { font-size: 1rem; padding: 1rem 2.5rem; }

@media (max-width: 600px) {
  .contact-links { gap: 0.75rem; }
  .contact-item { padding: 0.65rem 1rem; }
  .ci-label { font-size: 0.78rem; }
  .cta-btn { width: 100%; justify-content: center; }
}
@media (max-width: 400px) {
  .contact-item { width: 100%; }
  .contact-links { flex-direction: column; align-items: stretch; }
}
</style>
