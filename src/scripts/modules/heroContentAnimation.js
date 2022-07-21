import {gsap} from "gsap";

const content = document.querySelector('.hero__content');

export function animateHeroContent() {
  if(content) {
    const logo = content.querySelector('.hero__logo');
    const titleTexts = content.querySelectorAll('.hero__title span > span');
    const desc = content.querySelector('.hero__desc');
    const button = content.querySelector('.hero__btn');
    const buttonText = button.querySelector('span');
    const header = document.querySelector('.main-header');

    let tl = gsap.timeline();

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
      ease: 'ease-in'
    });
  };
};

animateHeroContent();
