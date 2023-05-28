/*
let newKey: TopImageKey;
const getImageKey = (innerKeyNumber: number): TopImageKey => {
  const isImageKey = (innerKeyNumber: number): boolean => typeof innerKeyNumber === 'number';
  if(isImageKey(innerKeyNumber)){
    return innerKeyNumber;
  } else {
    throw new Error("Image displayed None.");
  }
}
*/
/*
type ProductPageType = "0" | "1" | "2";

let omitNum: string;
type OmitPageIfSearch<T extends (string | null)> = T extends typeof omitNum ? null : T;
type MenuItemArray = OmitPageIfSearch<ProductPageType>;
*/
/*
// const property_type: {[key: number]: string} = {
// 	0: capture1,
// 	1: capture2
// } as const;
type valueOf<T> = T[keyof T];
type ImagePath = valueOf<typeof property_type>;
同義↓
type ImagePath = typeof property_type[keyof typeof property_type];
*/

