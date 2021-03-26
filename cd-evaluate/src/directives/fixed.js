export default {
  bind (el, binding) {
    console.log(window)
    window.addEventListener('scroll', function (el) {
      this.handleScroll(el)
    })
  },
  //   unbind () {
  //     window.removeEventListener('scroll', this.handleScroll)
  //   },
  handleScroll (el) {
    const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    el.style.position = 'fixed'
    el.style.top = top + 'px'
  }
}
