import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { bgImgVar } from '../img.css'

export const headMenu = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  flexDirection: 'row',
  backgroundColor: 'lightgreen',
});

export const menuItem = {
  anchor: style({
    fontSize: '0.9rem',
    color: 'initial',
    textDecoration: 'initial',
    textAlign: 'center',  
  })
}

export const introduction = {
  myname: style({
    fontSize: '1.5rem',
  }),
  catalyst: style({
    fontSize: '0.9rem',
  }),
  topPhoto: style({
    backgroundColor: bgImgVar,
    objectFit: 'contain',
    width: '100%',
    textAlign: 'right',
  })
};
// export const topImg = style({
//   backgroundImage: bgImgVar
// })

// const themeVars = createGlobalTheme("", {
// 	colors: {
// 		programming: "yellow",
// 		tryze: "skyblue",
// 		enviorment: "limegreen",
// 		study: "gray"
// 	}
// });

export const recipeVar = recipe({
  base: {},
  variants: {
    underBarColors: {
      programming: {
        textDecorationColor: 'yellow',
      },
      dtp: {
        textDecorationColor: 'skyblue',
      },
      enviorment: {
        textDecorationColor: 'limegreen',
      },
      study: {
        textDecorationColor: 'gray',
      },
    },
  },
});
export const skill = {
  h4skill: style({
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center'
  }),
  flex: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }),
  // columun: style({
  // 	width: "30%"
  // }),
  title: style({
    fontSize: '1.5rem',
    textDecorationLine: 'underline',
    textDecorationThickness: '0.5rem',
    // textDecorationColor: "yellow",
    textUnderlineOffset: '-0.25rem',
    textDecorationSkipInk: 'none',
    textAlign: 'center'
  }),
};
