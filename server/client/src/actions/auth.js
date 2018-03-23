import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, USER_SUCCESS, USER_FAIL } from '../constants/action-types';
import apiUtils from '../utils';

export const loginSuccess = token => ({ type: LOGIN_SUCCESS, payload: token });
export const loginFail = token => ({ type: LOGIN_FAIL });
export const logoutSucess = token => ({ type: LOGOUT_SUCCESS });
export const userSuccess = user => ({type: USER_SUCCESS, payload: user});
export const userFail = error => ({type: USER_FAIL, payload: error})

const loginUrl = '/auth/login';

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

const registerUrl = '/auth/register'

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
        return dispatch({
          type: LOGIN_FAIL
        });
      });
  }
}




export function fetchUser(token) {
  return (dispatch) => {
    return fetch('/auth/me', {
      headers: {
        'Content-Type': 'application/json',
        'X-ACCESS-TOKEN': token
      }
    })
    .then(res => apiUtils.checkStatus(res))
    .then(res => res.json())
    .then((data) => {
      if (!data.authenticated) {
        throw new Error(data.message);
      }
      const currentUser = {info: data.user, token: token}
      dispatch(userSuccess(currentUser));
    })
    .catch(error => {
      
    })
  }
}

export function userLogout() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logoutSucess({type: LOGOUT_SUCCESS}));
  }
}