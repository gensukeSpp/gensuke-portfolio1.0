import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Work } from '../../pages/portfolio_type';
import { Action, worksReducer } from '~/components/molecules/work/reducer';

type Page = {
  [pageNum: string]: number;
};

// type WorksState = Work[];
const WorksStateContext = createContext<Work[] | undefined>(undefined);

type WorksDispatch = Dispatch<Action>;
const WorksDispatchContext = createContext<WorksDispatch | undefined>(undefined);

const queryClient = new QueryClient();

const WorkContextProvider = ({ children }: { children: ReactNode }) => {
  const [works, dispatch] = useReducer(worksReducer, []);

  return (
    <WorksDispatchContext.Provider value={dispatch}>
      <WorksStateContext.Provider value={works}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WorksStateContext.Provider>
    </WorksDispatchContext.Provider>
  );
};
