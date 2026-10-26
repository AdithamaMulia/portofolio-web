<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
