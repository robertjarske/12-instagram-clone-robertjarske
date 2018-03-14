import { ADD_COMMENT, ADD_LIKE, SHOW_TEXTFIELD, FETCH_PHOTOS_START, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE } from "../constants/action-types";
import update from "immutability-helper";

const initialState = {
  
  photos: [
    // {
    //   id: 0,
    //   imageUrl: 'https://placehold.it/500x500',
    //   uploader: 'TM',
    //   comments: [
    //     {
    //       id: 0,
    //       author: 'Guran',
    //       content: 'Testing here does it work'
    //     }
    //   ],
    //   likes: ['test something'],
    //   textFieldShowing: false
    // },
    // {
    //   id: 1,
    //   imageUrl: 'https://placehold.it/500x500',
    //   uploader: 'ME',
    //   comments: [],
    //   likes: [],
    //   textFieldShowing: false
    // }
  ],
  isFetching: false
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
    const index = state.photos.findIndex(photo => photo._id === action.payload.photoId)
      const nextState = update(state, {
        photos: {
          [index]: { 
            comments: {
              $push: [action.payload]
            }
          }
        }
      });

      return nextState;
      

    case ADD_LIKE:
      const photo = state.photos.findIndex(photo => photo._id === action.payload.photoId)
      const user = action.payload.user
      if(state.photos[photo].likes.includes(user)) {
        const filteredLikes = state.photos[photo].likes.filter(id => id !== user);
        
        const next = update(state, {
          photos: {
            [photo]: { 
              likes: {
                $set: [filteredLikes]
              }
            }
          }
        });
  
        return next;

      } else {
      
        const next = update(state, {
          photos: {
            [photo]: { 
              likes: {
                $push: [user]
              }
            }
          }
        });
  
        return next;
      }
        
    case SHOW_TEXTFIELD:
      const i = state.photos.findIndex(photo => photo._id === action.payload.photoId)
      const bool = action.payload.bool
      const newState = update(state, {
        photos: {
          [i]: {
            textFieldShowing: {$set: bool}
          }
        }
      })
    
      return newState;

    case FETCH_PHOTOS_START:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        isFetching: false
      }

    case FETCH_PHOTOS_SUCCESS:
      const newPhotoState = update(state, {
        photos: {
          $push: [action.payload]
        }
      });
    
      return newPhotoState;


    default:
      return state;
        
  }
};

export default photoReducer;