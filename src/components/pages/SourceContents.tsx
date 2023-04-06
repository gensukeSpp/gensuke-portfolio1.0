
const source1 =`

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

const source2 =`

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

const source3 =`

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

const source4 = `

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
		default:
			alert("Nothing number");
	}	
}