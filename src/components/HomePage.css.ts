import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { atoms } from '../sprinkles.css'

export const boundary = atoms({
	paddingTop: {
		mobile: 'small',
		tablet: 'medium',
		desktop: 'large'
	}
});

export const introduction = {
  myname: style({
    fontSize: '2rem',
  }),
  catalyst: style({
    fontSize: '0.9rem',
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
  h4skill: style({
    fontSize: '1.5rem',
    fontWeight: 'bold'
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
    fontSize: '1.25rem',
    textDecorationLine: 'underline',
    textDecorationThickness: '0.5rem',
    // textDecorationColor: "yellow",
    textUnderlineOffset: '-0.25rem',
    textDecorationSkipInk: 'none',
  }),
};
