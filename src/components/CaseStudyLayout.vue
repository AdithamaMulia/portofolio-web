<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang.js'
import PlaceholderImage from './PlaceholderImage.vue'

const { t } = useLang()
defineProps({
  data: { type: Object, required: true },
  image: { type: String, default: '' },
})
const imgFailed = ref(false) // falls back to placeholder until the real file exists
</script>

<template>
  <article class="case container">
    <RouterLink to="/" class="mono back">← {{ t('case.back') }}</RouterLink>

    <p class="kicker">{{ data.kicker }}</p>
    <h1>{{ data.title }}</h1>
    <p class="subtitle">{{ data.subtitle }}</p>

    <div class="meta">
      <div v-for="(m, i) in data.meta" :key="i" class="meta-item">
        <span class="mono meta-label">{{ m.label }}</span>
        <span class="meta-value">{{ m.value }}</span>
      </div>
    </div>

    <img
      v-if="image && !imgFailed"
      :src="image"
      :alt="data.imageLabel || ''"
      class="hero-image photo"
      @error="imgFailed = true"
    />
    <PlaceholderImage v-else :label="data.imageLabel || '[ diagram ]'" class="hero-image" />

    <p v-if="data.note" class="todo note">{{ data.note }}</p>

    <section v-for="(s, i) in data.sections" :key="i" class="case-section" v-reveal>
      <h2>{{ s.heading }}</h2>
      <p v-for="(p, j) in s.paragraphs || []" :key="j">{{ p }}</p>
      <ul v-if="s.bullets?.length">
        <li v-for="(b, j) in s.bullets" :key="j">{{ b }}</li>
      </ul>
      <div v-if="s.table" class="table-wrap">
        <table>
          <thead>
            <tr><th v-for="h in s.table.headers" :key="h" class="mono">{{ h }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="(row, j) in s.table.rows" :key="j">
              <td v-for="(cell, k) in row" :key="k">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-if="!s.paragraphs?.length && !s.bullets?.length && !s.table" class="todo">TODO</p>
    </section>

    <section v-if="data.links?.length" class="case-section">
      <h2>{{ t('case.links') }}</h2>
      <div class="link-list">
        <a v-for="l in data.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="mono">
          {{ l.label }} →
        </a>
      </div>
    </section>
  </article>
</template>

<style scoped>
.case {
  padding-top: 40px;
  padding-bottom: 64px;
  max-width: 820px;
}
.back {
  display: inline-block;
  font-size: 12px;
  margin-bottom: 28px;
  color: var(--text-muted);
}
.back:hover {
  color: var(--accent);
  text-decoration: none;
}
h1 {
  font-size: clamp(30px, 4.6vw, 44px);
  margin-bottom: 12px;
}
.subtitle {
  font-style: italic;
  color: var(--text-muted);
  font-size: 18px;
  max-width: 62ch;
  margin-bottom: 22px;
}
.meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 22px;
}
.meta-item {
  background: var(--surface);
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.meta-label {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}
.meta-value {
  font-size: 14px;
}
.hero-image {
  min-height: 220px;
  margin-bottom: 20px;
}
.photo {
  display: block;
  width: 100%;
  height: auto;
  min-height: 0;
  max-height: 440px;
  object-fit: cover;
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.note {
  margin-bottom: 24px;
}
.case-section {
  margin-top: 30px;
}
.case-section h2 {
  font-size: 24px;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border);
}
.case-section p {
  color: var(--text-muted);
  margin-bottom: 12px;
  max-width: 74ch;
}
.case-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}
.case-section li {
  position: relative;
  padding-left: 18px;
  color: var(--text-muted);
}
.case-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc((1lh - 5px) / 2);
  width: 5px;
  height: 5px;
  background: var(--accent);
}
.table-wrap {
  overflow-x: auto;
  margin-bottom: 12px;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  /* booktabs: heavy rules top/bottom, light under header, none inside */
  border-top: 2px solid var(--text);
  border-bottom: 2px solid var(--text);
}
th,
td {
  text-align: left;
  padding: 9px 14px;
}
th {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  background: none;
  border-bottom: 1px solid var(--text);
}
td {
  color: var(--text-muted);
}
.link-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
}
</style>
