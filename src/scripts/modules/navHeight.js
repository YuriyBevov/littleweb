import { header, nav } from "../utils/nodesHelper";
import { getBoundingClientRect } from "../utils/functions";

function setNavHeight(headerHeight) {
  nav.style.height = `calc(100vh - ${headerHeight}px)`;
  nav.style.top = `${headerHeight}px`;
}

let headerHeight = getBoundingClientRect(header, 'height');
setNavHeight(headerHeight);

window.addEventListener('resize', () => {
  let currentHeaderHeight = getBoundingClientRect(header, 'height');
  if(headerHeight !== currentHeaderHeight) {
    headerHeight = currentHeaderHeight;
    setNavHeight(currentHeaderHeight);
  }
})
