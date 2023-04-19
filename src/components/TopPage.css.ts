import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const menuItem = {
  wrap: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
  }), 
  anchor: style({
    fontSize: '0.9rem',
    textAlign: 'center',  
  })
}

export const introduction = {
  wrap: style({
    display: 'flex',
    flexWrap: 'wrap',
  }),
  space: style({
    flex: '0 0 20%',
  }),
  topPhoto: style({
    flex: '0 0 80%',
    objectFit: 'contain',
    width: '100%',
    textAlign: 'right',
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
        textDecorationColor: 'lightgray',
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
  wrap: style({
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
  link: style({
    color: 'blue',
    textDecoration: 'underline'
  })
};
