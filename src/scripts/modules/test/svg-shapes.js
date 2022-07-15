
import { gsap } from 'gsap';
import { preloader } from './preloader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// preload the images
preloader();

// All path elements in the page
const paths = [...document.querySelectorAll('path.path-anim')];
paths.forEach(el => {
  const svgEl = el.closest('svg');
  const pathTo = el.dataset.pathTo;

  gsap.timeline({
      scrollTrigger: {
          trigger: svgEl,
          start: "top center",
          end: "bottom center",
          scrub: true
      }
  })
  .to(el, {
      ease: 'none',
      attr: { d: pathTo }
  });
});
