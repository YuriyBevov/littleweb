import { smoothScroller, ScrollTrigger } from "./scrollSmoother.js";
import { header } from "../utils/nodesHelper.js";

import { heroContentAnimationInit } from "./heroContentAnimation.js";
import { heroShapesAnimationInit } from "./heroShapesAnimation.js";
import { parallaxBackgroundFiguresInit } from './parallaxBackgroundFigures.js';
import { stackIconsAnimationInit } from "./stackIconsAnimation.js";

import barba from '@barba/core';

import {gsap} from 'gsap';

barba.init({
  views: [{

  }],

  transitions: [{

  }]
});

barba.hooks.beforeEnter((data) => {
  console.log('barba beforeEnter')
});

barba.hooks.after((data) => {

  if(data.next.namespace === 'home-page') {
    !header.classList.contains('header--main') ?
    header.classList.add('header--main') : null;
  } else {
    header.classList.contains('header--main') ?
    header.classList.remove('header--main') : null;
  }

  parallaxBackgroundFiguresInit(smoothScroller);
  heroContentAnimationInit();
  heroShapesAnimationInit();
  stackIconsAnimationInit();

  ScrollTrigger.refresh();
  smoothScroller.scrollTop(0);
});
