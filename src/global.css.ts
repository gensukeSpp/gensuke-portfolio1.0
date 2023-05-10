import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body > #root', {
  margin: '0 auto',
  fontFamily: `'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', sans-serif`,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  width: '76vw',
});

globalStyle('a', {
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer'
});

globalStyle('li', {
  // listStyleType: 'disc',
  listStylePosition: 'inside' 
});
