<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="kicker">01</p>
        <h2>{{ t('about.title') }}</h2>
      </div>
      <p class="bio" v-reveal>{{ t('about.bio') }}</p>
      <div class="stats" v-reveal>
        <div v-for="s in t('about.stats')" :key="s.label" class="stat">
          <span class="mono stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bio {
  max-width: 72ch;
  color: var(--text-muted);
  font-size: 18.5px;
  margin-bottom: 28px;
}
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: 14px 22px;
}
.stat-value {
  font-size: 20px;
  color: var(--accent);
}
.stat-label {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
</style>
