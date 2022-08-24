import { smoothScroller, ScrollTrigger } from "./scrollSmoother.js";
import { header } from "../utils/nodesHelper.js";
import { heroShapesAnimationInit } from "./heroShapesAnimation.js";
import { parallaxBackgroundFiguresInit } from './parallaxBackgroundFigures.js';
import { stackIconsAnimationInit } from "./stackIconsAnimation.js";
import { smoothFooterInit } from "./smoothFooter.js";
import { updateCurrentPage } from "./updateCurrentPage.js";

import barba from '@barba/core';

import {gsap} from 'gsap';

updateCurrentPage();

function animationLeave(current) {
  return gsap.to(current, {
    opacity: 0,
    duration: .5
  });
}

function animationEnter(next) {
  return gsap.from(next, {
    opacity: 0,
    duration: 1
  });
}

/*function animationLeave(current) {
  console.log(percentLeft, percentTop)
  return gsap.fromTo(overlay, {
    clipPath: 'polygon(0 0, 100% 0%, 0 0, 0% 100%)',
    zIndex: '999'
  },{
    clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    duration: 1,
  });
}

function animationEnter(next) {

  return gsap.fromTo(overlay, {
    clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',

  },{
    clipPath: 'polygon(100% 100%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 1,
    zIndex: '-1'
  });
}*/

barba.init({
  transitions: [

    {
      leave: ({current}) => animationLeave(current.container),

      enter({next}) {
        animationEnter(next.container);
      }
    }
  ]
});

barba.hooks.enter((data) => {
  smoothScroller.scrollTop(0);
  if(data.next.namespace === 'home-page') {
    !header.classList.contains('header--main') ?
    header.classList.add('header--main') : null;
  } else {
    header.classList.contains('header--main') ?
    header.classList.remove('header--main') : null;
  }


});

barba.hooks.after((data) => {
  updateCurrentPage();

  parallaxBackgroundFiguresInit(smoothScroller);
  smoothFooterInit();
  heroShapesAnimationInit();
  stackIconsAnimationInit();

  ScrollTrigger.refresh();
});
