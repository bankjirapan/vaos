const r = {
  install(e) {
    e.directive("v-aos", o);
  }
}, o = {
  mounted(e, s) {
    const t = s.value || { threshold: 0.5 };
    new IntersectionObserver(([n]) => {
      n.isIntersecting ? e.classList.add("animate") : e.classList.remove("animate");
    }, t).observe(e);
  }
};
export {
  r as default
};
