<template>
  <nav :class="['navbar', { scrolled }]" ref="navEl">
    <a class="nav-logo" href="#hero">FI•TOVEY</a>

    <ul class="nav-links">
      <li v-for="link in links" :key="link.key">
        <a :href="link.href" :class="{ active: activeSection === link.id }">
          {{ t(`nav.${link.key}`) }}
        </a>
      </li>
    </ul>

    <div class="nav-right">
      <!-- Theme toggle -->
      <button class="theme-toggle" @click="toggleTheme" :title="theme === 'dark' ? 'Mode clair' : 'Mode sombre'">
        <Transition name="icon-switch" mode="out-in">
          <!-- Sun icon (shown in dark mode → switch to light) -->
          <svg v-if="theme === 'dark'" key="sun" class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4.5"/>
            <line x1="12" y1="2"   x2="12" y2="5"/>
            <line x1="12" y1="19"  x2="12" y2="22"/>
            <line x1="4.22" y1="4.22"  x2="6.34" y2="6.34"/>
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
            <line x1="2"  y1="12" x2="5"  y2="12"/>
            <line x1="19" y1="12" x2="22" y2="12"/>
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
            <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon icon (shown in light mode → switch to dark) -->
          <svg v-else key="moon" class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </Transition>
      </button>

      <!-- Lang toggle -->
      <button class="lang-toggle" @click="toggleLang" :title="locale === 'fr' ? 'Switch to English' : 'Passer en français'">
        <span :class="{ active: locale === 'fr' }">FR</span>
        <span class="lang-sep">/</span>
        <span :class="{ active: locale === 'en' }">EN</span>
      </button>

      <button class="burger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
        <span /><span /><span />
      </button>
    </div>

    <Transition name="mobile-menu">
      <div class="mobile-menu" v-if="menuOpen">
        <a v-for="link in links" :key="link.key" :href="link.href" @click="menuOpen = false">
          {{ t(`nav.${link.key}`) }}
        </a>
        <button class="theme-toggle mobile-theme" @click="toggleTheme" style="align-self:flex-start;width:auto;gap:0.5rem;padding:0.45rem 0.9rem">
          <svg v-if="theme === 'dark'" class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4.5"/>
            <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
            <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <span style="font-size:0.82rem;color:var(--muted)">{{ theme === 'dark' ? 'Mode clair' : 'Mode sombre' }}</span>
        </button>
      <button class="lang-toggle mobile-lang" @click="toggleLang">
          <span :class="{ active: locale === 'fr' }">FR</span>
          <span class="lang-sep">/</span>
          <span :class="{ active: locale === 'en' }">EN</span>
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { useTheme } from '../composables/useTheme.js'

const { t, locale } = useI18n()
const { theme, toggle: toggleTheme } = useTheme()

const scrolled     = ref(false)
const activeSection= ref('hero')
const menuOpen     = ref(false)
const navEl        = ref(null)

const links = [
  { href: '#dev',       id: 'dev',       key: 'dev'     },
  { href: '#business',  id: 'business',  key: 'conseil' },
  { href: '#spiritual', id: 'spiritual', key: 'foi'     },
  { href: '#book',      id: 'book',      key: 'livre'   },
  { href: '#media',     id: 'media',     key: 'medias'  },
  { href: '#contact',   id: 'contact',   key: 'contact' },
]

const toggleLang = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const onScroll = () => {
  scrolled.value = window.scrollY > 40
  const sections = document.querySelectorAll('section[id]')
  let current = 'hero'
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) current = s.id })
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  gsap.from(navEl.value, { y: -60, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 2.5rem;
  transition: background 0.4s, padding 0.4s, box-shadow 0.4s;
}
.navbar.scrolled {
  background: rgba(var(--bg-rgb), 0.9);
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 var(--border);
  padding: 0.75rem 2.5rem;
}

.nav-logo {
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, var(--purple), var(--magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2.2rem;
  list-style: none;
}
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 0.25s;
  position: relative;
  padding-bottom: 2px;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: linear-gradient(90deg, var(--purple), var(--magenta));
  transition: width 0.3s ease;
}
.nav-links a:hover,
.nav-links a.active { color: var(--white); }
.nav-links a.active::after,
.nav-links a:hover::after { width: 100%; }

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

/* ─── Language toggle ─── */
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(139,61,255,0.08);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.35rem 0.75rem;
  cursor: pointer;
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  transition: border-color 0.25s, background 0.25s;
}
.lang-toggle:hover {
  border-color: var(--purple);
  background: rgba(139,61,255,0.14);
}
.lang-toggle span {
  color: var(--muted);
  transition: color 0.25s;
}
.lang-toggle span.active {
  color: var(--white);
}
.lang-sep { color: var(--border) !important; }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.burger span {
  display: block;
  width: 22px; height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all 0.3s;
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.mobile-menu {
  position: absolute;
  top: 100%; left: 0; right: 0;
  background: var(--bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2.5rem;
  gap: 1.25rem;
}
.mobile-menu a {
  color: var(--muted);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;
}
.mobile-menu a:hover { color: var(--white); }

.mobile-lang {
  margin-top: 0.5rem;
  align-self: flex-start;
}

/* ── theme toggle ── */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: 10px;
  background: var(--card);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s, transform 0.2s;
}
.theme-toggle:hover {
  border-color: var(--purple);
  background: var(--purple-lo);
  transform: scale(1.08);
}
.toggle-icon { width: 17px; height: 17px; display: block; color: var(--white); flex-shrink: 0; }

.icon-switch-enter-active,
.icon-switch-leave-active { transition: all 0.2s ease; }
.icon-switch-enter-from   { opacity: 0; transform: rotate(-30deg) scale(0.7); }
.icon-switch-leave-to     { opacity: 0; transform: rotate(30deg) scale(0.7); }

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.35s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-12px); }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .burger { display: flex; }
  .navbar { padding: 1rem 1.5rem; }
  .navbar.scrolled { padding: 0.75rem 1.5rem; }
  .lang-toggle:not(.mobile-lang) { display: none; }
}
</style>
