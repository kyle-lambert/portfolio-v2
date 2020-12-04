export default function navbarAnimation() {
  const tl = gsap.timeline();

  tl.from("[data-navbar-line]", {
    autoAlpha: 0,
    scaleX: 0,
    duration: 1.2,
    ease: "power4.inOut",
  });
  tl.from(
    "[data-navbar-btn-text]",
    {
      yPercent: 100,
      duration: 1.2,
      ease: "power4.inOut",
    },
    "<1"
  );
}
