import { gsap } from "gsap";
import { burger } from "../utils/nodesHelper";

const burgerLineTop = burger.querySelector('.burger-line--top');
const burgerLineMiddle = burger.querySelector('.burger-line--middle');
const burgerLineBottom = burger.querySelector('.burger-line--bottom');
const burgerLinesTimeline = gsap.timeline().pause();

burgerLinesTimeline.to(burgerLineTop, {
  y: 8,
  duration: 0.3,
  delay: 0.05,
  ease: 'ease-in'
})
.to(burgerLineMiddle, {
  opacity: 0,
  duration: 0.3,
  delay: 0.05,
  ease: 'ease-in'
}, "-=0.35")
.to(burgerLineBottom, {
  y: -8,
  duration: 0.3,
  delay: 0.05,
  ease: 'ease-in',
}, "-=0.35")
.to(burgerLineTop, {
  rotate: '45deg',
  duration: 0.3,
  delay: 0.05,
  ease: 'ease-in'
})
.to(burgerLineBottom, {
  rotate: '-45deg',
  duration: 0.3,
  delay: 0.05,
  ease: 'ease-in',
}, "-=0.35")

export function burgerLinesAnimationIn() {
  burgerLinesTimeline.play()
}

export function burgerLinesAnimationOut() {
  burgerLinesTimeline.reverse();
}
