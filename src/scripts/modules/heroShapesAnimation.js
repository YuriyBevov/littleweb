import { gsap } from "gsap";
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

gsap.registerPlugin( MorphSVGPlugin );

/**
* Wave animation
*/

const wave = document.querySelector('#wave');
if(wave) {
  const wavePathMiddle = wave.dataset.pathMiddle;
  const wavePath = wave.getAttribute('d');

  const wave2 = document.querySelector('#wave2');
  const wave2PathMiddle = wave2.dataset.pathMiddle;
  const wave2Path = wave2.getAttribute('d');

  let waveTimeline = gsap.timeline({repeat: -1, repeatDelay: 1, delay: 2.5});
  let wave2Timeline = gsap.timeline({repeat: -1, repeatDelay: 1, delay: 3});

  gsap.to(wave, {
    ease: 'elastic',
    duration: 2,
    delay: 0.3,
    morphSVG: {
      shape: wavePathMiddle,
      type: 'rotational',
    }
  })

  gsap.to(wave2, {
    ease: 'elastic',
    duration: 2,
    delay: 0.3,
    morphSVG: {
      shape: wave2PathMiddle,
      type: 'rotational',
    }
  })

  waveTimeline.to(wave, {
    ease: 'linear',
    duration: 30,
    delay: .5,
    yoyo: true,
    startAt: {
      morphSVG: {
        shape: wavePathMiddle,
      }
    },
    morphSVG: {
      shape: wavePath,
      type: 'rotational',
    }
  }).to(wave, {
    ease: 'linear',
    duration: 30,
    delay: 0.5,
    yoyo: true,
    morphSVG: {
      shape: wavePathMiddle,
      type: 'rotational',
    }
  });

  wave2Timeline.to(wave2, {
    ease: 'linear',
    duration: 20,
    delay: .5,
    yoyo: true,
    startAt: {
      morphSVG: {
        shape: wave2PathMiddle,
      }
    },
    morphSVG: {
      shape: wave2Path,
      type: 'rotational',
    }
  }).to(wave2, {
    ease: 'linear',
    duration: 20,
    delay: .5,
    yoyo: true,
    morphSVG: {
      shape: wave2PathMiddle,
      type: 'rotational',
    }
  });
}

/**
* Blobs animations function
*/

function blobAnimation(option) {

  gsap.to(option.pathFrom, {
    ease: option.ease ? option.ease : 'elastic',
    duration: option.duration ? option.duration : 3,
    delay: option.delay ? option.delay : 0,
    scale: option.scale ? option.scale : 1,
    morphSVG: {
      shape: option.pathTo,
      type: 'rotational',
    }
  });
}

/**
* Blobs
*/

const rightBlob = document.querySelector('.blob-path--right');
if(rightBlob) {
  const rightBlobPathFrom = rightBlob.getAttribute('d');
  const rightBlobPathTo = rightBlob.dataset.pathTo;

  gsap.set(rightBlob, {scale: 0});

  blobAnimation({
    pathFrom: rightBlob,
    pathTo: rightBlobPathTo,
    delay: 0.5,
    ease: 'back',
  })

  const onRightBlobMouseOutHandler = () => {
    blobAnimation({
      pathFrom: rightBlob,
      pathTo: rightBlobPathTo
    })
    rightBlob.addEventListener('mouseover', onRightBlobMouseOverHandler);
    rightBlob.removeEventListener('mouseout', onRightBlobMouseOutHandler);
  }

  const onRightBlobMouseOverHandler = () => {
    blobAnimation({
      pathFrom: rightBlob,
      pathTo: rightBlobPathFrom
    })
    rightBlob.removeEventListener('mouseover', onRightBlobMouseOverHandler);
    rightBlob.addEventListener('mouseout', onRightBlobMouseOutHandler);
  }

  rightBlob.addEventListener('mouseover', onRightBlobMouseOverHandler);
}

const leftBlob = document.querySelector('.blob-path--left');
if(leftBlob) {
  const leftBlobPathFrom = leftBlob.getAttribute('d');
  const leftBlobPathTo = leftBlob.dataset.pathTo;

  gsap.set(leftBlob, {scale: 0});

  blobAnimation({
    pathFrom: leftBlob,
    pathTo: leftBlobPathTo,
    delay: 1,

    ease: 'back',
  })

  const onLeftBlobMouseOutHandler = () => {
    blobAnimation({
      pathFrom: leftBlob,
      pathTo: leftBlobPathTo
    })
    leftBlob.addEventListener('mouseover', onLeftBlobMouseOverHandler);
    leftBlob.removeEventListener('mouseout', onLeftBlobMouseOutHandler);
  }

  const onLeftBlobMouseOverHandler = () => {
    blobAnimation({
      pathFrom: leftBlob,
      pathTo: leftBlobPathFrom
    })
    leftBlob.removeEventListener('mouseover', onLeftBlobMouseOverHandler);
    leftBlob.addEventListener('mouseout', onLeftBlobMouseOutHandler);
  }

  leftBlob.addEventListener('mouseover', onLeftBlobMouseOverHandler);
}
