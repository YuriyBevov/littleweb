import { gsap } from 'gsap';
//import { preloader } from './preloader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const path = document.querySelector('.overlay path');
const pathFrom = path.getAttribute('d');
const pathTo = path.dataset.pathTo;

const underlayPath = document.querySelector('.underlay path');

const underlayPathFrom = underlayPath.getAttribute('d');
const underlayPathTo = underlayPath.dataset.pathTo;

const link = document.querySelector('.hero__menu a');

const mouseoverHandler = () => {
  gsap.to(path, {
    duration: 1.5,
    delay: 0.2,
    attr: { d: pathTo },
    scale: 1.05,
    rotate: '0',
    transformOrigin: '50% 50%',
    ease: 'elastic'
  })

  gsap.to(underlayPath, {
    duration: 1.5,
    delay: 0.4,
    rotate: '0',
    attr: { d: underlayPathTo },
    transformOrigin: '50% 50%',
    scale: 1.25,
    ease: 'elastic'
  });
}

link.addEventListener('mouseover', mouseoverHandler);

const mouseoutHandler = () => {
  gsap.to(path, {
    duration: 1.5,
    delay: 0.2,
    scale: 1,
    rotate: '0',
    attr: { d: pathFrom },
    transformOrigin: '50% 50%',
    ease: 'elastic'
  });

  gsap.to(underlayPath, {
    duration: 1.5,
    delay: 0.2,
    scale: 1,
    rotate: '0',
    attr: { d: underlayPathFrom },
    transformOrigin: '50% 50%',
    ease: 'elastic'
  });
}

link.addEventListener('mouseout', mouseoutHandler);

const onClickCloseMenu = (evt) => {
  evt.preventDefault();
  link.removeEventListener('click', onClickCloseMenu);
  link.addEventListener('click', onClickOpenMenu);
  link.addEventListener('mouseout', mouseoutHandler);
  link.addEventListener('mouseover', mouseoverHandler);

  gsap.to(path, {
    duration: .5,
    scale: 1,
    rotate: '0',
    transformOrigin: '50% 50%',
    ease: 'back'
  })
}

const onClickOpenMenu = (evt) => {
  evt.preventDefault();

  link.removeEventListener('mouseout', mouseoutHandler);
  link.removeEventListener('mouseover', mouseoverHandler);

  gsap.to(path, {
    duration: 1.5,
    delay: 0.2,
    scale: 8,
    rotate: '180deg',
    transformOrigin: '50% 50%',
    ease: 'back'
  });

  link.removeEventListener('click', onClickOpenMenu);
  link.addEventListener('click', onClickCloseMenu);
}

link.addEventListener('click', onClickOpenMenu);

