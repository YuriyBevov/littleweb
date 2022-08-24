export function updatePageUrl() {
  const navLinks = document.querySelectorAll('.footer-nav__item a, .nav__list-item a');
  console.log('update page test')
  navLinks.forEach(item => {
    if(window.location.pathname.includes(item.getAttribute('href'))) {
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
