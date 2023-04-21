import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const menuItem = {
  wrap: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    // https://teratail.com/questions/193795より、
    // しっかり横幅を持つ
    position: 'fixed',
    width: '76vw',
  }), 
  anchor: style({
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textAlign: 'center',  
  })
}

export const introduction = {
  topPhoto: style({
    objectFit: 'cover',
    aspectRatio: '16/9',
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
