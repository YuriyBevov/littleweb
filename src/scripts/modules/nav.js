import { bodyLocker, focusTrap } from "../utils/functions";
import { gsap } from "gsap";

const burger = document.querySelector('.nav-opener');

if(burger) {
  const navCloser = document.querySelector('.nav__closer');
  const nav = document.querySelector('.nav');
  const navWrapper = nav.querySelector('.nav__wrapper');
  const navItems = navWrapper.querySelectorAll('.nav__list-item');

  gsap.set(nav, {opacity: 0});
  gsap.set(navWrapper, {x: '100vw', opacity: 0});

  navItems.forEach(item => {
    gsap.set(item, { y: 50, opacity: 0});
  });

  function navOpeningAnimation() {
    bodyLocker(true);
    focusTrap(nav);
    nav.classList.add('opened');

    gsap.to(nav, {
      opacity: 1,
      ease: 'ease-in',
      duration: 1
    });

    gsap.to(navWrapper, {
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
    });

    burger.removeEventListener('click', onClickOpenNav);
    navCloser.addEventListener('click', onClickCloseNav);
    document.addEventListener('click', onClickByOverlayCloseNav);
    document.addEventListener('keydown', onClickByEscCloseNav);
  }

  function navClosingAnimation() {
    navItems.forEach((item, i) => {
      gsap.to(item, {
        y: 50,
        opacity: 0,
        ease: 'ease',
        delay: 0.5
      })
    });

    gsap.to(navWrapper, {
      x: '100vw',
      opacity: 0,
      ease: 'ease-in-out',
      duration: 1
    });

    gsap.to(nav, {
      opacity: 0,
      ease: 'ease-in',
      duration: 1
    });

    bodyLocker(false);
    setTimeout(() => {
      nav.classList.remove('opened');
      burger.addEventListener('click', onClickOpenNav);
      navCloser.removeEventListener('click', onClickCloseNav);
    }, 1050);
  }

  const onClickOpenNav = () =>{
    navOpeningAnimation();
  }

  const onClickCloseNav = () => {
    navClosingAnimation();
  }

  const onClickByEscCloseNav = (evt) => {
    if (evt.key === "Escape") {
      navClosingAnimation();
    }
  }

  const onClickByOverlayCloseNav = (evt) => {
    if(evt.target === nav) {
      navClosingAnimation();
    }
  }

  burger.addEventListener('click', onClickOpenNav);
}
