(function () {
  const heroFadeIn = () => {
    gsap.from("[data-gsap-hero]", {
      autoAlpha: 0,
      duration: 0.6,
      delay: 0.4,
      y: 25,
      ease: "power2.out",
    });
  };

  const init = () => {
    heroFadeIn();
  };

  init();
})();
