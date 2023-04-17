import { Link } from 'rocon/react';
import { Element, Link as ScrollLink } from 'react-scroll'

import { productPageBuilder } from './Routes';
import { atoms } from '../sprinkles.css';
import { boundaryY, boundaryTop } from './sprinkles.boundary.css';
import { introduction, skill, recipeVar, headMenu } from './TopPage.css';

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
    <div className={headMenu}>
      <ScrollLink to="intro" smooth={true} duration={500}>
        きっかけ
      </ScrollLink>
      <ScrollLink to="skill" smooth={true} duration={500}>
        Skill
      </ScrollLink>
      <ul>
        <li>
          <Link route={productPageBuilder.route} match={{"page": "0"}}>作品１</Link>
        </li>
        <li>
          <Link route={productPageBuilder.route} match={{"page": "1"}}>作品２</Link>
        </li>
        <li>
          <Link route={productPageBuilder.route} match={{"page": "2"}}>作品３</Link>
        </li>
      </ul>
    </div>
  )
}

const catalyst: string =
  '大学時代の終わり頃、古いパソコン処分しようとしましたが、レポートを作る、メールをするくらいしか使用しておらず、もったいないと思い、OSをWindowsからUNIX系OSに入れ替えました。それがきっかけでパソコンの構造など知る機会となり、メモリの増設、LANを組んだことから、さらにパソコンについての知識を深めようと思い、現在まで至ります。';

export const Introduction = () => {
  return (
    <>
      {/* <h2 className={introduction.myname}>Manabu Aihara</h2> */}
      <img alt="トップイメージ画像" className={introduction.topPhoto} />
      <p className={`${introduction.catalyst} ${boundaryY}`}>{`${catalyst}`}</p>
    </>
  );
};

export const Skill = () => {
  return (
    <>
      <h4 className={`${skill.h4skill} ${boundaryY}`}>Skill</h4>
      <div className={`${skill.flex} ${boundaryTop}`}>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${recipeVar({
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
            className={`${skill.title} ${recipeVar({
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
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Javascript(jQuery,Node.js)
          </dt>
          <dd>
            jQueryでサイトに動きをつけました。詳細は<Link route={productPageBuilder.route} match={{"page": "0"}}>作品１</Link>で
          </dd>
          <dd>Expressでサーバサイドアプリを作ることができます。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Java
          </dt>
          <dd>オブジェクト指向プログラミングを理解したうえで、開発を行うことができます。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Python
          </dt>
          <dd>
            クラウド環境Google App Engineを使った開発を行いました。詳細は<Link route={productPageBuilder.route} match={{"page": "1"}}>作品２</Link>で
          </dd>
          <dd>
            Github：<a href="#">ソースコード</a>
          </dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            WordPress（PHP）
          </dt>
          <dd>オリジナルテーマを開発した経験があります。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'dtp',
            })}`}
          >
            illustrator
          </dt>
          <dd>就労支援トライズにて訓練、基本操作は可能です。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'enviorment',
            })}`}
          >
            Docker
          </dt>
          <dd>基礎的なDockerfile、docker-composeを用いた仮想環境を構築することができます。</dd>
        </dl>
        <dl className={`${boundaryTop} ${responsive}`}>
          <dt
            className={`${skill.title} ${recipeVar({
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

export const TopPage = () => {
  return (
    <>
      <HeaderMenu />
      <Element name="intro">
        <Introduction />
      </Element>
      <Element name="skill">
        <Skill />
      </Element>
    </>
  );
};
