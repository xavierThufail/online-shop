import { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../../Contexts/Auth';
import { routePaths } from '../../Constants';

const submitLogin = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve({
    json: () => Promise.resolve({ success: true })
  }), 1000)
});

const useLogin = () => {
  const [form, setForm] = useState(null);

  const { replace } = useHistory();
  const { isLoggedIn, login } = useAuthContext();

  const initialValues = {
    email: '',
    password: ''
  };

  const handleLogin = async (values, formikHelper) => {
    const { setSubmitting } = formikHelper;

    setSubmitting(true);

    try {
      await submitLogin();
      login(values.email);
    } catch (e) {
      console.log({error: e})
    }

    setSubmitting(false);
  };

  const redirectToDashboard = useCallback(() => {
    replace(routePaths.DASHBOARD);
  }, [replace]);

  useEffect(() => {
    if (isLoggedIn) {
      redirectToDashboard();
    }
  }, [isLoggedIn, redirectToDashboard]);

  return {
    form,
    setForm,
    handleLogin,
    initialValues
  };
};

export default useLogin;
