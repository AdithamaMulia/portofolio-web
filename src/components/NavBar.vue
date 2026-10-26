<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme.js'
import { useLang } from '../composables/useLang.js'

const { theme, toggleTheme } = useTheme()
const { locale, toggleLang, t } = useLang()
const router = useRouter()

const open = ref(false)
const active = ref('')
const links = ['about', 'experience', 'publications', 'projects', 'skills', 'education', 'contact']

function go(id) {
  open.value = false
  const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  if (router.currentRoute.value.path !== '/') router.push('/').then(() => nextTick(scroll))
  else scroll()
}

let io = null
function observeSections() {
  io?.disconnect()
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = e.target.id
    },
    { rootMargin: '-35% 0px -55% 0px' }
  )
  links.forEach((id) => {
    const el = document.getElementById(id)
    if (el) io.observe(el)
  })
}

onMounted(() => nextTick(observeSections))
watch(() => router.currentRoute.value.path, () => nextTick(observeSections))
onUnmounted(() => io?.disconnect())
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a class="brand mono" href="#" @click.prevent="go('home')">
        <span class="brand-mark">AM</span>
        <span class="brand-name">{{ t('nav.name') }}</span>
      </a>

      <nav class="links" :class="{ open }" aria-label="Main">
        <a
          v-for="id in links"
          :key="id"
          href="#"
          class="mono"
          :class="{ active: active === id }"
          @click.prevent="go(id)"
        >{{ t(`nav.${id}`) }}</a>
      </nav>

      <div class="controls">
        <button class="toggle mono" :title="t('nav.switchLang')" @click="toggleLang">
          {{ locale === 'en' ? 'ID' : 'EN' }}
        </button>
        <button class="toggle" :title="t('nav.switchTheme')" @click="toggleTheme" aria-label="Toggle theme">
          <span v-if="theme === 'dark'">☀</span><span v-else>☾</span>
        </button>
        <button class="toggle burger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
          <span v-if="!open">≡</span><span v-else>✕</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 1px solid var(--border-strong);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 64px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-size: 13px;
}
.brand:hover {
  text-decoration: none;
}
.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-weight: 500;
}
.links {
  display: flex;
  gap: 4px;
}
.links a {
  color: var(--text-muted);
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 6px 10px;
  text-decoration: none;
}
.links a:hover {
  color: var(--text);
  text-decoration: none;
}
.links a.active {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}
.controls {
  display: flex;
  gap: 6px;
}
.toggle {
  background: transparent;
  border: 1px solid var(--border-strong);
  color: var(--text);
  border-radius: 0;
  width: 34px;
  height: 34px;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.burger {
  display: none;
}

@media (max-width: 900px) {
  .brand-name {
    display: none;
  }
  .burger {
    display: block;
  }
  .links {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 12px 24px 20px;
    display: none;
  }
  .links.open {
    display: flex;
  }
  .links a {
    font-size: 14px;
    padding: 10px 4px;
  }
}
</style>
