import {gsap} from 'gsap';

//import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath('rect')
const black = document.querySelectorAll('.black');

black.forEach(bl => {
  gsap.to(bl, {
    ease: "linear",
    duration: 1,
    delay: 1,
    morphSVG: {
      shape: "#pink",
      type: 'rotational',
      origin: "50% 50%"

    }
  })
})


/*let planeTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: text,
    start: "top bottom",
  },
  repeat: '-1',
  repeatDelay: 2.5
});

planeTl1.from("#mail-svg", {
  duration: 0.7,
  delay: 1.2,
  opacity: 0,
  rotate: '360deg',
  y: '150px',
  ease: 'power1.out'
}).to("#mail", {
  ease: "power1.in",
  duration: .5,
  delay: 1,
  morphSVG: {
    shape: "#plane",
    type: 'rotational',
    origin: "26% 14%, 34% -13%"
  }
}).to("#mail", {
  duration: 0.6,
  delay: 0.2,
  x: '-40px',
  ease: "power1.out",
}).to("#mail", {
  duration: 1.3,
  x: '150vw',
  y: '-40vh',
  ease: "power1.out",
});*/
