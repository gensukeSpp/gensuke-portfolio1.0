import {style, createVar} from '@vanilla-extract/css'

export const bgImgVar = createVar();

export const top = style({
  vars: {
    [bgImgVar]: 'blue'
  }
});