import * as React from 'react';

import {  Product } from './portfolio_type';

// https://www.choge-blog.com/programming/typescriptelement-implicitly-has-an-any-type-because-expression-of-type-string-cant-be-used-to-index-typeerrorsolution/
type Prop = {
  pageNum: string
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
  });
  console.log(products);

  const key: keyof string = page.pageNum;
  // const sitename = products[key];

  return (
    <div>
      {/* <p>{prop.text}</p> */}
        {/* {products.map((product: Product, i) => {
          return (
          <div key={i}>{i} */}
            <dl>
              <dt>タイトル：{products[page.pageNum].title}</dt>
              <dd>{products[key].term}</dd>
              <dd>{products[key]?.description}</dd>
              <dl>
                {products[key].language.map((lang, j) => {
                  return (
                  <div key={j}>{j}
                  <dt>{lang.program}</dt>
                  {console.log(lang)}
                  <dd>
                    {lang.library?.map((lib, k) => {
                      return (
                      <div key={k}>{k}
                      <dd>{lib.name}</dd>
                      <ul>
                        {lib.action.map((act, l) => {
                          return (
                          <div key={l}>{l}
                          <li>{act.summary}</li>
                          <li>{act.description}</li>
                          </div>
                          );
                        })}
                      </ul>
                    </div>
                      );
                    })}
                  </dd>
                  </div>
                  );
                })}
              </dl>
            </dl>
          {/* </div>
          );
        })} */}
      </div>
  );
}
