import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Product } from './portfolio_type';
import { card, item, prog, mv } from './ProductPage.css';

import { callSource } from './SourceContents';

// https://www.choge-blog.com/programming/typescriptelement-implicitly-has-an-any-type-because-expression-of-type-string-cant-be-used-to-index-typeerrorsolution/
type Prop = {
  [pageNum: string]: number
}

const fetchData: Promise<Product[]> = fetch('http://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products').then((res) =>
  res.json()
);

export const ProductComponent = (page: Prop) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [md, setMd] = React.useState<string>("");

  // const source1 =`Example:
  //   ~~Hello Markdown~~
  // `;

  React.useEffect(() => {
    const f = async () => {
      const json = await fetchData;
      setProducts(json);
    };
    f();
  }, []);

  // React.useEffect(() => {
  //   setMd(source1);
  // }, []);

  const key: keyof string = page.pageNum;

  return (
    <>
      {products.map((product: Product, i) => {
        if(i === key){
        return (
          <div key={i}>{i}:KEY={key}
            <img src="" alt={`${product.title}` + "のスクリーンショット"} />
            <dl className={card}>
              <dt className={item.title}>タイトル：{product.title}</dt>
              <dd>制作・更新期間{product.term}</dd>
              <dd>{product.presentation}</dd>
                {product.language.map((lang, j) => {
                  return (
                    <div key={j}>
                      <dl className={card}>
                      <dt className={prog.name}>使用言語：{lang.program}</dt>
                      <dd>
                        {lang.library?.map((lib, k) => {
                          return (
                            <div key={k}>
                              <dd className={prog.name}>{lib.name}</dd>
                              <ul>
                                {lib.action.map((act, l) => {
                                  const caller = callSource(act.source)!;
                                  return (
                                    <div key={l}>
                                    <li className={mv.sum}>{act.summary}</li>
                                    <li className={mv.explain}>{act.explanation}</li>
                                    関数呼び出し：
                                    <ReactMarkdown children={caller} remarkPlugins={[remarkGfm]} />; 
                                    </div>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </dd>
                      <dd>
                        {lang.framework?.map((frm, m) => {
                          return (
                            <div key={m}>
                              <dd className={prog.name}>{frm.name}</dd>
                              <dd>{frm.description}</dd>
                              <ul>
                                {frm.action.map((act, n) => {
                                  const caller = callSource(act.source)!;
                                  return (
                                    <div key={n}>
                                    <li className={mv.sum}>{act.summary}</li>
                                    <li className={mv.explain}>{act.explanation}</li>
                                    関数呼び出し：
                                    <ReactMarkdown children={caller} remarkPlugins={[remarkGfm]} />; 
                                    </div>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </dd>
                    </dl>
                  </div>
                  );
                })}
              <a href={`${product.link}`}>作品ページ</a>
            </dl>
          </div>
        );}
      })}
    </>
  );
}
