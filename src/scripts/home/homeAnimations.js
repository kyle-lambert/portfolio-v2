export function staggerReveal(nodes) {
  const tl = gsap.timeline({ paused: true });
  tl.from(nodes, {
    delay: 0.2,
    autoAlpha: 0,
    yPercent: 100,
    duration: 1.2,
    stagger: 0.3,
    ease: "expo.out",
  });

  return tl;
}

export function projectTimeline(trigger) {
  const tl = gsap.timeline({
    scrollTrigger: trigger,
  });

  tl.from("[data-project-line]", {
    delay: 0.2,
    autoAlpha: 0,
    yPercent: 100,
    duration: 0.6,
    stagger: 0.2,
    ease: "expo.out",
  }).to(
    "[data-project-picture-overlay]",
    {
      xPercent: 100,
      duration: 0.6,
      ease: "power4.in",
    },
    "-=1.2"
  );
}
