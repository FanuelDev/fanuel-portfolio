<template>
  <div class="app-root">
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
    <NavBar />
    <main>
      <HeroSection />
      <div class="divider" />
      <AboutSection />
      <div class="divider" />
      <DevSection />
      <div class="divider" />
      <BusinessSection />
      <div class="divider" />
      <SpiritualSection />
      <div class="divider" />
      <BookSection />
      <div class="divider" />
      <MediaSection />
      <div class="divider" />
      <PassionSection />
      <div class="divider" />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import DevSection from './components/DevSection.vue'
import BusinessSection from './components/BusinessSection.vue'
import SpiritualSection from './components/SpiritualSection.vue'
import BookSection from './components/BookSection.vue'
import MediaSection from './components/MediaSection.vue'
import PassionSection from './components/PassionSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const particleCanvas = ref(null)
let animFrame = null

onMounted(() => {
  const canvas = particleCanvas.value
  const ctx = canvas.getContext('2d')
  let W = canvas.width = window.innerWidth
  let H = canvas.height = window.innerHeight

  const resize = () => {
    W = canvas.width = window.innerWidth
    H = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    a: Math.random(),
    da: (Math.random() - 0.5) * 0.003,
    color: Math.random() > 0.5 ? '139,61,255' : '224,64,251',
  }))

  const draw = () => {
    ctx.clearRect(0, 0, W, H)
    for (const p of particles) {
      p.x += p.dx; p.y += p.dy; p.a += p.da
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      if (p.a < 0 || p.a > 1) p.da *= -1
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${p.color},${p.a * 0.6})`
      ctx.fill()
    }
    animFrame = requestAnimationFrame(draw)
  }
  draw()

  onUnmounted(() => {
    cancelAnimationFrame(animFrame)
    window.removeEventListener('resize', resize)
  })
})
</script>

<style>
.app-root { position: relative; }

.particle-canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* grid overlay */
.app-root::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(139,61,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139,61,255,0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
  z-index: 0;
}

main { position: relative; z-index: 1; }
</style>
