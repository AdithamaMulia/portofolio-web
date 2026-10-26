<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()

defineProps({
  project: { type: Object, required: true },
  num: { type: Number, required: true },
})
</script>

<template>
  <article class="toc-entry">
    <div class="entry-row">
      <span class="entry-num mono">{{ num }}.</span>
      <h3>{{ project.name }}</h3>
      <span class="leader" aria-hidden="true"></span>
      <RouterLink v-if="project.case" :to="`/projects/${project.case}`" class="mono entry-link">
        {{ t('projects.readCase') }} →
      </RouterLink>
      <a v-else-if="project.link" :href="project.link" target="_blank" rel="noopener" class="mono entry-link">
        {{ t('projects.visit') }} →
      </a>
      <span v-else class="mono no-link">{{ t('projects.noLink') }}</span>
    </div>
    <p class="entry-desc">
      {{ project.desc }}
      <span v-if="project.award" class="badge award">{{ project.award }}</span>
    </p>
    <p class="tags mono">
      <template v-for="(tag, i) in project.tags" :key="tag">{{ i ? ' · ' : '' }}{{ tag }}</template>
    </p>
  </article>
</template>

<style scoped>
.toc-entry {
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}
.toc-entry:first-child {
  border-top: 1px solid var(--border);
}
.entry-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.entry-num {
  color: var(--accent);
  font-size: 14px;
  flex-shrink: 0;
}
.toc-entry h3 {
  font-size: 21px;
  font-weight: 600;
}
.leader {
  flex: 1;
  border-bottom: 1px dotted var(--border-strong);
  transform: translateY(-4px);
  min-width: 20px;
}
.entry-link {
  font-size: 16px;
  white-space: nowrap;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  font-weight: bold;
}
.entry-link:hover {
  border-bottom-color: var(--accent);
}
.no-link {
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
}
.entry-desc {
  font-style: italic;
  color: var(--text-muted);
  font-size: 16.5px;
  margin: 6px 0 4px 26px;
  max-width: 72ch;
}
.award {
  font-style: normal;
  margin-left: 8px;
  vertical-align: 1px;
}
.tags {
  margin-left: 26px;
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}

@media (max-width: 640px) {
  .leader {
    display: none;
  }
  .entry-row {
    flex-wrap: wrap;
  }
  .entry-desc,
  .tags {
    margin-left: 0;
  }
}
</style>
