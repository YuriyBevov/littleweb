function animationLeave(current) {
  return gsap.to(current, {
    opacity: 0,
    duration: 1
  });
}

function animationEnter(next) {
  return gsap.from(next, {
    opacity: 0,
    duration: 1
  });
}

barba.init({
  transitions: [
    {
      leave: ({current}) => animationLeave(current.container),

      enter({next}) {
        animationEnter(next.container)
      }
    }
  ]
});

barba.hooks.enter((data) => {
  smoothScroller.scrollTop(0);
  if(data.next.namespace === 'home-page') {
    !header.classList.contains('header--main') ?
    header.classList.add('header--main') : null;
  } else {
    header.classList.contains('header--main') ?
    header.classList.remove('header--main') : null;
  }
  //ScrollTrigger.refresh();
  //parallaxBackgroundFiguresInit(smoothScroller);

});

barba.hooks.after((data) => {
  updateCurrentPage();

  parallaxBackgroundFiguresInit(smoothScroller);
  //heroContentAnimationInit();
  heroShapesAnimationInit();
  stackIconsAnimationInit();

  ScrollTrigger.refresh();
  //smoothScroller.scrollTop(0);
});
