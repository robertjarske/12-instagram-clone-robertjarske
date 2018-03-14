import { ADD_COMMENT, ADD_LIKE, SHOW_TEXTFIELD, FETCH_PHOTOS_START, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE } from '../constants/action-types';

export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });
export const addLike = like => ({ type: ADD_LIKE, payload: like });
export const showTextField = bool => ({ type: SHOW_TEXTFIELD, payload: bool });


export const requestPhotos = () => ({
  type: FETCH_PHOTOS_START
});

export const receivePhotos = data => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: data
});

export const fetchPhotos = () => dispatch => {
  dispatch(requestPhotos());
  return fetch('http://localhost:3001/photos')
  .then(res => res.json())
  .then((data) => {
    data.map(photo => {
      photo.textFieldShowing = false;
      dispatch(receivePhotos(photo));
    })
  })
  .catch(response => {
    console.error(response);
    return dispatch({
      type: FETCH_PHOTOS_FAILURE
    });
  });

}

export function putLike(like) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/photos/${like.photoId}/likes/${like.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(like) 
    })
    .then(res => res.json())
    .then((res) => {
      debugger;
      
    })
  }

} 
  
  
  /**This is what I did first to get som data to mLab**/
  
  //const url = 'https://5a9945a65217dd0012c7894f.mockapi.io/api/v1/photos';
        /*return fetch(url)
          .then(res => res.json())
          .then((data) => {
            const newPhoto = [];
            
            data.map((photo) => {
              const likes = [];
              const comments = [];
              photo.likes = likes;
              photo.comments = comments;

              return newPhoto.push(photo)
          })      
            return newPhoto;
          })
          .then(photos => {
            photos.map((photo) => {
              return fetch('http://localhost:3001/photos/store', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(photo)
              })
              .then(res => res.json())
              .then(res => {
                console.log(res.photo)
                return dispatch(receivePhotos(res.photo));

              })          
            })
          })
          .catch(response => {
            console.error(response);
            return dispatch({
              type: FETCH_PHOTOS_FAILURE
            });
          });*/
