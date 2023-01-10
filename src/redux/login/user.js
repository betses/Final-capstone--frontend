const SIGNUP_USER = 'SIGNUP_USER';
const LOGIN_USER = 'LOGIN_USER';
const user = [];

export const logInUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const signUp = (payload) => ({
  type: SIGNUP_USER,
  payload,
});

const userReducer = (state = user, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return [action.payload];
    case LOGIN_USER:
      return [action.payload];
    default:
      return state;
  }
};


export default userReducer;
