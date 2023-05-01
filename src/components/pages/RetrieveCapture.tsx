import capture1 from '../../image/sunkit_cap1.png';
import capture3 from '../../image/portfolio_cap3.png';

const captures = [capture1, capture3];
/*
type valueOf<T> = T[keyof T];

const property_type: {[key: number]: string} = {
	0: capture1,
	1: capture3
} as const;

// type ImagePath = valueOf<typeof property_type>;
type ImagePath = typeof property_type[keyof typeof property_type];
*/
export type TopImageKey = 0 | 1 ;
export type TopImageProp = {
	imageKeyNumber: TopImageKey,
	title: string
};

export const TopCaptureComponent: React.FC<{prop: TopImageProp}> = ({prop}) => {

	return (
		<div>
			<img src={captures[prop.imageKeyNumber]} alt={prop.title + "のスクリーンショット"} />
		</div>
	);
}