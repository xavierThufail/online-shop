import { useState, useEffect } from "react";

import AuthManager from "../../Services/AuthManager";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email) => {
    AuthManager.setLogin(email);
    setIsLoggedIn(AuthManager.getIsLoggedIn());
  }

  useEffect(() => {
    const isLogin = AuthManager.getIsLoggedIn();

    setIsLoggedIn(isLogin);
  }, []);

  return {
    isLoggedIn,
    login
  };
};

export default useAuth;
