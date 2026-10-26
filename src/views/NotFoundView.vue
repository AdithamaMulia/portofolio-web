<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <div class="notfound container">
    <p class="mono code">404</p>
    <h1>{{ t('notFound.title') }}</h1>
    <p class="msg">{{ t('notFound.message') }}</p>
    <RouterLink to="/" class="btn primary">{{ t('notFound.home') }}</RouterLink>
  </div>
</template>

<style scoped>
.notfound {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 14px;
  padding-top: 80px;
  padding-bottom: 80px;
}
.code {
  font-size: 64px;
  color: var(--accent);
  line-height: 1;
}
h1 {
  font-size: 28px;
}
.msg {
  color: var(--text-muted);
  max-width: 44ch;
  margin-bottom: 10px;
}
.btn {
  text-decoration: none;
}
</style>
