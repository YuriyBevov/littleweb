import {gsap} from "gsap";
import { header } from "../utils/nodesHelper";

export function heroContentAnimationInit() {
  const content = document.querySelector('.hero__content');

  if(content) {
    const logo = content.querySelector('.hero__logo');
    const titleTexts = content.querySelectorAll('.hero__title span > span');
    const desc = content.querySelector('.hero__desc');
    const button = content.querySelector('.hero__btn');
    const buttonText = button.querySelector('span');

    let tl = gsap.timeline();

    titleTexts.forEach(text => {
      gsap.set(text, { y: '120%' });
    });
    gsap.set(desc,{ opacity: 0 });
    gsap.set(header, { opacity: 0, zIndex: -1 });
    gsap.set(button, { width: '20px', y: '100vh' });
    gsap.set(logo, { opacity: 0, y: '50px' });
    gsap.set(buttonText, { opacity: 0 });

    for(const [index, title] of titleTexts.entries()) {
      gsap.to(title, {
        duration: 0.7,
        delay: 0.25 * (index+1),
        y: 0,
        ease: 'power1'
      });
    };

    gsap.to(logo, {
      duration: 1.5,
      delay: 0.2,
      y: 0,
      opacity: 1,
      ease: 'back'
    });

    gsap.to(button, {
      duration: 1.5,
      y: 0,
      ease: 'linear'
    });

    tl.to(desc, {
      duration: .8,
      delay: .7,
      opacity: 1,
      ease: 'ease-in'
    })
    .to(button, {
      duration: 0.7,
      width: '240px',
      ease: 'elastic'
    })
    .to(buttonText, {
      duration: .9,
      opacity: 1,
      ease: 'ease-in'
    });

    gsap.to(header,{
      duration: 1.3,
      delay: 2.5,
      opacity: 1,
      zIndex: 99,
      ease: 'ease-in'
    });
  };
};

heroContentAnimationInit();
