import { Link } from 'rocon/react';

import { productPageBuilder } from '../../Routes';

import { atoms } from '../../../sprinkles.css';
import { boundaryY, boundaryTop, boundaryBottom } from '../../sprinkles.boundary.css';
import { skill, recipeVar } from '../../TopPage.css';

const responsive: string = atoms({
  width: {
    mobile: 'full',
    tablet: 'half',
    desktop: 'normal',
  },
});

export const SkillComp = () => {
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
            jQueryでサイトに動きをつけました。詳細は
            <Link route={productPageBuilder.route} match={{ page: '0' }}>
              作品１
            </Link>
            で
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
            クラウド環境Google App Engineを使った開発を行いました。詳細は
            <Link route={productPageBuilder.route} match={{ page: '1' }}>
              作品２
            </Link>
            で
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
          <dd>
            Zenn.devに<a href="https://zenn.dev/gensuke_spp/articles/2f6aad01c07240">記事</a>を書きました。
          </dd>
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
          <dd>
            フロントエンド(React)、機械学習(高校数学から復習)、TDD(テスト駆動開発)、なるべくお金のかからないクラウド環境
          </dd>
        </dl>
      </div>
    </>
  );
};
