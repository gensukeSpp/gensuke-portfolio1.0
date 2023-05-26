import { menuLink } from './ProductPage.css';
import capture1 from '../../image/sunkit_top.png';
import capture2 from '../../image/image-share_top.png';
import { boundaryY } from '../sprinkles.boundary.css';

const captures = [capture1, capture2];
// const property_type: {[key: number]: string} = {
// 	0: capture1,
// 	1: capture2
// } as const;
/*
type valueOf<T> = T[keyof T];
type ImagePath = valueOf<typeof property_type>;
同義↓
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

	if(typeof prop.imageKeyNumber){
		console.log("0か1: " + typeof prop.imageKeyNumber);
		return (
			<div className={boundaryY}>
				<img src={captures[prop.imageKeyNumber]} alt={prop.title + "のスクリーンショット"} className={menuLink.photo} />
			</div>
		);
	} else {
		return (
			<div></div>
		);
	}
}