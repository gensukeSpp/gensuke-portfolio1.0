import { style } from '@vanilla-extract/css';
// import { recipe } from '@vanilla-extract/recipes';
import { atoms } from '../../sprinkles.css'

export const card = atoms({
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

export const prog = {
	name: style({
		fontSize: '1.2rem'
	})
}

export const mv = {
	sum: style({
		listStyleType: 'square'
	}),
	explain: style({
		listStyleType: 'disc'
	})
}
