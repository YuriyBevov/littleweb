import "./modules/custom_cursor.js";
import "./modules/heroContentAnimation.js";
import "./modules/heroShapesAnimation.js";
import "./modules/preloader.js";
import { preloader } from "./modules/preloader.js";

document.querySelector('.nojs').classList.remove('nojs');
preloader();

/*
для Барбы !
import { animateHeroContent } from "./modules/heroContentAnimation.js";

animateHeroContent();

*/
import {gsap} from 'gsap';

const textIcons = document.querySelectorAll('.text-svg');

textIcons.forEach(icon => {
  gsap.set(icon, { autoAlpha: 1 });
  let textPath = icon.querySelector('.circle');
  let ic = icon.querySelector('.icon');

  icon.addEventListener('mouseenter', () => {
    gsap.to(textPath, {
      duration: 2,
      delay: 0.2,
      ease: 'back',
      rotate: '360deg',
      transformOrigin: "center center",
    })
    gsap.to(ic, {
      duration: 2,
      delay: 0.2,
      ease: 'back',
      rotate: '-360deg',
      transformOrigin: "center center",
    })
  })

  icon.addEventListener('mouseleave', () => {
    gsap.to(textPath, {
      duration: 3,
      delay: 0.2,
      ease: 'elastic',
      rotate: '0',
      transformOrigin: "center center",
    })
    gsap.to(ic, {
      duration: 2,
      delay: 0.2,
      ease: 'back',
      rotate: '0',
      transformOrigin: "center center",
    })
  })
});


