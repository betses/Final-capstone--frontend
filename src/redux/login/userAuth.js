import { signUp, logInUser } from './user';

const url = 'https://eventifyhub.herokuapp.com/users';
const getUser = (data) => async (dispatch) => {
  const result = await fetch(url);
  const final = await result.json();
  const me = final.filter((m) => m.username === data);
  if (me.length === 0) {
    // alert('username does not exist');
    return 'The user does not exist';
  }
  const arr = me[0];
  return dispatch(logInUser(arr));
};

export const createUser = (data) => (dispatch) => {
  fetch('https://eventifyhub.herokuapp.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.status === 201) {
      const final = await response.json();
      dispatch(signUp(final));
    }
  });
};

export default getUser;
