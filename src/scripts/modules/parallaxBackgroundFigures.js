export function parallaxBackgroundFiguresInit(scroller){

  let stackBackground = document.querySelector('.stack__field--bg');
  if(stackBackground) {
    scroller.effects(stackBackground, {speed: 1.2});
  }

  let serviceTypeItems = document.querySelectorAll('.services__type-item');
  if(serviceTypeItems) {
    serviceTypeItems.forEach((item,i) => {
      scroller.effects(item, {speed: `${1.025 + (0.01 * i)}`});
    });
  }

  let blobs = document.querySelectorAll('.blob');
  if(blobs) {

    blobs.forEach((item,i) => {
      scroller.effects(item, {speed: 1.2 + (i / 3.85)});
    });
  }
}
