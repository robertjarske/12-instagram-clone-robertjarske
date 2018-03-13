import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, USER_SUCCESS } from '../constants/action-types';

export const loginSuccess = token => ({ type: LOGIN_SUCCESS, payload: token });
export const loginFail = token => ({ type: LOGIN_FAIL });
export const logoutSucess = token => ({ type: LOGOUT_SUCCESS });
export const userSuccess = user => ({type: USER_SUCCESS, payload: user});
 


const loginUrl = 'http://localhost:3001/auth/login';

export function requestLogin(credentials) {
  return (dispatch) => {
    return fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then((data) => {
        localStorage.setItem('currentUser', data.token);
        dispatch(loginSuccess(data));
        dispatch(fetchUser(data.token));
      })
      .catch(error => {
        console.error(error);
        return dispatch({
          type: LOGIN_FAIL
        });
      });
  }
}

const registerUrl = 'http://localhost:3001/auth/register'

export function requestSignup(credentials) {
  return (dispatch) => {
    return fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then((data) => {
        localStorage.setItem('currentUser', data.token);
        dispatch(loginSuccess(data));
        dispatch(fetchUser(data.token));
      })
      .catch(error => {
        console.error(error);
        return dispatch({
          type: LOGIN_FAIL
        });
      });
  }
}




export function fetchUser(token) {
  return (dispatch) => {
    return fetch('http://localhost:3001/auth/me', {
      headers: {
        'Content-Type': 'application/json',
        'X-ACCESS-TOKEN': token
      }
    })
      .then(res => res.json())
      .then((data) => {
        const currentUser = {info: data.user, token: token}
        dispatch(userSuccess(currentUser));
      })
  }
}