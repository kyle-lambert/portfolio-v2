export function staggerReveal(nodes) {
  const tl = gsap.timeline({ paused: true });
  tl.from(nodes, {
    delay: 0.5,
    yPercent: 100,
    duration: 1.5,
    stagger: 0.15,
    ease: "power3.out",
  });

  return tl;
}

export function overlayReveal(node) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: node,
      markers: true,
    },
  });
  tl.to(node, {
    xPercent: 100,
    duration: 1.6,
    ease: "power4.out",
  });
}

export function projectReveal(current) {
  const projectLines = Array.from(
    current.querySelectorAll("[data-project-line]")
  );
  const projectBtns = Array.from(
    current.querySelectorAll("[data-project-btn]")
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: current,
      markers: true,
      start: "center bottom",
    },
  });
  tl.from(current, {
    autoAlpha: 0,
    duration: 0.5,
  }).from(
    projectLines,
    {
      autoAlpha: 0,
      xPercent: -100,
      duration: 1,
      stagger: 0.1,
      scale: 2.4,
      ease: "expo.out",
    },
    "<"
  );
  // .from(
  //   projectBtns,
  //   {
  //     autoAlpha: 0,
  //     xPercent: -100,
  //     duration: 0.5,
  //     stagger: 0.1,
  //     ease: "expo.out",
  //   },
  //   "<"
  // );
}
