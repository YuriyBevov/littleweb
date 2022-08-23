import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import { smoothFooterInit } from "./smoothFooter.js";
import { parallaxBackgroundFiguresInit } from './parallaxBackgroundFigures.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.config({ ignoreMobileResize: true });

let smoothScroller = ScrollSmoother.create({
  smooth: 3,
  effects: true
});

smoothFooterInit(smoothScroller);
parallaxBackgroundFiguresInit(smoothScroller);

export { smoothScroller, ScrollTrigger };
