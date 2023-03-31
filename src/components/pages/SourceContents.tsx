
const source1 =`
- A direct URL: https://www.copycat.dev/
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