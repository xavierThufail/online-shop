import Cookies from 'js-cookie';

const IS_LOGGED_IN_KEY = 'isLoggedIn';

class AuthManager {
  constructor () {
    this.isLoggedIn = Cookies.get(IS_LOGGED_IN_KEY) || '';
  }

  getIsLoggedIn() {
    return !!this.getIsLoggedIn;
  }
};

const instance = new AuthManager();

export default instance;
