import { ref } from 'vue'

function getAutoTheme() {
  const h = new Date().getHours()
  return (h >= 18 || h < 6) ? 'dark' : 'light'
}

// Si l'utilisateur a une préférence sauvegardée, on la respecte,
// sinon on suit l'heure automatiquement
const saved = localStorage.getItem('fi-theme')
const theme = ref(saved || getAutoTheme())

function applyTheme(val) {
  document.documentElement.setAttribute('data-theme', val)
  localStorage.setItem('fi-theme', val)
}

applyTheme(theme.value)

// Recheck auto-theme toutes les minutes (seulement si pas de préférence manuelle)
let autoInterval = null

function startAutoCheck() {
  if (autoInterval) return
  autoInterval = setInterval(() => {
    const manual = localStorage.getItem('fi-theme-manual')
    if (!manual) {
      const auto = getAutoTheme()
      if (auto !== theme.value) {
        theme.value = auto
        applyTheme(auto)
      }
    }
  }, 60_000)
}

startAutoCheck()

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
    // Marquer comme préférence manuelle jusqu'à minuit
    localStorage.setItem('fi-theme-manual', '1')
    // Réinitialiser le flag manuel à minuit
    const now = new Date()
    const msToMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now
    setTimeout(() => localStorage.removeItem('fi-theme-manual'), msToMidnight)
  }
  return { theme, toggle }
}
