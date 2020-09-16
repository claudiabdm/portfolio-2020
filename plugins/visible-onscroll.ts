import Vue from 'vue';

Vue.directive('visible-onscroll',
  {
    inserted: function (el, binding) {
      window.addEventListener("scroll", (e: Event) => {
        const { top, bottom } = el.getBoundingClientRect();
        if (top >= 0 && bottom <= window.innerHeight) {
          el.setAttribute("style", "opacity: 1");
        } else {
          el.setAttribute("style", "opacity: 0");
        }
      })
    },
    unbind: () => console.log('unbind')
  })
