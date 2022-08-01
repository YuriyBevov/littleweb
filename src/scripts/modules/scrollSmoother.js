import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//ScrollTrigger.config({ ignoreMobileResize: true });

let scroller = ScrollSmoother.create({
  smooth: 3,
  effects: true
});
initScrollerElements();

function initScrollerElements(){
  let footer = document.querySelector('footer');
  if(footer) {
    scroller.effects('.footer__container', {speed: 0.5, ease: 'linear'});
    scroller.effects(footer, {speed: 1.5, ease: 'linear'});
  }

  let stackBackground = document.querySelector('.stack__field--bg');
  if(stackBackground) {
    scroller.effects(stackBackground, {speed: 1.2});
  }

  let serviceTypeItems = document.querySelectorAll('.services__type-item');
  if(serviceTypeItems) {
    serviceTypeItems.forEach((item,i) => {
      scroller.effects(item, {speed: `${1.025 + (0.01 * i)}`});
    });
  }

  let blobs = document.querySelectorAll('.blob');
  if(blobs) {
    blobs.forEach((item,i) => {
      scroller.effects(item, {speed: 1.2 + (i / 3.85)});
    });
  }
}
