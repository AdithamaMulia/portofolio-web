import { ref, watch } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')
document.documentElement.dataset.theme = theme.value

watch(theme, (v) => {
  document.documentElement.dataset.theme = v
  localStorage.setItem('theme', v)
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
}
