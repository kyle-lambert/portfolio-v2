import { navigationScene } from "./animations";

document.addEventListener("DOMContentLoaded", () => {
  const openNavBtn = document.querySelector("[data-nav-open]");
  const closeNavBtn = document.querySelector("[data-nav-close]");
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const timeline = navigationScene();

  const openNav = () => timeline.play();
  const closeNav = () => timeline.reverse();

  openNavBtn.addEventListener("click", openNav);
  closeNavBtn.addEventListener("click", closeNav);
  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });
});
