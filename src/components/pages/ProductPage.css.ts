import { style } from '@vanilla-extract/css';
// import { recipe } from '@vanilla-extract/recipes';

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
		backgroundColor: 'lightslategrey'
	}),
	description: style({
		backgroundColor: 'aquamarine'
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