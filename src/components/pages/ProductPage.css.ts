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
		backgroundColor: 'lightpink',
		borderRadius: '10%',
		opacity: '0.8',
		width: '60%',
		paddingLeft: '3%',
		lineHeight: '2.5'
	}),
	description: style({
		backgroundColor: 'aquamarine',
		borderRadius: '10%',
		opacity: '0.8',
		width: '60%',
		paddingLeft: '3%',
		lineHeight: '2.5',
		marginLeft: '3%'
	})
}

export const action = {
	summary: style({
		display: 'inline-block',
		borderBottom: 'double'
	}),
	explain: style({
		fontSize: '0.9rem'
	}),
	source: style({
		fontSize: '0.9rem'
	})
}