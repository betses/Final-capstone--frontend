const userlocal = JSON.parse(localStorage.getItem('user'));
const userID = userlocal.id;
const url = `http://127.0.0.1:3000/users/${userID}/events`;
const ADD_EVENT = 'ADD_EVENT';
const events = [];

export const addEvent = (payload) => ({
  type: ADD_EVENT,
  payload,
});

export const createEvent = (data) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.status === 201) {
      const final = await response.json();
      dispatch(addEvent(final));
    }
  });
};

const eventReducer = (state = events, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [action.payload];
    default:
      return state;
  }
};

export default eventReducer;
