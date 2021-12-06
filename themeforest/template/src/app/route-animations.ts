import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  useAnimation,
} from '@angular/animations';
import { fadeIn } from 'ng-animate';

export const fadeInAnimate = trigger('routeAnimations', [transition('* <=> *', useAnimation(fadeIn))]);
