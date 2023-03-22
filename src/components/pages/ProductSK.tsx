import * as React from 'react';

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
    </div>
  );
};
