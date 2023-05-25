import { style } from '@vanilla-extract/css';
// import { recipe } from '@vanilla-extract/recipes';

export const menuLink = {
  wrap: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'lemonchiffon',
    // https://teratail.com/questions/193795より、
    // しっかり横幅を持つ
    position: 'fixed',
    width: '76vw',
  }),
	link: style({
		color: 'gray',
		textDecoration: 'initial',
		fontSize: '0.9rem',
    fontWeight: 'bold',
	}),
	photo: style({
		objectFit: 'cover',
		aspectRatio: '16/9',
	})
}

export const item = {
	title: style({
		fontSize: '1.35rem'
	})
}

export const language = {
	name: style({
		fontSize: '1.2rem'
	})
}

export const library = {
	name: style({
		fontWeight: 'bold',
		paddingLeft: '3%',
		"::before" : {
			content: '',
			backgroundColor: 'lightpink',
			opacity: '0.8',
			width: '1%',
			height: '8vh',
			marginRight: '3%',
			display: 'inline-block',
			verticalAlign: 'middle'
		},
	}),
	description: style({
		paddingLeft: '3%',
		"::before" : {
			content: '',
			backgroundColor: 'aquamarine',
			opacity: '0.8',
			width: '1%',
			height: '8vh',
			marginRight: '3%',
			display: 'inline-block',
			verticalAlign: 'middle'
		},
	})
}

export const action = {
	summary: style({
		display: 'inline-block',
		borderBottom: 'double'
	}),
	explain: style({
		paddingTop: '3%'
	}),
	source: style({
	})
}

export const actionChildH4 = {
	selectors: {
		[`${action.source} & > h4`]: {
			fontWeight: 'bold',
			paddingTop: '3%'
		}
	}
}
