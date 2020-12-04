export function heroAnimation() {
  const tl = gsap.timeline();
  tl.from("[data-hero-line]", {
    yPercent: 100,
    duration: 1.4,
    stagger: 0.2,
    ease: "power4.inOut",
  });
  tl.from(
    "[data-hero-link]",
    {
      autoAlpha: 0,
      duration: 1.4,
      stagger: 0.2,
      ease: "power4.in",
    },
    "<"
  );
}

export function sectionHeadingAnimation(current) {
  const text = current.querySelector("[data-section-header-text]");
  const line = current.querySelector("[data-section-header-line]");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: current,
    },
  });

  tl.from(line, {
    autoAlpha: 0,
    scaleX: 0,
    duration: 1.2,
    ease: "power4.inOut",
  });
  tl.from(
    text,
    {
      yPercent: 100,
      duration: 1.2,
      ease: "power4.inOut",
    },
    "<1"
  );
}

export function projectCardReveal(current) {
  const overlay = current.querySelector("[data-project-card-overlay]");
  const lines = Array.from(
    current.querySelectorAll("[data-project-card-line]")
  );
  const copy = current.querySelector("[data-project-card-copy]");
  const links = Array.from(
    current.querySelectorAll("[data-project-card-link]")
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: current,
    },
    defaults: {
      ease: "power4.inOut",
      duration: 1.4,
    },
  });

  tl.to(overlay, {
    delay: 0.2,
    xPercent: 100,
  });
  tl.from(
    lines,
    {
      yPercent: 100,
      stagger: 0.2,
    },
    "<"
  );
  tl.from(
    links,
    {
      autoAlpha: 0,
      stagger: 0.2,
    },
    "<"
  );
  tl.from(
    copy,
    {
      autoAlpha: 0,
    },
    "<0.5"
  );
}
