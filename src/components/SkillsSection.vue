<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="kicker">05</p>
        <h2>{{ t('skills.title') }}</h2>
      </div>
      <div class="cells">
        <div v-for="g in t('skills.groups')" :key="g.name" class="cell" v-reveal>
          <h3>{{ g.name }}</h3>
          <ul>
            <li v-for="s in g.items" :key="s">{{ s }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cells {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--border-strong);
  border-left: 1px solid var(--border-strong);
}
.cell {
  border-right: 1px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  background: var(--surface);
  padding: 18px 20px;
}
.cell h3 {
  font-variant: small-caps;
  font-size: 16px;
  letter-spacing: 0.08em;
  color: var(--accent);
  font-weight: 600;
  padding-bottom: 8px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--border);
}
.cell ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cell li {
  font-size: 16px;
  color: var(--text);
}

@media (max-width: 860px) {
  .cells {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .cells {
    grid-template-columns: 1fr;
  }
}
</style>
