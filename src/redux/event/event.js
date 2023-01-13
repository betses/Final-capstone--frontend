const url = 'https://eventifyhub.herokuapp.com/events';
const ADD_EVENT = 'ADD_EVENT';
const GET_EVENTS = 'GET_EVENTS';
const local = JSON.parse(localStorage.getItem('user'));
const events = [];

export const addEvent = (payload) => ({
  type: ADD_EVENT,
  payload,
});

export const getAllEvent = (payload) => ({
  type: GET_EVENTS,
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

const eventurl = 'https://eventifyhub.herokuapp.com/events';
export const getEvent = () => async (dispatch) => {
  await fetch(eventurl)
    .then(async (result) => {
      // const res = result.data;
      const res = await result.json();
      const me = res.filter((m) => m.user_id === local.id);
      // console.log(res);
      dispatch(getAllEvent(me));
    });
};

export const deleteEvent = (data) => () => {
  fetch(`https://eventifyhub.herokuapp.com/events/${data}`, {
    method: 'DELETE',
  }).then(async (response) => {
    if (response.status === 200) {
      getEvent();
    }
  });
};

const eventReducer = (state = events, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [action.payload];
    case GET_EVENTS:
      return action.payload;
    default:
      return state;
  }
};

export default eventReducer;
