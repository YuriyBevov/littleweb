import { footer } from "../utils/nodesHelper";

export function smoothFooterInit(scroller){
  if(footer) {
    scroller.effects('.footer__container', {speed: 0.5, ease: 'linear'});
    scroller.effects(footer, {speed: 1.5, ease: 'linear'});
  }
}
