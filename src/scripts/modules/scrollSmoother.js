import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let footer = document.querySelector('.footer');
let stackBackground = document.querySelector('.stack__field--bg');
let serviceTypeItems = document.querySelectorAll('.services__type-item');

if(stackBackground) {
  stackBackground.setAttribute('data-speed', 1.2);
}
if(footer) {
  //footer.setAttribute('data-speed', 0.75);
  //footer.setAttribute('data-lag', 0.5);
}
if(serviceTypeItems) {
  serviceTypeItems.forEach((item,i) => {
    item.setAttribute('data-speed', `${1.025 + (0.01 * i)}`);
  });
}

ScrollSmoother.create({
  smooth: 1.5,               // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true,           // looks for data-speed and data-lag attributes on elements
  //smoothTouch: 1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  //normalizeScroll: true,
});
