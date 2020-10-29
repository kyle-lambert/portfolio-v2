// import "../navigation/index";
// import { staggerReveal, overlayReveal, projectReveal } from "./homeAnimations";

// function hero() {
//   const headingLines = Array.from(
//     document.querySelectorAll("[data-hero-line]")
//   );

//   const tl = staggerReveal(headingLines);
//   tl.play();
// }

// function homeProjects() {
//   const projects = Array.from(document.querySelectorAll("[data-project-item]"));

//   projects.forEach((project) => projectReveal(project));
// }

// function initialiseAnimations() {
//   hero();
//   homeProjects();

//   // const sectionHeadings = Array.from(
//   //   document.querySelectorAll("[data-section-heading]")
//   // );
//   // sectionHeadings.forEach((heading) => {
//   //   const span = heading.querySelector("span");
//   //   const tl = gsap.timeline({
//   //     scrollTrigger: {
//   //       trigger: heading,
//   //     },
//   //   });
//   //   tl.from(heading, {
//   //     xPercent: -100,
//   //     duration: 0.6,
//   //   });
//   //   tl.from(
//   //     span,
//   //     {
//   //       duration: 0.3,
//   //       yPercent: 100,
//   //       ease: "expo.out",
//   //     },
//   //     "+=0.3"
//   //   );
//   // });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   initialiseAnimations();
// });
