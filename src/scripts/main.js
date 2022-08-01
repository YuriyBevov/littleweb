
import { preloader } from "./modules/preloader.js";
import "./modules/custom_cursor.js";
import "./modules/heroContentAnimation.js";
import "./modules/heroShapesAnimation.js";
import "./modules/preloader.js";
import "./modules/scrollSmoother.js";
import "./modules/stackIconsAnimation.js";

import {setVieportHeight} from "./utils/functions.js";

document.querySelector('.nojs').classList.remove('nojs');
preloader();

/*
для Барбы !
import { animateHeroContent } from "./modules/heroContentAnimation.js";

animateHeroContent();

*/

setVieportHeight();
