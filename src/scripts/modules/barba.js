import { smoothScroller, ScrollTrigger } from "./scrollSmoother.js";
import { header } from "../utils/nodesHelper.js";
import { heroShapesAnimationInit } from "./heroShapesAnimation.js";
import { parallaxBackgroundFiguresInit } from './parallaxBackgroundFigures.js';
import { stackIconsAnimationInit } from "./stackIconsAnimation.js";
import { smoothFooterInit } from "./smoothFooter.js";

import barba from '@barba/core';

import {gsap} from 'gsap';

function updateCurrentPage() {
  const navItems = document.querySelectorAll('.footer-nav__item a, .nav__list-item a');

  navItems.forEach(item => {
    if(`/${item.getAttribute('href')}` === window.location.pathname) {
      item.classList.add('active-nav');
    } else {
      item.classList.contains('active-nav') ?
      item.classList.remove('active-nav') : null;
    }
  })
}

updateCurrentPage();

/*barba.init({
  views: [{
    namespace: 'home-page',
    beforeEnter() {
      console.log('beforeEnter');
    },
    afterEnter() {
      console.log('AFTER ENT');
    }
  }],

  transitions: [{
    //name: 'custom-transition',
    sync: true,
    preventRunning: true,

    leave(data) {
      /*return gsap.to(data.current.container, {
        opacity: 0,
        duration: 1.2
      });*/
    /*},
    enter(data) {
      if(!nav.classList.contains('opened')) {
        data.next.container.classList.add('fixed');
        return gsap.fromTo(data.next.container, {
          opacity: 0,
          clipPath: "circle(0% at 0% 0%)"
        }, {
          opacity: 1,
          clipPath: "circle(140% at 0% 0%)",
          duration: 2,
          onComplete: () => {
            data.next.container.classList.remove('fixed');
            data.next.container.style.clipPath = "none";
          }
        });
      }
    }
  }]
});*/

/*barba.hooks.leave((data) => {
  smoothScroller.scrollTop(0);
})*/

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
  //heroContentAnimationInit();
  heroShapesAnimationInit();
  stackIconsAnimationInit();
  //
  ScrollTrigger.refresh();

});
