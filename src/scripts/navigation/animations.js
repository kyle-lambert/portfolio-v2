export function navigationScene() {
  const tl = gsap.timeline({ paused: true });

  tl.set("[data-nav]", {
    css: {
      display: "block",
    },
  });
  tl.from("[data-nav-overlay]", {
    autoAlpha: 0,
    delay: 0,
    duration: 0.2,
  });
  tl.from("[data-nav-sidebar]", {
    xPercent: 100,
    duration: 0.4,
  });
  tl.from("[data-nav-link]", {
    autoAlpha: 0,
    duration: 0.2,
    stagger: 0.1,
    delay: -0.2,
    x: 40,
  });

  return tl;
}
