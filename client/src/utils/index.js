// Import jwt-decode or whatever is the most popular one
// add convenience methods for:
  // checkif token is expired

import decode from 'jwt-decode';


const apiUtils = {
  checkStatus: (response) => {
    if (response.ok) {
      return response
    } else {
      response.json().then((res) => {
        let error = new Error(`${response.statusText} - ${res.message}`);
        error.response = response;
        throw error;
      });
    }
  },
  isLoggedIn: () => {
    // Implement the check here.
    // This needs to check if the token exists (get it from localStorage)
    // Check that it's valid and not expired (by using the method below)
    if(localStorage.getItem('currentUser')) {
      let token = localStorage.getItem('currentUser');
      let expiredToken = apiUtils.checkExpired(token);
      
      if (expiredToken) {
        return false;
      }

      return true;
    }
    return false;
  },
  checkExpired: (token) => {
    try {
      const decodedToken = decode(token); // Does this trigger catch if it fails? ...
      
      let now = Date.now()/1000;//because expiresIn from server is in seconds and date.now is in  milliseconds
      
      if (decodedToken.exp < now) {
      
        return true;
      } else {
        return false
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export { apiUtils as default }