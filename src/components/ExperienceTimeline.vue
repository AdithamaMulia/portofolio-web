<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="experience" class="section alt">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="kicker">02</p>
        <h2>{{ t('experience.title') }}</h2>
      </div>
      <div class="jobs">
        <article v-for="(job, i) in t('experience.jobs')" :key="i" class="job" v-reveal>
          <div class="job-row">
            <h3>{{ job.role }}</h3>
            <p class="mono job-period">{{ job.period }}</p>
          </div>
          <p class="job-org"><em>{{ job.org }}</em> - {{ job.location }}</p>
          <ul v-if="job.bullets?.length">
            <li v-for="(b, j) in job.bullets" :key="j">{{ b }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.alt {
  background: var(--bg-alt);
}
.jobs {
  border-top: 1px solid var(--border-strong);
}
.job {
  padding: 18px 0;
  border-bottom: 1px solid var(--border-strong);
}
.job-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 20px;
}
.job h3 {
  font-size: 22px;
  font-weight: 600;
}
.job-period {
  font-size: 12.5px;
  color: var(--accent);
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex-shrink: 0;
}
.job-org {
  color: var(--text-muted);
  font-size: 16px;
  margin: 4px 0 10px;
}
.job ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.job li {
  position: relative;
  padding-left: 18px;
  color: var(--text-muted);
  font-size: 16px;
  max-width: 80ch;
}
.job li::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc((1lh - 5px) / 2);
  width: 5px;
  height: 5px;
  background: var(--accent);
}

@media (max-width: 640px) {
  .job-row {
    flex-direction: column;
    gap: 2px;
  }
}
</style>
