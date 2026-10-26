<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="education" class="section alt">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="kicker">06</p>
        <h2>{{ t('education.title') }}</h2>
      </div>
      <div class="edu-grid">
        <div v-reveal>
          <article v-for="(e, i) in t('education.items')" :key="i" class="card edu">
            <p class="mono period">{{ e.period }}</p>
            <h3>{{ e.degree }}</h3>
            <p class="org">{{ e.org }}</p>
            <p v-if="e.note" class="note mono">{{ e.note }}</p>
          </article>
          <h3 class="subhead mono">{{ t('education.certificatesTitle') }}</h3>
          <ul class="certs">
            <li v-for="(c, i) in t('education.certificates')" :key="i" v-reveal>
              <span>{{ c.name }}</span>
              <span class="mono cert-meta">{{ c.issuer }} · {{ c.date }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu {
  margin-bottom: 18px;
}
.period {
  font-size: 12px;
  color: var(--accent);
  margin-bottom: 8px;
}
.edu h3 {
  font-size: 20px;
  margin-bottom: 4px;
}
.org {
  color: var(--text-muted);
  font-size: 15.5px;
}
.note {
  margin-top: 10px;
  font-size: 12px;
  color: var(--text-muted);
}
.subhead {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}
.certs {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.certs li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 9px 2px;
  border-bottom: 1px solid var(--border);
  font-size: 16px;
}
.cert-meta {
  font-size: 12px;
  color: var(--text-muted);
  flex-shrink: 0;
}
</style>
