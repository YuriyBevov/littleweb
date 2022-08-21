import { focusTrap } from "../utils/functions";
import { burgerLinesAnimationIn, burgerLinesAnimationOut } from "./burgerMenuAnimation";
import { debounce, setDebounce } from "./debounce.js";
import { smoothScroller } from "./scrollSmoother.js";

import { burger, nav, header } from "../utils/nodesHelper";

import { gsap } from "gsap";
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

gsap.registerPlugin( MorphSVGPlugin );

if(burger) {
  const navBlobs = nav.querySelectorAll('.nav-blob');
  const navItems = nav.querySelectorAll('.nav__list-item a');

  /**
  * prepare option
  */
  navItems.forEach(item => {
    gsap.set(item, { y: 100, opacity: 0});
  });
  gsap.set(nav, {opacity: 0});

  /**
  * nav, nav items animation
  */
  const navTimeline = gsap.timeline().pause();
  navTimeline.to(nav, {
    opacity: 1,
    ease: 'ease-in',
    duration: 0.6
  }).to(navItems, {
    y: 0,
    opacity: 1,
    ease: 'ease',
    duration: 0.5,
    delay: 0.35,
    stagger: 0.025
  }, "-=0.7")

  /**
  * blobs rotation animation
  */
  const blobsTimeline = gsap.timeline().pause();
  blobsTimeline.to(navBlobs, {
    rotate: '360deg',
    ease: 'linear',
    duration: 120,
    repeat: -1,
  })

  /**
  * blobs morph animation
  */
  const middleBlobTimeline = gsap.timeline().pause();
  const middleBlobPath = nav.querySelector('.nav-blob--middle > path');
  const middleBlobPathTo = middleBlobPath.dataset.pathTo;

  middleBlobTimeline.to(middleBlobPath, {
    ease: 'linear',
    duration: 36,
    yoyo: true,
    repeat: -1,
    morphSVG: {
      shape: middleBlobPathTo,
      type: 'rotational',
    }
  });

  const leftBlobTimeline = gsap.timeline().pause();
  const leftBlobPath = nav.querySelector('.nav-blob--left > path');
  const leftBlobPathTo = leftBlobPath.dataset.pathTo;

  leftBlobTimeline.to(leftBlobPath, {
    ease: 'linear',
    duration: 12,
    yoyo: true,
    repeat: -1,
    morphSVG: {
      shape: leftBlobPathTo,
      type: 'rotational',
    }
  });

  const rightBlobTimeline = gsap.timeline().pause();
  const rightBlobPath = nav.querySelector('.nav-blob--left > path');
  const rightBlobPathTo = rightBlobPath.dataset.pathTo;

  rightBlobTimeline.to(rightBlobPath, {
    ease: 'linear',
    duration: 24,
    yoyo: true,
    repeat: -1,
    morphSVG: {
      shape: rightBlobPathTo,
      type: 'rotational',
    }
  });

  /**
  * functions
  */

  function navOpeningAnimation() {
    if(!nav.classList.contains('opened')) {
      setDebounce(1000);

      nav.classList.add('opened');
      burgerLinesAnimationIn();
      smoothScroller.paused(true);
      focusTrap(header, burger);

      navTimeline.play();
      blobsTimeline.play();
      leftBlobTimeline.play();
      middleBlobTimeline.play();
      rightBlobTimeline.play();

      document.addEventListener('keydown', onClickByEscCloseNav);
    } else {
      setDebounce(1000);
      navClosingAnimation();
    }
  };

  function navClosingAnimation() {
    document.removeEventListener('keydown', onClickByEscCloseNav);
    navTimeline.reverse();
    burgerLinesAnimationOut();

    setTimeout(() => {
      nav.classList.remove('opened');
      smoothScroller.paused(false);

      blobsTimeline.restart().pause();
      leftBlobTimeline.restart().pause();
      middleBlobTimeline.restart().pause();
      rightBlobTimeline.restart().pause();
    }, 1000);
  };

  const onClickOpenNav = () => {
    if(!debounce) {
      navOpeningAnimation();
    }
  };

  const onClickByEscCloseNav = (evt) => {
    if (evt.key === "Escape" && !debounce) {
      navClosingAnimation();
    }
  };

  burger.addEventListener('click', onClickOpenNav);
}
