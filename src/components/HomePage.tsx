const catalyst = "大学時代の終わり頃、\
	古いパソコン処分しようとしましたが、\
	レポートを作る、メールをするくらいしか使用しておらず、\
	もったいないと思い、OSをWindowsからUNIX系OSに入れ替えました。\
	それがきっかけでパソコンの構造など知る機会となり、\
	メモリの増設、LANを組んだことから、\
	さらにパソコンについての知識を深めようと思い、現在まで至ります。";

const Introduction = () => {
	return (
	<>
		<h2>Manabu Aihara</h2>
		<p>{`${catalyst}`}</p>
	</>
	)
}

const Skill = () => {
	return (
	<>
	<h4>Skill</h4>
	<div>
		<dl>
			<dt>HTML・CSS</dt>
			<dd>レスポンシブ対応も可能です。</dd>
			<dd><a href="https://github.com/gensukeSpp/non-easy-responsive">課題１</a></dd>
		</dl>
		<dl>
			<dt>Sass</dt>
			<dd>CSSを階層化・変数化させることで開発効率を上げます。</dd>
			<dd>
				<a href="https://github.com/gensukeSpp/sweets-shop">課題２</a>
				<a href="https://github.com/gensukeSpp/unepiece">課題３</a>
				<a href="https://github.com/gensukeSpp/hot-spring-kohun">課題４</a>
			</dd>
		</dl>
		<dl>
			<dt>Javascript(jQuery,Node.js)</dt>
			<dd>Webページに複雑な動きをつけます。Expressでサーバサイドアプリを作ることができます。</dd>
		</dl>
		<dl>
			<dt>Java</dt>
			<dd>オブジェクト指向プログラミングを理解したうえで、開発を行います。</dd>
		</dl>
		<dl>
			<dt>Python</dt>
			<dd>クラウド環境Google App Engineを使った開発を行いました。</dd>
			<dd><a href="https://github.com/gensukeSpp/petit-imgpost"></a></dd>
		</dl>
		<dl>
			<dt>WordPress（PHP）</dt>
			<dd>オリジナルテーマを開発した経験があります。</dd>
		</dl>
		<dl>
			<dt>illustrator</dt>
			<dd>就労支援トライズの訓練にて、基本操作は可能です。</dd>
		</dl>
		<dl>
			<dt>Docker</dt>
			<dd>Dockerfile、docker-composeを用いた基礎的な仮想環境を構築します。</dd>
		</dl>
	</div>
	</>
	)
}

export const HomePage = () => {
	return (
	<>
		<Introduction />
		<Skill />
	</>
	)
}