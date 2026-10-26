<script setup>
defineProps({ label: { type: String, default: '[ image ]' } })
</script>

<template>
  <div class="ph" role="img" :aria-label="label">
    <span class="mono">{{ label }}</span>
  </div>
</template>

<style scoped>
.ph {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-alt);
  border: 1px solid var(--border-strong);
  color: var(--text-muted);
  font-size: 12px;
  min-height: 120px;
  width: 100%;
}
</style>
