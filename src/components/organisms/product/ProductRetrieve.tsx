import { useQuery } from '@tanstack/react-query';

import { Product } from '../../pages/portfolio_type';

const fetchData = async (): Promise<Product[]> => {
  const response = await fetch('https://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Failed request: invalid response');
  }
  return response.json();
};

export const WithReactQuery = (prop: { argument: number }) => {
  const { isLoading, error, data } = useQuery(['repoData'], fetchData);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error!</div>;
  }

  if (data === undefined) {
    return <div>データが無いよ</div>;
  }

  console.log(data[prop.argument]);
  return <div>コンソール見てね</div>;
};
