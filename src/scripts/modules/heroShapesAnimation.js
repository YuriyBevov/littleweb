import { getCssPropertyValue, setCssProperty } from "../utils/functions";
import { gsap } from "gsap";
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

gsap.registerPlugin( MorphSVGPlugin );

/**
 * hero section bg animation
 */
const bg = document.querySelector('.hero__bg');
const clipValue = getCssPropertyValue('--hero-block-clip');

/*let bg_tl = gsap.timeline({repeat: -1, repeatDelay: 1});

bg_tl.to(bg,{
  duration: 60,
  clipPath: 'circle(92.6% at 95% -40%)',
  ease: 'ease-in',
})
.to(bg,{
  duration: 60,
  clipPath: clipValue,
  ease: 'ease-in',
});*/

/**
 * Blobs animations function
 */

 function blobAnimation(option) {

  gsap.to(option.el, {
    ease: option.ease ? option.ease : 'elastic',
    duration: option.duration ? option.duration : 3,
    delay: option.delay ? option.delay : 0.3,
    scale: option.scale ? option.scale : 1,
    //rotate: '180deg',
    //transformOrigin: 'center',
    morphSVG: {
      shape: option.shape,
      type: 'rotational',
      //transformOrigin: 'center',
    }
  });

}

/*const wave = document.querySelector('#wave');
const wavePathMiddle = wave.dataset.pathMiddle;
const wavePathTo = wave.dataset.pathTo;
const wavePath = wave.getAttribute('d');

let tl = gsap.timeline({repeat: -1, repeatDelay: 1, delay: 2.5});

gsap.to(wave, {
  ease: 'elastic',
  duration: 2,
  delay: 0.3,
  morphSVG: {
    shape: wavePathMiddle,
    type: 'rotational',
  }
})*/

/*tl.to(wave, {
  ease: 'linear',
  duration: 20,
  delay: .5,
  yoyo: true,
  startAt: {
    morphSVG: {
      shape: wavePathMiddle,
    }
  },
  morphSVG: {
    shape: wavePathTo,
    type: 'rotational',
  }
}).to(wave, {
  ease: 'linear',
  duration: 20,
  delay: 0.5,
  yoyo: true,
  morphSVG: {
    shape: wavePathMiddle,
    type: 'rotational',
  }
});*/

const rightBlob = document.querySelector('.blob-path--right');
const rightBlobPathFrom = rightBlob.getAttribute('d');
const rightBlobPathTo = rightBlob.dataset.pathTo;

gsap.set(rightBlob, {scale: 0});

blobAnimation({
  el: rightBlob,
  shape: rightBlobPathTo,
  delay: 0.5,

  ease: 'back',
})

const onRightBlobMouseOutHandler = () => {
  blobAnimation({
    el: rightBlob,
    shape: rightBlobPathTo,
    delay: 0,
  })
  rightBlob.addEventListener('mouseover', onRightBlobMouseOverHandler);
  rightBlob.removeEventListener('mouseout', onRightBlobMouseOutHandler);
}

const onRightBlobMouseOverHandler = () => {
  blobAnimation({
    el: rightBlob,
    shape: rightBlobPathFrom,
    delay: 0,
  })
  rightBlob.removeEventListener('mouseover', onRightBlobMouseOverHandler);
  rightBlob.addEventListener('mouseout', onRightBlobMouseOutHandler);
}

rightBlob.addEventListener('mouseover', onRightBlobMouseOverHandler);

const leftBlob = document.querySelector('.blob-path--left');
const leftBlobPathFrom = leftBlob.getAttribute('d');
const leftBlobPathTo = leftBlob.dataset.pathTo;

gsap.set(leftBlob, {scale: 0});

blobAnimation({
  el: leftBlob,
  shape: leftBlobPathTo,
  delay: 0.5
})

const onLeftBlobMouseOutHandler = () => {
  blobAnimation({
    el: leftBlob,
    shape: leftBlobPathTo,
    delay: 0,
  })
  leftBlob.addEventListener('mouseover', onLeftBlobMouseOverHandler);
  leftBlob.removeEventListener('mouseout', onLeftBlobMouseOutHandler);
}

const onLeftBlobMouseOverHandler = () => {
  blobAnimation({
    el: leftBlob,
    shape: leftBlobPathFrom,
    delay: 0,
  })
  leftBlob.removeEventListener('mouseover', onLeftBlobMouseOverHandler);
  leftBlob.addEventListener('mouseout', onLeftBlobMouseOutHandler);
}

leftBlob.addEventListener('mouseover', onLeftBlobMouseOverHandler);
