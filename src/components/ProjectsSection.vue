<script setup>
import { useLang } from '../composables/useLang.js'
import ProjectCard from './ProjectCard.vue'
const { t } = useLang()
</script>

<template>
  <section id="projects" class="section alt">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="kicker">04</p>
        <h2>{{ t('projects.title') }}</h2>
        <p class="lede">{{ t('projects.lede') }}</p>
      </div>
      <div class="toc">
        <ProjectCard v-for="(p, i) in t('projects.items')" :key="i" :project="p" :num="i + 1" v-reveal />
      </div>
    </div>
  </section>
</template>

<style scoped>
.toc {
  display: flex;
  flex-direction: column;
}
</style>
