import { bodyLocker, focusTrap } from "../utils/functions";
import { gsap } from "gsap";
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

gsap.registerPlugin( MorphSVGPlugin );

const burger = document.querySelector('.nav-opener');

if(burger) {
  const nav = document.querySelector('.nav');
  const navBlobs = nav.querySelectorAll('.nav-blob');
  const navItems = nav.querySelectorAll('.nav__list-item');

  navItems.forEach(item => {
    gsap.set(item, { y: 50, opacity: 0});
  });
  gsap.set(nav, {opacity: 0});

  navBlobs.forEach(blob => {
    gsap.set(blob, {scale: -2});
  })

  function navOpeningAnimation() {
    if(!nav.classList.contains('opened')) {
      nav.classList.add('opened');
      bodyLocker(true);

      gsap.to(nav, {
        opacity: 1,
        ease: 'ease-in',
        duration: 1
      });

      navBlobs.forEach(blob => {

        gsap.to(blob, {
          scale: 1.4,
          ease: 'elastic',
          duration: 1.5,
          transformOrigin: 'center',
        });

        gsap.to(blob, {
          rotate: '360deg',
          ease: 'linear',
          duration: 60,
          repeat: -1,
        });

        let path = blob.querySelector('path');
        let blobPathTo = path.dataset.pathTo;

        gsap.to(path, {
          ease: 'linear',
          duration: 12,
          yoyo: true,
          repeat: -1,
          morphSVG: {
            shape: blobPathTo,
            type: 'rotational',
          }
        });

        navItems.forEach((item, i) => {
          gsap.to(item, {
            y: 0,
            opacity: 1,
            ease: 'ease',
            delay: 0.15 * (i + 0.25)
          })
        });
      })
    } else {

      navItems.forEach((item, i) => {
        gsap.to (item, {
          opacity: 0,
          duration: 0.3,
        })

        gsap.set(item, {
          y: 50,
          opacity: 0,
          ease: 'ease',
          delay: 0.3
        })
      });

      gsap.to(nav, {
        opacity: 0,
        ease: 'ease-in',
        duration: 0.5,
      });

      setTimeout(() => {
        nav.classList.remove('opened');
        bodyLocker(false);
      }, 500);
    }


    /*gsap.to(option.pathFrom, {
      ease: option.ease ? option.ease : 'elastic',
      duration: option.duration ? option.duration : 3,
      delay: option.delay ? option.delay : 0,
      scale: option.scale ? option.scale : 1,
      morphSVG: {
        shape: option.pathTo,
        type: 'rotational',
      }
    });*/

    /*gsap.to(navBlobPath, {
      ease: 'linear',
      duration: 7,
      yoyo: true,
      repeat: -1,
      morphSVG: {
        shape: blob1PathTo,
        type: 'rotational',
      }
    });*/

    /*gsap.to(navWrapper, {
      x: 0,
      opacity: 1,
      ease: 'ease-in-out',
      duration: 1
    });

    navItems.forEach((item, i) => {
      gsap.to(item, {
        y: 0,
        opacity: 1,
        ease: 'ease',
        delay: 0.15 * (i + 0.25)
      })
    });*/

    /*burger.removeEventListener('click', onClickOpenNav);
    navCloser.addEventListener('click', onClickCloseNav);
    document.addEventListener('click', onClickByOverlayCloseNav);
    document.addEventListener('keydown', onClickByEscCloseNav);*/
  }

  const onClickOpenNav = () => {
    console.log('opener');

    navOpeningAnimation();
  }

  burger.addEventListener('click', onClickOpenNav);
}
