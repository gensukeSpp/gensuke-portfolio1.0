
const source1: string =`

~~~php
<html>
{include file="header.tpl"}
<body>
...
<div id="main">
{* 各ページコンテンツ挿入部分 *}
{block name=main}{/block}
</div>
~~~
`;

const source2: string =`

~~~php
phpファイル
$inner = array(
	array('num' => 'F', 'menu' =>'機能性食品'),
	array('num' => 'S', 'menu' =>'お菓子'),
	array('num' => 'C', 'menu' =>'化粧品'),
	...
tplファイル
{foreach from=$inner item="value_i"}
	<li><a href="#tab{$value_i.num}">{$value_i.menu}</a></li>
{/foreach}
~~~
`;

const source3: string =`

~~~javascript
自作sendDataプラグインの利用

/* 
 * Param
 * data: タグ属性data-{data}
 * name: 渡す値のキー名
 * action: 値の送り先
 * */
$エレメントタグ.on("click", function(){
	$(this).sendData({data: "jump", name: "id", action: "products.php"});
~~~

~~~html
	例：<div data-jump='商品id'>が
	<form method='GET' action='products.php'>
		<input name='商品id' value='jump' />
	</form>
	の機能として、商品ページの目的の箇所までジャンプ
~~~
`;

const source4: string = `

~~~javascript
/*
* モーダルウィンドウに対応した、シングルトンパターン
*/
SingletonTagModule関数

// 公開されない機能
var instance;
return {
	// ここから公開された機能

	getInstance: function(args) {
		if(!instance) {
			instance = new タグを生成する関数(args); // instanceがなければ関数()を実行
		}
		return instance;　// instanceを返す
	}
};

SingletonTagModuleの利用
	$モーダルウィンドウにしたい画像エレメント.on("click", function(e){
		/* タグの生成を一度だけにしたクラスのインスタンス */
		var st = SingletonTagModule.getInstance(...);
		// モーダルウィンドウ表示処理
		...
`;

const source5: string =`

~~~python
class ImageBlob(ndb.Model):
	...
	def getting(self):
		# 説明文(ExplainArticle)の持つキーと画像(ImageBlob)のキーが一致したものを返す
		article_objs = ExplainArticle.query(ExplainArticle.blob_key == self.key).fetch()
		return article_objs[0]

class ExplainArticle(ndb.Model):
	...
	blob_key = ndb.KeyProperty(kind=ImageBlob)


# 画像オブジェクトに付随する、説明文を呼び出す場合
target_article = ImageBlobオブジェクト.getting()
~~~
`;

const source6: string =`

[こちら](https://qiita.com/wasnot/items/029b94bc7ba9f189e8d4)に沿って、ある程度実装可能

~~~python
ログイン中かどうか、デコレータを作成
以降@user_requiredをdef前に付与することで、ログインされていること前提の処理が加えられる
def user_required(handler):
	def check_login(self, *args):
		if not auth.get_user_by_session():
			...# ログインしていなければ、ログインページへリダイレクト
		else:
			user_session = self.auth.get_user_by_session()
			user_instance = ユーザーモデルクラス.get_by_id(user_session['user_id'])
			# ログインユーザー情報を返す
			return handler(self, user_instance)
	return check_login
~~~
`;

const source7: string =`

~~~python
application = webapp2.WSGIApplication([
	HandlerPrefixRoute(r'ファイル名.', [
		webapp2.Route('/Path名', handler='クラス名', name='secure'),
		webapp2.Route('/Path名', handler='クラス名', name='upload'),
		...
	]},
	# post処理直後リダイレクトが必要な場合
	(r'/view_image/([^/]+)?', InputArticlesHandler),
	(r'/edit([^/]+)?', EditPageHandler),
	...
~~~
`;

const source8: string =`

~~~javascript
const [products, setProducts] = React.useState<Product[]>([]);

// APIよりデータを取得し、setProductsにてproductsに格納
React.useEffect(() => {
		const f = async () => {
		const json = await fetchData;
		setProducts(json);
  };
  f();
}, []);

// keyにページ番号を格納し、ページ番号ごとに表示を切り替えられる
return (
    <>
      {products.map((product: Product, i) => {
        if(i === key){
          return (
            <div key={i}>
							...
							<dt className={item.title}>タイトル：{product.title}</dt>
							<dd>制作・更新期間{product.term}</dd>
							...
~~~
`;

const source9: string =`
主に[こちら](https://www.copycat.dev/blog/react-markdown/)を参照

~~~javascript
// 以下コンポーネントより、シンタックスハイライト表現を実現
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
...
<ReactMarkdown
children = {マークダウン表記の記事}
components={{
	code({ node, inline, className, children, style, ...props }: CodeProps) {
		const match = /language-(\\w+)/.exec(className || "");
		return !inline && match ? (
			<SyntaxHighlighter
				children={String(children).replace(/\\n$/, "")}
				language={match[1]}
				{...props}
			/>
			...
~~~
`;

const source10: string =`

~~~javascript
// sprinkles.css.ts
const horizon = {
  full: '98%',
  half: '48%',
  normal: '30%',
};
const responsiveStyles = createAtomicStyles({
	...
	properties: {
		...
		width: horizon
	}

// sprinkles呼び出し
import { atoms } from '../sprinkles.css';
...
const responsive: string = atoms({
  width: {
    mobile: 'full',
    tablet: 'half',
    desktop: 'normal',
  },
});

// コンポーネント定義箇所
<dl className={responsive}>
~~~
`;

export const callSource = (no: string) => {

	switch (no){
		case "1":
			// return <ReactMarkdown children={source1} remarkPlugins={[remarkGfm]}></ReactMarkdown>;
			return source1;
		case "2":
			return source2;
		case "3":
			return source3;
		case "4":
			return source4;
		case "5":
			return source5;
		case "6":
			return source6;
		case "7":
			return source7;
		case "8":
			return source8;
		case "9":
			return source9;
		case "10":
			return source10;
		default:
			alert("Nothing number");
	}
}