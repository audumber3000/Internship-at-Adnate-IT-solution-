import { EasingLogic, PageScrollConfig } from 'ngx-page-scroll-core';

export function myEasing(t, b, c, d) {
  // easeInOutExpo easing
  if (t === 0) {
    return b;
  }
  if (t === d) {
    return b + c;
  }
  if ((t /= d / 2) < 1) {
    return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
  }

  return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
}

export const scrollConfig: PageScrollConfig = { duration: 2000, scrollOffset: 50, easingLogic: myEasing };
