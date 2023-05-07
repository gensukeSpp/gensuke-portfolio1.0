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
export type TopImageKey = 0 | 1;

/*
type TopImageProp = {
	imageKeyNumber: TopImageKey,
	title: string
};
const TopCaptureComponent = (prop: TopImageProp) -> no-correct
*/
// therefore ↓
// https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes
export const TopCaptureComponent = (prop: {imageKeyNumber: TopImageKey, title: string}) => {

	if(prop.imageKeyNumber !== undefined){
		return (
			<div>
				<img src={captures[prop.imageKeyNumber]} alt={prop.title + "のスクリーンショット"} />
			</div>
		);
	} else {
		return (
			<div></div>
		);
	}
}