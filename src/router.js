import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import CaseStudyView from './views/CaseStudyView.vue'
import NotFoundView from './views/NotFoundView.vue'

// hash history: zero server config, works from any GitHub Pages subpath
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/projects/:slug', component: CaseStudyView },
    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    return { top: 0 }
  },
})

export default router
