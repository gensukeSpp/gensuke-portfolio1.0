import { useQuery } from '@tanstack/react-query';

import { Product } from '../../pages/portfolio_type';

const fetchData: Promise<Product[]> = fetch(
  'https://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products'
).then((res) => res.json());

export const withReactQuery = () => {
  const { isLoading, error, data } = useQuery(['repoData'], () => fetchData);

  if (isLoading) {
    return 'loading...';
  }

  if (error) {
    return 'error!';
  }

  console.log(data);
};
