<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="mono copy">{{ t('footer.note') }}</p>
      <nav class="footer-links mono" aria-label="Footer">
        <a href="mailto:adithama98@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/adithamamulia/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/adithamamulia" target="_blank" rel="noopener">GitHub</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
  background: var(--bg-alt);
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.copy {
  font-size: 12px;
  color: var(--text-muted);
}
.footer-links {
  display: flex;
  gap: 18px;
  font-size: 12px;
}
</style>
