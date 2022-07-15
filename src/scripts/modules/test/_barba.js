import barba from '@barba/core';
import {gsap} from 'gsap';

console.log(barba);
let trBackground = document.querySelector('.transition-overlay');
let tl = gsap.timeline();
barba.init({
  views: [{
    beforeEnter() {
      console.log('before home')
    },
    afterEnter() {
      console.log('after enter home')
    }
  }],

  transitions: [{
    name: 'opacity-transition',

    leave(data) {
      return gsap.to(trBackground, {
        x: 0
      });
    },

    after(data) {
      return tl.to(trBackground, {
        delay: 0.3,
        x: '100vw',
      }).to(trBackground, {
        duration: 0,
        delay: 0.1,
        x: '-100vw',
        opacity: 0,
        zIndex: -1,
      }).to(trBackground, {
        duration: 0,
        opacity: 1,
        zIndex: 1,
      });
    }
  }]
});

barba.hooks.after(() => console.log('init scripts'));
