
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

const source3 =`自作sendDataプラグインの利用

~~~javascript
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
		<input name='id' value='jump' />
	</form>
~~~
のような機能を持つ
`;

const source4 = `
# GFM

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
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