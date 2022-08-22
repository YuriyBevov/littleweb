import { body } from "../utils/nodesHelper.js";
import { smoothScroller } from "../modules/scrollSmoother.js";

smoothScroller.paused(true);

document.addEventListener('DOMContentLoaded', () => {
  let content = document.querySelectorAll('svg, img, video, audio');
  let i;

  content.forEach(item => {
    if(i === content.length - 1) {
      item.onload = function() {
        i++;
      };
    } else {
      body.classList.remove('loading');
      smoothScroller.paused(false);
    }
  });

})
