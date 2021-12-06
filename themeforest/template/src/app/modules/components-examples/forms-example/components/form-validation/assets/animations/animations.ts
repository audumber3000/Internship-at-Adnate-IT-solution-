import { bounceInDown, bounceOutUp } from 'ng-animate';

export const customBounceDown = {
  animation: bounceInDown,
  options: {
    params: { timing: 0.5, a: '-3000px', b: '15px', c: '-10px', d: '5px' },
  },
};

export const customBounceUp = {
  animation: bounceOutUp,
  options: {
    params: { timing: 0.5, a: '-5px', b: '5px', c: '5px', d: '-2000px' },
  },
};
