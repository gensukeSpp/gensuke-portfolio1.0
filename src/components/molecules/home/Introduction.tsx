import { boundaryY, boundaryBottom } from '../../sprinkles.boundary.css';
import { introduction } from '../../TopPage.css';

const catalyst =
  '大学時代の終わり頃、古いパソコン処分しようとしましたが、レポートを作る、メールをするくらいしか使用しておらず、もったいないと思い、OSをWindowsからUNIX系OSに入れ替えました。それがきっかけでパソコンの構造など知る機会となり、メモリの増設、LANを組んだことから、さらにパソコンについての知識を深めようと思い、現在まで至ります。';

const myProfile1 = '2011年　精神障害者手帳3級：アスペルガー症候群、ADHD（2016年?）';

const myProfile2 = '2015～2018年　就労継続支援A型事業所、株式会社ファンクリエイションにて、コーダーとして従事。';

const myProfile3 =
  '当時、企業や事業所様のWebページを、デザイン班との協力のもとHTML、CSS、PHP(Smarty)、WordPressにて制作、空き時間で、かねてから勉強中のPythonで、Google Cloud Platform上のアプリケーションを制作しました。';

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
