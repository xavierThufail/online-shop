import { createContext as reactCreateContext, useContext } from 'react';

const createContext = () => {
  const ctx  = reactCreateContext({});

  const useCtx = () => {
    const context = useContext(ctx);

    if(!context) {
      throw new Error('useCtx must be inside a Provider with a value')
    }

    return context;
  };

  return [useCtx, ctx.Provider];
};

export default createContext;
