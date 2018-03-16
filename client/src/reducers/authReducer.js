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
    return {
      user: {...state.user,
        token: action.payload.token,
        isLoggedIn: action.payload.authenticated,
        isLoggingIn: false
      }
    }
    
    
    // const nextState = update(state, {
    //   user: {
    //     token: {$set: action.payload.token},
    //     isLoggedIn: {$set: action.payload.authenticated},
    //     isLoggingIn: {$set: false}
    //   }
    // });

    // return nextState;

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
      // const user = update(state, {
      //   user: {
      //     token: {$set: action.payload.token},
      //     info: {
      //       id: {$set: action.payload.info._id},
      //       name: {$set: action.payload.info.name},
      //       username: {$set: action.payload.info.username},
      //       avatar: {$set: action.payload.info.avatar},
      //       email: {$set: action.payload.info.email}
      //     }
      //   }
      // });

      // return user;

    default:
      return state;
  }
}

export default authReducer;