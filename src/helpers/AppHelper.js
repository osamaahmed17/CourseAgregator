import { history } from 'helpers/router';

class AppHelper {
  developerModeLoginUser = (loggedIn) => {
    window.localStorage.setItem("loggedIn", loggedIn);
    window.localStorage.setItem("developerMode", loggedIn);
    history.push('/home') // Change this if you have to
  }

  loginUser = (loggedIn, accessToken) => {
    window.localStorage.setItem("loggedIn", loggedIn);
    window.localStorage.setItem("accessToken", accessToken);
    history.push('/home') // Change this if you have to
  }

  logoutUser = () => {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.setItem("developerMode", false);
    window.localStorage.removeItem("accessToken");
    history.push('/')
  }

  /*
    Returns if there's a valid login in localStorage. 
    For a valid login, either of the two should be satisfied in localStorage:
    1. loggedIn is true + accessToken is not false or null or "".
        Should return token as a valid accessToken which is not the string 'true'
    2. loggedIn is true + developerMode is true.
        Should return token as the string 'true'

    Else, returns false

  */
  isUserLocalStorageLoggedIn = () => {
    let token = "";
    if ((this.getUserLoggedIn() && ((token = this.getUserAccessToken()) !== "")) ||
        (this.getUserLoggedIn() && (this.getDeveloperMode()))) {
      token = "" + ( (this.getUserAccessToken()) || this.getDeveloperMode() ); // this is wrong!
      return token;
    }
    else
      return false;
  }

  getUserLoggedIn = () => {
    let value = window.localStorage.getItem("loggedIn");
    return ( value !== 'false' && value !== null );
  }

  getUserAccessToken = () => {
    let value = window.localStorage.getItem("accessToken");
    return ( value !== 'false' && value !== null && value !== "" ) ? value : "" ;
  }

  getDeveloperMode = () => {
    let value = window.localStorage.getItem("developerMode");
    return ( value !== 'false' && value !== null );
  }

}

const instance = new AppHelper();
export default instance;
