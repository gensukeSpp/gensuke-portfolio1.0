import { atoms } from '../sprinkles.css';

import { introduction, skill, recipeVar } from './HomePage.css';

const catalyst =
  '大学時代の終わり頃、古いパソコン処分しようとしましたが、レポートを作る、メールをするくらいしか使用しておらず、もったいないと思い、OSをWindowsからUNIX系OSに入れ替えました。それがきっかけでパソコンの構造など知る機会となり、メモリの増設、LANを組んだことから、さらにパソコンについての知識を深めようと思い、現在まで至ります。';

const responsive: string = atoms({
  width: {
    mobile: 'full',
    tablet: 'half',
    desktop: 'normal',
  },
});

const Introduction = () => {
  return (
    <>
      <h2 className={introduction.myname}>Manabu Aihara</h2>
      <p className={introduction.catalyst}>{`${catalyst}`}</p>
    </>
  );
};

const Skill = () => {
  return (
    <>
      <h4>Skill</h4>
      <div className={skill.flex}>
        <dl className={responsive}>
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
        <dl className={responsive}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Sass
          </dt>
          <dd>CSSを階層化・変数化させることで開発効率を上げます。</dd>
          <dd>
            就労支援トライズにて、訓練。
            <a href="https://github.com/gensukeSpp/sweets-shop">課題２</a>
            <a href="https://github.com/gensukeSpp/unepiece">課題３</a>
            <a href="https://github.com/gensukeSpp/hot-spring-kohun">課題４</a>
          </dd>
        </dl>
        <dl className={responsive}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Javascript(jQuery,Node.js)
          </dt>
          <dd>
            jQeryでサイトに動きをつけました。詳細は<a href="#"></a>作品１で
          </dd>
          <dd>Expressでサーバサイドアプリを作ることができます。</dd>
        </dl>
        <dl className={responsive}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Java
          </dt>
          <dd>オブジェクト指向プログラミングを理解したうえで、開発を行います。</dd>
        </dl>
        <dl className={responsive}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            Python
          </dt>
          <dd>
            クラウド環境Google App Engineを使った開発を行いました。詳細は<a href="#"></a>作品２で
          </dd>
          <dd>
            Github：<a href="https://github.com/gensukeSpp/gae-image-post/">ソースコード</a>
          </dd>
        </dl>
        <dl className={responsive}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'programming',
            })}`}
          >
            WordPress（PHP）
          </dt>
          <dd>オリジナルテーマを開発した経験があります。</dd>
        </dl>
        <dl className={responsive}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'dtp',
            })}`}
          >
            illustrator
          </dt>
          <dd>就労支援トライズの訓練にて、基本操作は可能です。</dd>
        </dl>
        <dl className={responsive}>
          <dt
            className={`${skill.title} ${recipeVar({
              underBarColors: 'enviorment',
            })}`}
          >
            Docker
          </dt>
          <dd>基礎的なDockerfile、docker-composeを用いた仮想環境を構築することができます。</dd>
        </dl>
        <dl className={responsive}>
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

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <Skill />
    </>
  );
};
