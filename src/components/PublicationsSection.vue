<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="publications" class="section">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="kicker">03</p>
        <h2>{{ t('publications.title') }}</h2>
        <p class="lede">{{ t('publications.lede') }}</p>
      </div>
      <ol class="bib">
        <li v-for="(p, i) in t('publications.items')" :key="i" class="bib-entry" v-reveal>
          <span class="bib-num mono">[{{ i + 1 }}]</span>
          <div class="bib-body">
            <p class="bib-title">{{ p.title }}</p>
            <p class="bib-meta">
              <em>{{ p.journal }}</em>, {{ p.year }}
              <span class="bib-sep" aria-hidden="true">·</span>
              <span class="bib-pos">{{ p.position }}</span>
              <span class="bib-sep" aria-hidden="true">·</span>
              <a :href="p.link" target="_blank" rel="noopener" class="mono bib-link">{{ t('publications.read') }} →</a>
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.bib {
  list-style: none;
  display: flex;
  flex-direction: column;
}
.bib-entry {
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}
.bib-entry:first-child {
  border-top: 1px solid var(--border);
}
.bib-num {
  color: var(--accent);
  font-size: 13px;
  padding-top: 4px;
  flex-shrink: 0;
}
.bib-title {
  font-size: 19px;
  font-weight: 500;
  line-height: 1.35;
  margin-bottom: 6px;
}
.bib-meta {
  font-size: 15px;
  color: var(--text-muted);
}
.bib-pos {
  font-variant: small-caps;
  letter-spacing: 0.04em;
  font-size: 16px;
}
.bib-sep {
  margin: 0 6px;
  color: var(--border-strong);
}
.bib-link {
  font-size: 12px;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .bib-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }
}
</style>
