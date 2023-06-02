import { boundaryY } from '../sprinkles.boundary.css';
import { introduction } from '../TopPage.css';

import topImage from '../image/portfolio_top.jpg';

export const TopImageComp = () => {
  return (
    <>
      <div className={boundaryY}>
        {/* <h2 className={introduction.space}>何かいれたい</h2> */}
        <img src={topImage} alt="トップ画像" className={introduction.photo} />
      </div>
      <h2>※随時改良中</h2>
    </>
  );
}
