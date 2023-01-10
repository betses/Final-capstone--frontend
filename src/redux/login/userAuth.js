import { signUp, logInUser } from './user';

const url = 'http://127.0.0.1:3000/users';
const getUser = (data) => async (dispatch) => {
  const result = await fetch(url);
  const final = await result.json();
  const me = final.filter((m) => m.username === data);
  if (me.length === 0) {
    alert('username does not exist');
  } else {
    const arr = me[0];
    dispatch(logInUser(arr));
  }
};
export const createUser = (data) => (dispatch) => {
  fetch('http://127.0.0.1:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(async (response) => {
    console.log(response);
    if (response.status === 201) {
      const final = await response.json();
      console.log(final);
      dispatch(signUp(final));
    }
  });
};

export default getUser;
