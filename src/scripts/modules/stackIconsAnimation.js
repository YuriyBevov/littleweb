import {gsap} from 'gsap';

export function stackIconsAnimationInit() {
  const icons = document.querySelectorAll('.text-svg');

  if(icons) {
    icons.forEach(icon => {
      gsap.set(icon, { autoAlpha: 1 });
      let textPath = icon.querySelector('.circle');
      let ic = icon.querySelector('.icon');

      icon.addEventListener('mouseenter', () => {
        gsap.to(textPath, {
          duration: 2,
          delay: 0.2,
          ease: 'back',
          rotate: '360deg',
          transformOrigin: "center center",
        });
        gsap.to(ic, {
          duration: 2,
          delay: 0.2,
          ease: 'back',
          rotate: '-360deg',
          transformOrigin: "center center",
        });
      });

      icon.addEventListener('mouseleave', () => {
        gsap.to(textPath, {
          duration: 3,
          delay: 0.2,
          ease: 'elastic',
          rotate: '0',
          transformOrigin: "center center",
        });
        gsap.to(ic, {
          duration: 2,
          delay: 0.2,
          ease: 'back',
          rotate: '0',
          transformOrigin: "center center",
        });
      });
    });
  };
};

stackIconsAnimationInit();
