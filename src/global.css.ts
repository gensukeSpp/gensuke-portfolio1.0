import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body > #root', {
  margin: '0 auto',
  fontFamily: `'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', sans-serif`,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('a', {
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer',
});

globalStyle('li', {
  // listStyleType: 'disc',
  listStylePosition: 'inside',
});

globalStyle('table', {
  fontSize: '1rem',
  width: '50%',
});

globalStyle('table thead', {
  borderBottom: 'solid 1px',
  backgroundColor: 'lightgray',
  fontWeight: 'bold',
});
