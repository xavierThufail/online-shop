import { useState, useEffect } from "react";

import AuthManager from "../../Services/AuthManager";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const login = AuthManager.getIsLoggedIn();

    setIsLoggedIn(login);
  }, []);

  return {
    isLoggedIn
  };
};

export default useAuth;
