import * as React from 'react';

import { Product } from './portfolio_type';
import { card, item, prog, mv } from './ProductPage.css';

// https://www.choge-blog.com/programming/typescriptelement-implicitly-has-an-any-type-because-expression-of-type-string-cant-be-used-to-index-typeerrorsolution/
type Prop = {
  [pageNum: string]: number
}

const fetchData: Promise<Product[]> = fetch('http://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products').then((res) =>
  res.json()
);

export const ProductComponent = (page: Prop) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const f = async () => {
      const json = await fetchData;
      setProducts(json);
    };
    f();
  }, [products]);
  // console.log(products);

  const key: keyof string = page.pageNum;
  // console.log('sunkit?: ' + products[key]);

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
                                  return (
                                    <div key={l}>
                                    <li className={mv.sum}>{act.summary}</li>
                                    <li className={mv.explain}>{act.explanation}</li>
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
                                  return (
                                    <div key={n}>
                                    <li className={mv.sum}>{act.summary}</li>
                                    <li className={mv.explain}>{act.explanation}</li>
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
