import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/*let scroller = null;
let device = null;*/

/*ScrollTrigger.matchMedia({
  "(min-width: 769px)": function() {

    if(device === 'mobile' || device === null) {
      device = 'desktop';
      scroller !== null ?
      scroller.kill() : null;
      scroller = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
      });
      initScrollerElements();
    }
  },

  "(max-width: 768px)": function() {
    if(device !== 'mobile') {
      device = 'mobile'
      scroller !== null ?
      scroller.kill() : null;
      /*scroller = ScrollSmoother.create({
        effects: false,           // looks for data-speed and data-lag attributes on elements
        smoothTouch: false,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });*/
    /*}
  },
});*/

let scroller = ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
  //normalizeScroll: true
  smoothTouch: 0.2
});
initScrollerElements();

/*ScrollTrigger.matchMedia({
  "(min-width: 769px)": function() {

    scroller.normalizeScroll = false;
  },

  "(max-width: 768px)": function() {
    scroller.normalizeScroll = true;
  },
});*/

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
