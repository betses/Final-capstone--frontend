const SIGNUP_USER = 'SIGNUP_USER';
const LOGIN_USER = 'LOGIN_USER';
const SIGNOUT_USER = 'SIGNOUT_USER';
const local = (localStorage.getItem('user') === 'undefined')?false:localStorage.getItem('user');
let user = [];
if (local) {
  user = [JSON.parse(local)];
} else {
  user = [];
}

export const logInUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const signUp = (payload) => ({
  type: SIGNUP_USER,
  payload,
});

export const signOut = () => ({
  type: SIGNOUT_USER,
});

const userReducer = (state = user, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return [action.payload];
    case LOGIN_USER:
      return [action.payload];
    case SIGNOUT_USER:
      return [];
    default:
      return state;
  }
};

export default userReducer;
