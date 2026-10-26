<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
const photoUrl = `${import.meta.env.BASE_URL}img/photo.jpg`
const photoFailed = ref(false) // falls back to initials until public/img/photo.jpg exists
</script>

<template>
  <section id="home" class="hero">
    <div class="container titlepage">
      <div class="avatar-frame" aria-hidden="true">
        <img v-if="!photoFailed" :src="photoUrl" alt="" @error="photoFailed = true" />
        <span v-else class="mono">AM</span>
      </div>

      <p class="kicker">{{ t('hero.greeting') }}</p>
      <h1>{{ t('hero.name') }}</h1>
      <div class="name-rule" aria-hidden="true"></div>
      <p class="headline">{{ t('hero.headline') }}</p>
      <p class="tagline">{{ t('hero.tagline') }}</p>

      <nav class="cta-row" :aria-label="t('contact.title')">
        <a class="icon-link" href="https://www.linkedin.com/in/adithamamulia/" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
          <span>LinkedIn</span>
        </a>
        <a class="icon-link" href="https://github.com/adithamamulia" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          <span>GitHub</span>
        </a>
        <a class="icon-link" href="mailto:adithama98@gmail.com">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" />
            <path d="m2.5 6 9.5 7 9.5-7" />
          </svg>
          <span>{{ t('hero.cta.email') }}</span>
        </a>
      </nav>
    </div>
    <div class="hairline" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.hero {
  padding: 56px 0 44px;
  position: relative;
}
.titlepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.avatar-frame {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-strong);
  outline: 1px solid var(--border);
  outline-offset: 4px; /* double-frame, print engraving feel */
  background: var(--bg-alt);
  margin-bottom: 24px;
}
.avatar-frame span {
  font-size: 44px;
  color: var(--accent);
  font-weight: 500;
}
.avatar-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.kicker {
  margin-bottom: 10px;
}
h1 {
  font-size: clamp(42px, 7vw, 68px);
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 12px;
}
.name-rule {
  width: 100%;
  max-width: 420px;
  border-bottom: 3px double var(--border-strong);
  margin-bottom: 14px;
}
.headline {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.tagline {
  font-style: italic;
  color: var(--text-muted);
  max-width: 56ch;
  margin-bottom: 24px;
}
.cta-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
}
.icon-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.2s;
}
.icon-link:hover {
  border-bottom-color: var(--accent);
}
.icon-link svg {
  flex-shrink: 0;
}
.hairline {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border-strong);
}

@media (max-width: 760px) {
  .hero {
    padding: 40px 0 34px;
  }
  .avatar-frame {
    width: 116px;
    height: 116px;
    margin-bottom: 20px;
  }
  .avatar-frame span {
    font-size: 34px;
  }
  .cta-row {
    gap: 18px;
  }
}
</style>
