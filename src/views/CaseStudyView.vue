<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '../composables/useLang.js'
import CaseStudyLayout from '../components/CaseStudyLayout.vue'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const { t } = useLang()

const SLUGS = ['akebono-lstm-forecasting', 'akebono-yolo-defect-detection', 'prostate-cancer-research']
// drop files into public/img/ with these exact names; missing files fall back to the placeholder
const IMAGES = {
  'akebono-lstm-forecasting': 'lstm-pipeline.jpg',
  'akebono-yolo-defect-detection': 'yolo-station.jpg',
  'prostate-cancer-research': 'research-pipeline.jpg',
}
const slug = computed(() => route.params.slug)
const valid = computed(() => SLUGS.includes(slug.value))
const data = computed(() => t(`cases.${slug.value.replace(/-/g, '_')}`))
const image = computed(() => `${import.meta.env.BASE_URL}img/${IMAGES[slug.value]}`)
</script>

<template>
  <CaseStudyLayout v-if="valid" :data="data" :image="image" />
  <NotFoundView v-else />
</template>
