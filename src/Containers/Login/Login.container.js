import React from 'react';

import LoginComponent from './Login.component';
import useLogin from './Login.hook';

const Login = () => {
  const hooks = useLogin();

  return (<LoginComponent {...hooks} />)
};

export default Login;
