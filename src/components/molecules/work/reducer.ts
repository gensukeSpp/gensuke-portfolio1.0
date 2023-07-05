import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { Work } from '../../pages/portfolio_type';

export type Action = { type: 'success'; search: number };

const fetchData = async (): Promise<Work[]> => {
  const response = await fetch('https://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Failed request: invalid response');
  }
  return response.json();
};

const { isLoading, error, data } = useQuery(['repoData'], fetchData);

export const worksReducer = (state: Work[], action: Action): Work[] => {
  switch (action.type) {
    case 'success':
      return data === undefined ? [] : state.concat(data[action.search]);
    default:
      throw new Error('Invalid action');
  }
};
