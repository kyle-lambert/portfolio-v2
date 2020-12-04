import "../navigation/index";
import navbarAnimation from "../shared-animations/navbarAnimation";
import {
  heroAnimation,
  sectionHeadingAnimation,
  projectCardReveal,
} from "./homeAnimations";

document.addEventListener("DOMContentLoaded", () => {
  const sectionHeaders = Array.from(
    document.querySelectorAll("[data-section-header]")
  );
  const projectCards = Array.from(
    document.querySelectorAll("[data-project-card]")
  );

  sectionHeaders.forEach((header) => {
    sectionHeadingAnimation(header);
  });

  projectCards.forEach((card) => {
    projectCardReveal(card);
  });

  navbarAnimation();
  heroAnimation();
});
