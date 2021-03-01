import React from 'react';

import createContext from '../createContext';
import useAuth from './Auth.hook';

const [useCtx, Provider] = createContext();

export const useAuthContext = useCtx;

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return (<Provider value={{ ...auth }} >{ children }</Provider>);
};
