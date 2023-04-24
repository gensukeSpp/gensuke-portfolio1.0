// / <reference types="vite/client" />
declare module "*.jpg"
// declare module "*.png"
declare module '*.png' {
	const image: string;
	export default image;
}