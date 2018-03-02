import { ADD_COMMENT, ADD_LIKE, SHOW_TEXTFIELD } from '../constants/action-types';

export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });
export const addLike = like => ({ type: ADD_LIKE, payload: like });
export const showTextField = bool => ({ type: SHOW_TEXTFIELD, payload: bool });
