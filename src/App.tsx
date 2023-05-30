import { HelmetProvider } from 'react-helmet-async';
import { RoconRoot } from 'rocon/react';
import { Routes } from '~/components/Routes';

function App() {
  return (
    <div>
      <HelmetProvider>
        <RoconRoot>
          <Routes />
        </RoconRoot>
      </HelmetProvider>
    </div>
  );
}

export default App;
