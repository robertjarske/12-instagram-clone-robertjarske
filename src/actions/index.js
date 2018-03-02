import { ADD_COMMENT } from '../constants/action-types';
import { ADD_LIKE } from '../constants/action-types';

export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });
export const addLike = like => ({ type: ADD_LIKE, payload: like });