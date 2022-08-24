export function updateCurrentPage() {
  const navLinks = document.querySelectorAll('.footer-nav__item a, .nav__list-item a');

  navLinks.forEach(item => {
    if(`/${item.getAttribute('href')}` === window.location.pathname) {
      item.classList.add('active-nav');

      item.style.opacity = '0.6';
      item.addEventListener('click',(evt) => {
        evt.preventDefault();
      })
    } else if(item.classList.contains('active-nav')) {
      item.classList.remove('active-nav');
      item.style.opacity = '1';
    }
  })
}
