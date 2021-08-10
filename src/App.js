import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner';
import MainRouter from './MainRouter';

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <MainRouter />
      </Router>
    </React.Suspense>
  );
}

export default App;
