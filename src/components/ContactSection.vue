<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="contact" class="section">
    <div class="container contact-inner">
      <div v-reveal>
        <p class="kicker">07</p>
        <h2>{{ t('contact.title') }}</h2>
        <p class="lede contact-text">{{ t('contact.text') }}</p>
        <div class="cta-row">
          <a class="btn primary" href="mailto:adithama98@gmail.com">{{ t('contact.email') }}</a>
          <a class="btn" href="https://www.linkedin.com/in/adithamamulia/" target="_blank" rel="noopener">LinkedIn</a>
          <a class="btn" href="https://github.com/adithamamulia" target="_blank" rel="noopener">GitHub</a>
          <a class="btn" href="https://orcid.org/0009-0005-6885-0575" target="_blank" rel="noopener">ORCID</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-inner {
  text-align: center;
  display: flex;
  justify-content: center;
}
.contact-inner h2 {
  font-size: clamp(28px, 4vw, 40px);
  margin-bottom: 12px;
}
.contact-text {
  margin: 0 auto 24px;
}
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
