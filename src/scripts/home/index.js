import "../navigation/index";
import { staggerReveal, projectTimeline } from "./homeAnimations";

function hero() {
  const headingLines = Array.from(
    document.querySelectorAll("[data-hero-line]")
  );

  const tl = staggerReveal(headingLines);
  tl.play();
}

function homeProjects() {
  const projectItems = Array.from(
    document.querySelectorAll("[data-project-item]")
  );

  projectItems.forEach((item) => {
    console.log(item);
    const tl = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: item,
        start: "top center",
      },
    });
    tl.from(item, {
      autoAlpha: 0,
      duration: 0.4,
    });
  });
}

function initialiseAnimations() {
  hero();
  homeProjects();
}

document.addEventListener("DOMContentLoaded", () => {
  initialiseAnimations();
});
