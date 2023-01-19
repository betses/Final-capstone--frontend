import { signUp, logInUser } from './user';

const url = 'https://eventifyhub.herokuapp.com/users';
const getUser = (data) => async (dispatch) => {
  const result = await fetch(url);
  const final = await result.json();
  const me = final.filter((m) => m.username === data);
  if (me.length === 0) {
    return 'The user does not exist';
  }
  const arr = me[0];
  return dispatch(logInUser(arr));
};

export const createUser = (data) => async (dispatch) => {
  const response = await fetch('https://eventifyhub.herokuapp.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const final = await response.json();
  if (response.status === 201) {
    dispatch(signUp(final));
  } else {
    const responseUser = final.username[0];
    return responseUser;
  }
  return 'finals';
};

export default getUser;
