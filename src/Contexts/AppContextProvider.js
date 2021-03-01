import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './Auth/Auth.context';

const AppContextProvider = ({ children }) => (
  <AuthProvider>{ children }</AuthProvider>
);

AppContextProvider.propTypes = {
  children: PropTypes.node
}

export default AppContextProvider;
