import { header } from "../utils/nodesHelper";
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger );

let headerHideTimeline = gsap.timeline(
  { scrollTrigger: {
      start: '+=500',
      end: '+=500',
      scrub: true,
    }
  }
);

headerHideTimeline.to(header, {
  //backgroundColor: 'rgba(21, 27, 83, .95)',
})
