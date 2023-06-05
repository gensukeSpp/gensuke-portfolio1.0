import { Link } from 'rocon/react';
import { Element, Link as ScrollLink } from 'react-scroll'

import { productPageBuilder } from './Routes';
import { atoms } from '../sprinkles.css';
import { boundaryY, boundaryTop, boundaryBottom } from './sprinkles.boundary.css';
import { introduction, skill, recipeVar, menuItem, footer } from './TopPage.css';

import topImage from '../image/portfolio_top.jpg';

const responsive: string = atoms({
  width: {
    mobile: 'full',
    tablet: 'half',
    desktop: 'normal',
  },
});

const HeaderMenu = () => {
  return (
    // <ul className={styles.links}>
    //   <li>
    //     <Link route={topLevelRoutes._.parallax}>Parallax Test</Link>
    //   </li>
    //   <li>
    //     <Link route={topLevelRoutes._['framer-motion']}>Framer Motion</Link>
    //   </li>
    //   <li>
    //     <Link route={topLevelRoutes._.linaria}>Linaria</Link>
    //   </li>
    // </ul>
    <div className={menuItem.wrap}>
      <ScrollLink to="intro" smooth={true} duration={500} className={menuItem.link}>
        プロフィール
      </ScrollLink>
      <ScrollLink to="skill" smooth={true} duration={500} className={menuItem.link}>
        Skill
      </ScrollLink>
      <details style={{cursor: "pointer"}}>
        <summary style={{listStyleType: "none"}}>作品紹介</summary>
        <ul>
          <li>
            <Link route={productPageBuilder.route} match={{"page": "0"}} className={menuItem.link}>作品１</Link>
          </li>
          <li>
            <Link route={productPageBuilder.route} match={{"page": "1"}} className={menuItem.link}>作品２</Link>
          </li>
          <li>
            <Link route={productPageBuilder.route} match={{"page": "2"}} className={menuItem.link}>作品３</Link>
          </li>
        </ul>
      </details>
    </div>
  )
}

const TopImageComp = () => {
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

const catalyst: string =
  '大学時代の終わり頃、古いパソコン処分しようとしましたが、レポートを作る、メールをするくらいしか使用しておらず、もったいないと思い、OSをWindowsからUNIX系OSに入れ替えました。それがきっかけでパソコンの構造など知る機会となり、メモリの増設、LANを組んだことから、さらにパソコンについての知識を深めようと思い、現在まで至ります。';

const myProfile1: string = 
  '2011年　精神障害者手帳3級：アスペルガー症候群、ADHD（2016年?）';

const myProfile2: string =
  '2015～2018年　就労継続支援A型事業所、株式会社ファンクリエイションにて、コーダーとして従事。';

const myProfile3: string =
  '当時企業、事業所様のWebページを、デザイン班からのデザインカンプをもとにHTML、CSS、Smarty(PHP)、WordPressにて制作、空き時間で、かねてから勉強中のPythonで、Google Cloud Platform上のアプリケーションを制作。';

const Introduction = () => {
  return (
    <>
      <p className={`${introduction.catalyst} ${boundaryY}`}>{`${catalyst}`}</p>
      <p className={boundaryBottom}>{`${myProfile1}`}</p>
      <p className={boundaryBottom}>{`${myProfile2}`}</p>
      <p className={boundaryBottom}>{`${myProfile3}`}</p>
    </>
  );
};

const Skill = () => {
  return (
    <>
      <h4 className={`${skill.h4skill} ${boundaryTop}`}>Skill</h4>
      <div className={`${skill.wrap} ${boundaryY}`}>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            HTML・CSS
          </dt>
          <dd>レスポンシブ対応も可能です。</dd>
          <dd>
            就労支援トライズにて、訓練。
            <a href="https://github.com/gensukeSpp/non-easy-responsive">課題１</a>
          </dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Sass
          </dt>
          <dd>CSSを階層化・変数や制御構文を用いることで開発効率を上げます。</dd>
          <dd>
            就労支援トライズにて、訓練。
            <a href="https://github.com/gensukeSpp/sweets-shop">課題２</a>
            <a href="https://github.com/gensukeSpp/unepiece">課題３</a>
            <a href="https://github.com/gensukeSpp/hot-spring-kohun">課題４</a>
          </dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            javascript(jQuery,Node.js)
          </dt>
          <dd>
            jQueryでサイトに動きをつけました。詳細は<Link route={productPageBuilder.route} match={{"page": "0"}}>作品１</Link>で
          </dd>
          <dd>Expressでサーバサイドアプリを作ることができます。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Java
          </dt>
          <dd>オブジェクト指向プログラミングを理解したうえで、開発を行うことができます。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Python
          </dt>
          <dd>
            クラウド環境Google App Engineを使った開発を行いました。詳細は<Link route={productPageBuilder.route} match={{"page": "1"}}>作品２</Link>で
          </dd>
          <dd>
            Github：<a href="https://github.com/gensukeSpp/gae-image-post">ソースコード</a>
          </dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            WordPress（PHP）
          </dt>
          <dd>オリジナルテーマを開発した経験があります。</dd>
          <dd>Zenn.devに<a href="https://zenn.dev/gensuke_spp/articles/2f6aad01c07240">記事</a>を書きました。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'dtp',
            })}`}
          >
            illustrator
          </dt>
          <dd>就労支援トライズにて訓練、基本操作は可能です。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'enviorment',
            })}`}
          >
            Docker
          </dt>
          <dd>基礎的なDockerfile、docker-composeを用いた仮想環境を構築することができます。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${boundaryBottom} ${recipeVar({
              underBarColors: 'study',
            })}`}
          >
            鋭意勉強中…
          </dt>
          <dd>フロントエンド(React)、機械学習(高校数学から復習)、TDD(テスト駆動開発)、なるべくお金のかからないクラウド環境</dd>
        </dl>
      </div>
    </>
  );
};

const Footer = () => {

  return (
    <>
      <h4 className={footer.h4contact}>CONTACT</h4>
      相原　学　　<a href="mailto:win_mint.7v903@outlook.jp">こちらへ</a>
      <div className={footer.wrap}>
        <p className={footer.copyright}>copyright © 2023 All Right Reserved.</p>
      </div>
    </>
  )
}

export const TopPage = () => {
  return (
    <>
      <HeaderMenu />
      <TopImageComp />
      <Element name="intro">
        <Introduction />
      </Element>
      <Element name="skill">
        <Skill />
      </Element>
      <Footer />
    </>
  );
};
