import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {initParallaxBlobs} from './parallaxBlobs.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.config({ ignoreMobileResize: true });

let smoothScroller = ScrollSmoother.create({
  smooth: 3,
  effects: true
});

initParallaxBlobs(smoothScroller);

export { smoothScroller };
