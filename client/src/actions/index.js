import { ADD_COMMENT, ADD_LIKE, SHOW_TEXTFIELD, FETCH_PHOTOS_START, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE } from '../constants/action-types';

export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });
export const addLike = like => ({ type: ADD_LIKE, payload: like });
export const showTextField = bool => ({ type: SHOW_TEXTFIELD, payload: bool });

const url = 'https://5a9945a65217dd0012c7894f.mockapi.io/api/v1/photos';

export const requestPhotos = () => ({
  type: FETCH_PHOTOS_START
});

export const receivePhotos = data => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: data
});

export const fetchPhotos = () => dispatch => {
  dispatch(requestPhotos());

  return fetch(url)
    .then(res => res.json())
    .then((data) => {
      const newPhoto = [];
      
      data.map((photo) => {
        const likes = 0;
        const comments = [];
        photo.likes = likes;
        photo.comments = comments;

        return newPhoto.push(photo)
     })
    
      
      return dispatch(receivePhotos(newPhoto));
    })
    .catch(response => {
      console.error(response);
      return dispatch({
        type: FETCH_PHOTOS_FAILURE
      });
    });
};