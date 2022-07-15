import {gsap} from 'gsap'
let c = document.querySelector('#canvas');

let ctx = c.getContext("2d"),
    cw = 0,
    ch = 0,
    hue = 180,
    img = new Image(),
    img2 = new Image(),
    nCubes = 0,
    cubes = [];

const Cube = function(index, _x, _y, _s){ //console.log(_x,_y)
    this.img = img;
    this.img2 = img2;
    this.scale = _s;
    this.x = _x;
    this.y = _y;
    this.z = this.img2_opacity = 0;
    this.draw = function(){
        ctx.translate(this.x, this.y + this.z);
        ctx.drawImage(this.img, -10 / 2 * this.scale, -20 / 2 * this.scale, 5, 5);
        ctx.globalAlpha = 0.2;
        ctx.drawImage(this.img2, -10 / 2 * this.scale, -20 / 2 * this.scale, 5, 5);
        ctx.globalAlpha = 0.2;
        ctx.translate(-this.x, -(this.y + this.z));
    }
    this.draw();
};

img.src='../../assets/img/circle.png';

img2.src='../../assets/img/circle.png';
img.onload = window.onresize = setGrid;

function setGrid(){ //console.log('set grid')

  c.width = window.innerWidth;
  c.height = window.innerHeight;
  cw = Math.ceil(c.width/100+1);
  ch = Math.floor(c.height/25+10);

  cubes = [];

  let _y = 0;

  for (var i=_y=0; _y<ch; _y++) {
    for (var _x=0; _x<cw; _x++) { //console.log(_y%2==0)
      if (_y%2==0) cubes.push( new Cube(i, 25+_x*100, -75+_y*25, 0.9) );
      else cubes.push( new Cube(i, 75+_x*100, -75+_y*25, 0.9) );
      i++;
    }
  }

  nCubes = cubes.length; //console.log(nCubes)
}

var staggerAnim;
function anim() {
  staggerAnim = gsap.timeline()
                    .add(staggerFrom(gsap.utils.random(0,nCubes,1)))
};

function staggerFrom(from) {
  return gsap.timeline()
    .to(cubes, {
      duration: 1,
      z: 75,
      ease: 'back.in(3)',
      stagger: {
        yoyo: true,
        amount: 2.5,
        grid: [ch, cw],
        overwrite: 'auto',
        from: from,
        onComplete: function() { // Like reverse: 1 but make sure to reach a z of 0
          gsap.to(this.targets(), {
            duration: 1,
            z: 0,
            ease: 'back.out(3)'
          });
        }
      }
    }, 0)
    .to(cubes, {
      duration: 0.6,
      img2_opacity:1,
      stagger: {
        yoyo: true,
        amount: 2.5,
        grid: [ch, cw],
        overwrite: 'auto',
        from: from,
        onComplete: function() {
          gsap.to(this.targets(), {
            duration: 0.6,
            img2_opacity: 0
          });
        }
      }
    }, 0)
}
gsap.delayedCall(0.2, anim);

document.querySelector('#canvas').addEventListener('click', function(e) {
  staggerAnim.eventCallback('onComplete', null);

  // An approximation that works okay
  var gridX = Math.floor((e.layerX - (e.layerX / c.width * 2 - 1) * 20 - e.layerX / c.width * 75) / c.width * cw);
  var gridY = Math.floor((e.layerY - (e.layerY / c.height * 2 - 1) * 75 + 40) / c.height * ch);
  var i = cw * gridY + gridX;

  staggerFrom(i); //console.log(gridX, gridY, i);
});

gsap.ticker.add(()=>{ //update on each tick

  ctx.clearRect(0,0,c.width,c.height);

  ctx.globalCompositeOperation='source-over';
  for (var i=0; i<nCubes; i++) cubes[i].draw();

  hue-=0.5;
  ctx.globalCompositeOperation='lighter';
  ctx.fillStyle = '#EDF0F5';
  ctx.fillRect(0, 0, c.width, c.height);
});
