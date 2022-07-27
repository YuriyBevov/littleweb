import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


let scroller = null;


ScrollTrigger.matchMedia({
  "(min-width: 769px)": function() {
      if(scroller !== null) {
        scroller.kill();
      }
      scroller = ScrollSmoother.create({
        smooth: 1.5,               // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true,           // looks for data-speed and data-lag attributes on elements
        //smoothTouch: true,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        //normalizeScroll: true,
      });

  },
  "(max-width: 768px)": function() {
    if(scroller !== null) {
      scroller.kill();
    }
      scroller = ScrollSmoother.create({
        smooth: 1.5,               // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: false,           // looks for data-speed and data-lag attributes on elements
        //smoothTouch: true,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        //normalizeScroll: true,
      });
  }
});

initScrollerElements();
function initScrollerElements(){
  let footer = document.querySelector('.footer');
  if(footer) {
    scroller.effects(footer, {lag: 1.5, ease: 'linear'});
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
      console.log(1.2 + (i / 3.85))
      scroller.effects(item, {speed: 1.2 + (i / 3.85)});
    });
  }
}
