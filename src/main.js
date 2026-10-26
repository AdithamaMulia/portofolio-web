import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { revealDirective } from './composables/useReveal.js'
import './styles/main.css'

const app = createApp(App)
app.directive('reveal', revealDirective)
app.use(router)
app.mount('#app')
