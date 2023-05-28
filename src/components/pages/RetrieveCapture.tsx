import { menuLink } from './ProductPage.css';
import capture1 from '../../image/sunkit_top.png';
import capture2 from '../../image/image-share_top.png';
import { boundaryY } from '../sprinkles.boundary.css';

const captures = [capture1, capture2];

/*
export type TopImageKey = 0 | 1;
type TopImageProp = {
	imageKeyNumber: TopImageKey,
	title: string
};
const TopCaptureComponent = (prop: TopImageProp) -> no-correct
*/
// therefore ↓
// https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes
//export const TopCaptureComponent = (prop: {imageKeyNumber: TopImageKey, title: string}) => {
export const TopCaptureComponent = (prop: {pageCount: number, title: string}) => {

	if(prop.pageCount < 2){
		return (
			<div className={boundaryY}>
				<img src={captures[prop.pageCount]} alt={prop.title + "のスクリーンショット"} className={menuLink.photo} />
			</div>
		);
	} else {
		return (
			<div></div>
		);
	}
}