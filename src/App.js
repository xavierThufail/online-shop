import React from 'react';

import AppContextProvider from './Contexts/AppContextProvider';
import { Routes } from './Routes';

const App = () => (
  <AppContextProvider>
    <Routes />
  </AppContextProvider>
);

export default App;
