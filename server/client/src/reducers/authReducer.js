import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, USER_SUCCESS, USER_FAIL } from "../constants/action-types";
import update from 'immutability-helper';
import apiUtils from '../utils';

const initialState = {
  user: {
    token: null,
    isLoggedIn: apiUtils.isLoggedIn(),
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
    return {
      user: {...state.user,
        token: action.payload.token,
        isLoggedIn: action.payload.authenticated,
        isLoggingIn: false
      }
    }

    case LOGIN_FAIL:
      return state;

    case USER_SUCCESS:

      return {...state,
        user: {
          ...state.user,
          token: action.payload.token,
          info: {
            id: action.payload.info._id,
            name: action.payload.info.name,
            username: action.payload.info.username,
            avatar: action.payload.info.avatar,
            email: action.payload.info.email
          }
        }
      
      }

    case USER_FAIL:
    return {...state,
      error: [action.payload]
    }

    case LOGOUT_SUCCESS:
    return {...state,
      user: {
        ...state.user,
        isLoggedIn: false,
        token: null,
        info: {
          ...state.user.info,
          id: null,
          name: null,
          username: null,
          avatar: null,
          email: null
        }
      }
    }

    default:
      return state;
  }
}

export default authReducer;