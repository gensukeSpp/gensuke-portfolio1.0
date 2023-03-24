import * as React from 'react';

import { Framework, Library, Product } from './portfolio_type';

type Prop = {
  text: string;
};

const fetchData: Promise<Product[]> = fetch('http://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products').then((res) =>
  res.json()
);

export const ProductPage = (prop: Prop) => {
  const [val, setVal] = React.useState<Product[]>([]);
  const [tools, setTools] = React.useState<Library[] | Framework[] | undefined>([]);

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
        {val.map((products: Product, i) => {
          return (
          <div key={i}>{i}
            <dl>
              <dt>タイトル：{products.title}</dt>
              <dd>{products.term}</dd>
              <dd>{products?.description}</dd>
              <dl>
                <dt>{products.language[i].program}</dt>
                <dd>
                  {
                    setTools(products.language[i].library);
                    tools.map((library: Library, j) => {
                    });
                  }
                </dd>
                <dd>
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </dd>
              </dl>
            </dl>
          </div>
          );
        })}
      </div>
  );
}
