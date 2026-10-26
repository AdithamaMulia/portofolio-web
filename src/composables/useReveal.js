// v-reveal: fade/slide element in once it scrolls into view; inert under reduced motion
export const revealDirective = {
  mounted(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.classList.add('reveal')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    io.observe(el)
  },
}
