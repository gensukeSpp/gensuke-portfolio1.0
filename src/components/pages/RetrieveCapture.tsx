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
export type KeyType = 1 | 0;

type Prop = {keyNumber: number, title: string};

export const TopCaptureComponent = () => {

	return (
		<div>
			<img src={captures[keyNumber]} alt={title + "のスクリーンショット"} />
		</div>
	);
	
}