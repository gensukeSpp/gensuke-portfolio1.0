import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const introduction = {
  myname: style({
    fontSize: '2rem',
  }),
  catalyst: style({
    fontSize: '0.65rem',
  }),
};

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
  flex: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }),
  // columun: style({
  // 	width: "30%"
  // }),
  title: style({
    fontSize: '1.25rem',
    textDecorationLine: 'underline',
    textDecorationThickness: '0.5rem',
    // textDecorationColor: "yellow",
    textUnderlineOffset: '-0.25rem',
    textDecorationSkipInk: 'none',
  }),
};
