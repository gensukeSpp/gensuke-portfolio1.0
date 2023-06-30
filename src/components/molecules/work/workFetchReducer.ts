import { Dispatch, createContext, useReducer } from 'react';
import { Work } from '../../pages/portfolio_type';

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
  }
};
