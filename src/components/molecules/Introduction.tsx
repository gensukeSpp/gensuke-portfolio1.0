import { boundaryY, boundaryBottom } from '../sprinkles.boundary.css';
import { introduction } from '../TopPage.css';

const catalyst: string =
  '大学時代の終わり頃、古いパソコン処分しようとしましたが、レポートを作る、メールをするくらいしか使用しておらず、もったいないと思い、OSをWindowsからUNIX系OSに入れ替えました。それがきっかけでパソコンの構造など知る機会となり、メモリの増設、LANを組んだことから、さらにパソコンについての知識を深めようと思い、現在まで至ります。';

const myProfile1: string = 
  '2011年　精神障害者手帳3級：アスペルガー症候群、ADHD（2016年?）';

const myProfile2: string =
  '2015～2018年　就労継続支援A型事業所、株式会社ファンクリエイションにて、コーダーとして従事。';

const myProfile3: string =
  '当時企業、事業所様のWebページを、デザイン班からのデザインカンプをもとにHTML、CSS、Smarty(PHP)、WordPressにて制作、空き時間で、かねてから勉強中のPythonで、Google Cloud Platform上のアプリケーションを制作。';

export const ProfileComp = () => {
  return (
    <>
      <p className={`${introduction.catalyst} ${boundaryY}`}>{`${catalyst}`}</p>
      <p className={boundaryBottom}>{`${myProfile1}`}</p>
      <p className={boundaryBottom}>{`${myProfile2}`}</p>
      <p className={boundaryBottom}>{`${myProfile3}`}</p>
    </>
  );
};
