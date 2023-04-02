
const source1 =`form,inputタグのオプションを求めるかたちにしました。

~~~javascript
/* GETメソッドによりデータを受け渡すプラグイン */
// 匿名関数で全体をラップ - (5)
;(function($) {
	// このプラグインの名前 - (1)
	$.fn.sendData = function(options) {
		//要素を退避 - (2)
		var elements = this;
		
		// 渡されたオプションおよび独自データ属性をデフォルトにマージする
		var setting = $.extend({}, $.fn.sendData.defaults, options);
			
		// 要素をひとつずつ処理 - (3)
		// method chain用に要素を返す - (4)
		return elements.each(function() {
						
		// 具体的な処理を以下に記述
		...
		});
	}
...
}) (jQuery);

~~~
実際の利用

~~~javascript
/*
* data: data-jumpの値
* name: GETで渡す値を格納する変数名
* action: 値を送る先
*/
$エレメントタグ名.on("click", function(){
	$(this).sendData({data: "jump", name: "id", action: "products.php"});

~~~
`;

const source2 =`

~~A strikethrough text~~

`;

const source3 = `
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
	// const [mdNum, setMdNum] = React.useState<string>("");

  // React.useEffect(() => {
  //   	setMdNum(no);
  // }, []);

	switch (no){
		case "1":
			// return <ReactMarkdown children={source1} remarkPlugins={[remarkGfm]}></ReactMarkdown>;
			return source1;
		case "2":
			// return <ReactMarkdown children={source2} remarkPlugins={[remarkGfm]}></ReactMarkdown>;
			return source2;
		case "3":
			return source3;
		default:
			alert("Nothing number");
	}	
}