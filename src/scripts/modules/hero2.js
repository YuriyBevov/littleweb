import { gsap } from 'gsap';
//import { preloader } from './preloader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// preload the images
//preloader();

/*let tl = gsap.timeline({repeat: -1, repeatDelay: 3})

let tl2 = gsap.timeline({repeat: -1, repeatDelay: 3});

gsap.set(path, {rotate: '-45deg', transformOrigin: '50% 50%'});

tl2.to(path, {
  duration: 10,
  delay: 3,
  rotate: '45deg',
  transformOrigin: '50% 50%'
})
.to(path, {
  duration: 10,
  delay: 3,
  rotate: '-45deg',
  transformOrigin: '50% 50%'
});*/

/*tl.to(path, {
  duration: 2,
  attr: { d: pathTo },
  ease: 'ease'
})
.to(path, {
  duration: 2,
  attr: { d: pathFrom },
  ease: 'ease'
});*/

/*const link = document.querySelector('.hero__bg a');

link.addEventListener('mouseover', () => {
    console.log(isActive)
    gsap.to(path, {
      duration: 1,
      delay: 0.2,
      attr: { d: pathTo },

      scale: 1.05,

      ease: 'elastic.out(1, 0.3)'
    })
})*/

/*document.addEventListener('mouseover', (evt) => {
  if( evt.target === link || evt.target === path ) {
    console.log('in', evt.target)
    gsap.to(path, {
      duration: 1,
      delay: 0.2,
      attr: { d: pathTo },
      scale: 1.05,
      ease: 'elastic'
    })
  }
});

document.addEventListener('mouseout', (evt) => {
  if(evt.target !== link && evt.target !== path) {
    console.log('out', evt.target)
    gsap.to(path, {
      duration: 1.5,
      delay: 0.2,
      scale: 1,
      attr: { d: pathFrom },
      ease: 'elastic'
    });
  }
})*/
const path = document.querySelector('.overlay path');
const pathFrom = path.getAttribute('d');
const pathTo = path.dataset.pathTo;

const underlayPath = document.querySelector('.underlay path');

const underlayPathFrom = underlayPath.getAttribute('d');
const underlayPathTo = underlayPath.dataset.pathTo;


const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-item');

gsap.set(menuList, {
  x: '100%'
})

menuItems.forEach(item => {
  gsap.set(item, {
    opacity: 0,
    y: '150px'
  })
})

const link = document.querySelector('.hero__bg a');

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

link.addEventListener('mouseover', mouseoverHandler)

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

  menuItems.forEach((item,i) => {
    gsap.to(item, {
      duration: 0.3,
      y: '150px',
      opacity: 0
    })
  })

  setTimeout(() => {
    gsap.to(menuList, {
      duration: 1,
      x: '50vw'
    })
  }, 600);
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

  gsap.to(menuList, {
    duration: 1,
    x: 0
  })

  setTimeout(() => {
    menuItems.forEach((item,i) => {
      gsap.to(item, {
        duration: 0.4,
        delay: 0.25 * (i+1),
        y: 0,
        opacity: 1
      })
    })
  }, 600);

  link.removeEventListener('click', onClickOpenMenu);
  link.addEventListener('click', onClickCloseMenu);
}

link.addEventListener('click', onClickOpenMenu);

