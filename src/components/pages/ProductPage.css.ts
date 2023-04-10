import { style } from '@vanilla-extract/css';
// import { recipe } from '@vanilla-extract/recipes';
import { atoms } from '../../sprinkles.css'

export const boundary = atoms({
	paddingTop: {
		mobile: 'small',
		tablet: 'medium',
		desktop: 'large'
	}
});

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

export const action = {
	summary: style({
		display: 'inline-block',
		borderBottom: 'double'
	}),
	explain: style({
		fontSize: '0.9rem'
	})
}