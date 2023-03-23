import * as React from 'react';

import { Library, Product } from './portfolio_type';

type Prop = {
  text: string;
};

const fetchData = fetch('http://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products').then((res) =>
  res.json()
);

export const ProductPage = (prop: Prop) => {
  const [val, setVal] = React.useState([]);

  React.useEffect(() => {
    const f = async () => {
      const json = await fetchData;
      setVal(json);
    };
    f();
  });
  console.log(val);

  return (
    <div>
      <p>{prop.text}</p>
      <dl>
        {val.map((products: Product) => {
          return (
            <>
              <dt>タイトル：{products.title}</dt>
              <dd>{products.term}</dd>
              <dd>{products?.description}</dd>
              {/* {library?.map((library: Library) => {
                return (
                  <dd>
                    ライブラリー：{library.name}
                    <ul>
                      <li>
                        {library.action[0].summary}
                      </li>
                      <li>
                        {library.action[0].description}
                      </li>
                    </ul>
                  </dd>
                );
              })} */}
            </>
          );
        })}
      </dl>
    </div>
  );
};
