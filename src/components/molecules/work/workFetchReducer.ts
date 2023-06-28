import { Work } from '../../pages/portfolio_type';

type Action = {
  type: 'output';
  state: Work;
};
const initialWork: Work = {
  title: '',
  term: '',
  presentation: '',
  language: [],
  link: '',
};
