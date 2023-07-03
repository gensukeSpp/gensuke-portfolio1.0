import { Children, Dispatch, ReactNode, createContext, useReducer } from 'react';
import { Work } from '../../pages/portfolio_type';

// type Page = {
//   [pageNum: string]: number;
// };

// type WorksState = Work[];
const WorksStateContext = createContext<Work[] | undefined>(undefined);

type Action = {
  type: 'output';
  search: number;
};
type WorksDispatch = Dispatch<Action>;
const WorksDispatchContext = createContext<WorksDispatch | undefined>(undefined);

const worksReducer = (state: Work[], action: Action): Work[] => {
  switch (action.type) {
    case 'output':
      return state.concat(state[action.search]);
    default:
      throw new Error('Invalid action');
  }
};

const WorkContextProvider = ({ children }: { children: ReactNode }) => {
  const [works, dispatch] = useReducer(worksReducer, []);

  return (
    <WorksDispatchContext.Provider value={dispatch}>
      <WorksStateContext.Provider value={works}>{children}</WorksStateContext.Provider>
    </WorksDispatchContext.Provider>
  );
};
