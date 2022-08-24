//import { footer } from "../utils/nodesHelper";


/*export function smoothFooterInit(scroller){
  const footer = document.querySelector('.footer');

  if(footer) {
    scroller.effects('.footer__container', {speed: 0.5, ease: 'linear'});
    scroller.effects('.footer', {speed: 1.5, ease: 'linear'});
  }
}*/

import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function smoothFooterInit() {
  /*gsap.set('.footer__wrapper', { y: '-150px' })

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer__container',
      start: "top bottom",
      end: "+=25%",
      scrub: true,
    },
  });

  tl.to('.footer__wrapper', {
    y: 0,
    ease: 'none',
  });*/
}

smoothFooterInit();
