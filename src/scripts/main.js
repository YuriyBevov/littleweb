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

/*textIcons.forEach((icon,i) => {
  gsap.set(icon, { autoAlpha: 1 });
  let textPath = icon.querySelector('.circle');
  const timeline = gsap.timeline({ repeat: -1, paused: true });

  timeline.to(textPath, {
    duration: 10,
    ease: 'linear',
    rotate: '360deg',
    transformOrigin: "center center",
  });

  icon.addEventListener('mouseenter', () => {
    //timeline.progress(0).play();
    timeline.resume();
  });

  icon.addEventListener('mouseleave', () => {
    //timeline.progress(1).pause();
    timeline.pause();
  });
}) */

/*textIcons.forEach((icon,i) => {
  gsap.set(icon, { autoAlpha: 1 });
  let textPath = icon.querySelector('.circle');
  const timeline = gsap.timeline({ paused: true });
  const timeline2 = gsap.timeline({ paused: true });

  //gets total progress
  var progress = timeline.totalProgress();
  let debounce = false;

  icon.addEventListener('mouseenter', () => {
    timeline2.progress(1).pause();

    if(debounce === false) {
      console.log(debounce)
      debounce = true;
      timeline.to(textPath, {
        duration: 1,
        ease: 'linear',
        rotate: '-45deg',
        transformOrigin: "center center",
      });
      console.log(progress);
      timeline.progress(0).play();

      setTimeout(() => {
        debounce = false;
      }, 1000);
    }
  });

  icon.addEventListener('mouseleave', () => {
    timeline.progress(1).pause();
    if(debounce === false) {
      console.log(debounce)
      debounce = true;
      timeline2.to(textPath, {
        duration: 1,
        ease: 'linear',
        rotate: '0',
        transformOrigin: "center center",
      });

      timeline2.progress(0).play();
      setTimeout(() => {
        debounce = false;
      }, 1000);
    }
  });
})*/

textIcons.forEach(icon => {
  gsap.set(icon, { autoAlpha: 1 });
  let textPath = icon.querySelector('.circle');

  icon.addEventListener('mouseenter', () => {
    gsap.to(textPath, {
      duration: 2,
      delay: 0.2,
      ease: 'back',
      rotate: '360deg',
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
  })
});


