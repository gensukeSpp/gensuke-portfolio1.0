import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WithReactQuery } from './WorkRetrieve';

type Prop = {
  [pageNum: string]: number;
};

const queryClient = new QueryClient();

function Output(page: Prop) {
  const arg: number = page.pageNum;

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: '2em' }}>
        <WithReactQuery argument={arg} />
      </div>
    </QueryClientProvider>
  );
}

export default Output;
