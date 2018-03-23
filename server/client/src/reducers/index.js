import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
  photoReducer,
  authReducer
});

export default rootReducer;

// import { ADD_COMMENT, ADD_LIKE, SHOW_TEXTFIELD, FETCH_PHOTOS_START, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE } from "../constants/action-types";
// import update from "immutability-helper";

// const initialState = {
  
//   photos: [
//     {
//       id: 0,
//       imageUrl: 'https://placehold.it/500x500',
//       uploader: 'TM',
//       comments: [
//         {
//           id: 0,
//           author: 'Guran',
//           content: 'Testing here does it work'
//         }
//       ],
//       likes: 3500,
//       textFieldShowing: false
//     },
//     {
//       id: 1,
//       imageUrl: 'https://placehold.it/500x500',
//       uploader: 'ME',
//       comments: [],
//       likes: 155,
//       textFieldShowing: false
//     }
//   ],
//   isFetching: false
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_COMMENT:
//       const index = state.photos.findIndex(photo => photo.id === action.payload.photoId)
//       const nextState = update(state, {
//         photos: {
//           [index]: { 
//             comments: {
//               $push: [action.payload]
//             }
//           }
//         }
//       });

//       return nextState;
      

//     case ADD_LIKE:
//       const photo = state.photos.findIndex(photo => photo.id === action.payload.photoId)
//       const like = action.payload.like
      
//       const next = update(state, {
//         photos: {
//           [photo]: { 
//             likes: {
//               $set: state.photos[photo].likes + like
//             }
//           }
//         }
//       });

//       return next;
        
//     case SHOW_TEXTFIELD:
//       const i = state.photos.findIndex(photo => photo.id === action.payload.photoId)
//       const bool = action.payload.bool
//       const newState = update(state, {
//         photos: {
//           [i]: {
//             textFieldShowing: {$set: bool}
//           }
//         }
//       })
    
//       return newState;

//     case FETCH_PHOTOS_START:
//       return {
//         ...state,
//         isFetching: true
//       }

//     case FETCH_PHOTOS_FAILURE:
//       return {
//         ...state,
//         isFetching: false
//       }
//     case FETCH_PHOTOS_SUCCESS:
//       return { ...state, photos: action.payload };


//     default:
//       return state;
        
//   }
// };

// export default rootReducer;