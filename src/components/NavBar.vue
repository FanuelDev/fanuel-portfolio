<template>
  <nav :class="['navbar', { scrolled }]" ref="navEl">
    <a class="nav-logo" href="#hero">FI•TOVEY</a>
    <ul class="nav-links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" :class="{ active: activeSection === link.id }">{{ link.label }}</a>
      </li>
    </ul>
    <button class="burger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
      <span /><span /><span />
    </button>
    <Transition name="mobile-menu">
      <div class="mobile-menu" v-if="menuOpen">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const scrolled = ref(false)
const activeSection = ref('hero')
const menuOpen = ref(false)
const navEl = ref(null)

const links = [
  { href: '#dev',       id: 'dev',       label: 'Dev' },
  { href: '#business',  id: 'business',  label: 'Conseil' },
  { href: '#spiritual', id: 'spiritual', label: 'Foi' },
  { href: '#book',      id: 'book',      label: 'Livre' },
  { href: '#media',     id: 'media',     label: 'Médias' },
  { href: '#contact',   id: 'contact',   label: 'Contact' },
]

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
  background: rgba(4,4,15,0.82);
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(139,61,255,0.18);
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
  background: rgba(4,4,15,0.96);
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

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.35s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-12px); }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .burger { display: flex; }
  .navbar { padding: 1rem 1.5rem; }
  .navbar.scrolled { padding: 0.75rem 1.5rem; }
}
</style>
