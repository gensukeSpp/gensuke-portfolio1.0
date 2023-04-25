import capture1 from '../../image/sunkit_cap1.png';
import capture3 from '../../image/portfolio_cap3.png';

const captures = [capture1, capture3];
/**
type valueOf<T> = T[keyof T];

const property_type: {[key: number]: string} = {
	0: capture1,
	1: capture3
} as const;

type ImagePath = valueOf<typeof property_type>;
// = type ImagePath = typeof property_type[keyof typeof property_type];
 */
export type NewKey = 0 | 1;

// type U<T> = T extends number ? T : number;
type Prop = {
	keyNumber: NewKey,
	title: string
};

export const TopCaptureComponent = (prop: Prop) => {

	return (
		<div>
			<img src={captures[prop.keyNumber]} alt={prop.title + "のスクリーンショット"} />
		</div>
	);
	
}