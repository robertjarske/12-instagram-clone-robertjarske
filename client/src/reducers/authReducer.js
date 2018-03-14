import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, USER_SUCCESS } from "../constants/action-types";
import update from 'immutability-helper';

const initialState = {
  user: {
    token: null,
    isLoggedIn: localStorage.getItem('currentUser') ? true : false,
    isLoggingIn: false,
    info: {
      id: null,
      name: null,
      username: null,
      email: null,
    }
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    const nextState = update(state, {
      user: {
        token: {$set: action.payload.token},
        isLoggedIn: {$set: action.payload.authenticated},
        isLoggingIn: {$set: false}
      }
    });

    return nextState;

    case LOGIN_FAIL:
      return state;

    case USER_SUCCESS:
      const user = update(state, {
        user: {
          token: {$set: action.payload.token},
          info: {
            id: {$set: action.payload.info._id},
            name: {$set: action.payload.info.name},
            username: {$set: action.payload.info.username},
            email: {$set: action.payload.info.email}
          }
        }
      });

      return user;

    default:
      return state;
  }
}

export default authReducer;