import { ADD_COMMENT, ADD_LIKE, SHOW_TEXTFIELD } from "../constants/action-types";
import update from "immutability-helper";

const initialState = {
  
  photos: [
    {
      id: 0,
      photoUrl: 'https://placehold.it/500x500',
      uploader: 'TM',
      comments: [
        {
          id: 0,
          author: 'Guran',
          content: 'Testing here does it work'
        }
      ],
      likes: 0,
      textFieldShowing: false
    },
    {
      id: 1,
      photoUrl: 'https://placehold.it/500x500',
      uploader: 'ME',
      comments: [],
      likes: 155,
      textFieldShowing: true
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const index = state.photos.findIndex(photo => photo.id === action.payload.photoId)
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
        const photo = state.photos.findIndex(photo => photo.id === action.payload.photoId)
        const like = action.payload.like
        
        const next = update(state, {
          photos: {
            [photo]: { 
              likes: {
                $set: state.photos[photo].likes + like
              }
            }
          }
        });

        return next;
        
      case SHOW_TEXTFIELD:
        const i = state.photos.findIndex(photo => photo.id === action.payload.photoId)
        const bool = action.payload.bool
        const newState = update(state, {
          photos: {
            [i]: {
              textFieldShowing: {$set: bool}
            }
          }
        })
      
        return newState;


      default:
        return state;
        
  }
};

export default rootReducer;