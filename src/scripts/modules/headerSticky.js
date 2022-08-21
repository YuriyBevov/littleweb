console.log('header')
import { header } from "../utils/nodesHelper";
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger );

function scrollTriggerOpt(opt) {
  return {
    trigger: opt.triggerEl ? opt.triggerEl : null,
    start: opt.start ? opt.start : 'top top',
    end: opt.end ? opt.end : null,
    scrub: opt.scrub ? opt.scrub : false,
    markers: opt.markers ? opt.markers : false,
  }
}

let headerHideTimeline = gsap.timeline(
  { scrollTrigger: {
      start: '+=500',
      end: '+=500',
      scrub: true,
    }
  }
);

headerHideTimeline.to(header, {
  y: '-100%',
  opacity: 0,
}).to(header, {
  padding: '15px 0',
  backgroundColor: 'rgba(21, 27, 83, 0.9)',
  opacity: 1
}).to(header, {
  y: 0,
})
