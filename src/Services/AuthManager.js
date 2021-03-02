import Cookies from 'js-cookie';

const IS_LOGGED_IN_KEY = 'isLoggedIn';

class AuthManager {
  constructor () {
    this.isLoggedIn = Cookies.get(IS_LOGGED_IN_KEY) || '';
  }

  getIsLoggedIn() {
    return !!this.isLoggedIn;
  }

  setLogin(email) {
    this.isLoggedIn = email;
    this.persist();
  }

  persist () {
    Cookies.set(IS_LOGGED_IN_KEY, this.isLoggedIn);
  }
};

const instance = new AuthManager();

export default instance;
