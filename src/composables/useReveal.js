import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export function useReveal(options = {}) {
  const el = ref(null)

  onMounted(() => {
    if (!el.value) return
    const targets = options.stagger
      ? el.value.querySelectorAll(options.stagger)
      : [el.value]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              targets,
              { y: options.y ?? 40, opacity: 0, scale: options.scale ?? 1 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: options.duration ?? 0.8,
                stagger: options.staggerDelay ?? 0.12,
                ease: options.ease ?? 'power3.out',
                delay: options.delay ?? 0,
                clearProps: 'all',
              }
            )
            observer.disconnect()
          }
        })
      },
      { threshold: options.threshold ?? 0.15 }
    )
    observer.observe(el.value)

    onUnmounted(() => observer.disconnect())
  })

  return el
}
