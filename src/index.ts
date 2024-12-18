import { App, Directive } from 'vue';

export default {
  install(app: App) {
    app.directive('v-aos', scrollAnimation);
  },
};

const scrollAnimation: Directive = {
  mounted(el, binding) {
    const options = binding.value || { threshold: 0.5 };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('animate');
      } else {
        el.classList.remove('animate');
      }
    }, options);

    observer.observe(el);
  },
};