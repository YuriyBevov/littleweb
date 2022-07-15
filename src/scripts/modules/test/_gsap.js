import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
console.log('scroll')
ScrollSmoother.create({
  smooth: 1.5,               // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true,           // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

const scrollBlock = document.querySelector('.scroll-block-container');
const scrollBtn = document.querySelector('.scroll-down-button');
const svg = scrollBtn.querySelector('svg');

ScrollTrigger.create({
  trigger: scrollBlock,
  start: "top top",
  end: "+=100vh",
  onUpdate: (self => {
    console.log("progress:", self.progress)

    gsap.to(scrollBtn, {
      duration: 0.1,
      scale: 1+self.progress,
      ease: 'linear'
    })

    gsap.to(svg, {
      duration: 0.3,
      opacity: 1-self.progress,
      ease: 'linear'
    })
  })
});
