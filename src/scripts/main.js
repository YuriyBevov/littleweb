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
//rest of your script...
//gsap.set("#text-svg", { autoAlpha: 1 });

/*const textIcons = document.querySelectorAll('.text-svg');
let timeline = null;

let activeIcon = null;

function onMouseEnterHandler(evt) {
  console.log('enter', evt.currentTarget)
  evt.currentTarget.removeEventListener('mouseenter', onMouseEnterHandler);

  let textPath = evt.currentTarget.querySelector('.circle');
  console.log(timeline, textPath);
  timeline = gsap.timeline({ repeat: -1, paused: true });
  console.log(timeline);
  timeline.play();

  timeline.to(textPath, {
    duration: 3,
    ease: 'linear',
    rotate: '360deg',
    repeat: -1,
    transformOrigin: "center center",
  })

  evt.currentTarget.addEventListener('mouseleave', onMouseLeaveHandler);
}

function onMouseLeaveHandler(evt) {
  timeline.progress(1);
  timeline.kill();
  timeline = null;

  evt.currentTarget.removeEventListener('mouseleave', onMouseLeaveHandler);
  evt.currentTarget.addEventListener('mouseenter', onMouseEnterHandler);
}

textIcons.forEach(icon => {
  gsap.set(icon, { autoAlpha: 1 });
  icon.addEventListener('mouseenter', onMouseEnterHandler);
})*/
const textIcons = document.querySelectorAll('.text-svg');


textIcons.forEach((icon,i) => {
  gsap.set(icon, { autoAlpha: 1 });
  let textPath = icon.querySelector('.circle');
  const timeline = gsap.timeline({ repeat: -1, paused: true });

  timeline.to(textPath, {
    duration: 10,
    ease: 'linear',
    rotate: '360deg',
    repeat: -1,
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
})


