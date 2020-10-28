function staggerReveal(nodes, trigger) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      markers: true,
    },
  });
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

export default staggerReveal;
