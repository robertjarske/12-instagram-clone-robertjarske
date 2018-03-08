
const initialState = {
  isLoggedIn: false,
  user: {
    id: 0,
    name: [],
    email: [],
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default userReducer;