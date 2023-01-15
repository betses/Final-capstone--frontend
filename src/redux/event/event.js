const url = 'https://eventifyhub.herokuapp.com/events';
const ADD_EVENT = 'ADD_EVENT';
const GET_EVENTS = 'GET_EVENTS';
const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
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
export const allEvents = (payload) => ({
  type: GET_ALL_EVENTS,
  payload,
});

export const createEvent = (data) => async (dispatch) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.status === 201) {
    const final = await response.json();
    dispatch(addEvent(final));
    return { message: 'the event has been created', status: true };
  }
  return { message: 'the event has not been created', status: false };
};

const eventurl = 'https://eventifyhub.herokuapp.com/events';
export const getEvent = () => async (dispatch) => {
  await fetch(eventurl).then(async (result) => {
    // const res = result.data;
    const res = await result.json();
    const me = res.filter((m) => m.user_id === local.id);
    dispatch(getAllEvent(me));
  });
};

export const getAllEvents = () => async (dispatch) => {
  await fetch(eventurl).then(async (result) => {
    // const res = result.data;
    const res = await result.json();
    dispatch(allEvents(res));
  });
};

export const deleteEvent = (data) => (dispatch) => {
  fetch(`https://eventifyhub.herokuapp.com/events/${data}`, {
    method: 'DELETE',
  }).then(async (response) => {
    if (response.status === 200) {
      dispatch(getEvent());
    }
  });
};

const eventReducer = (state = events, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [action.payload];
    case GET_EVENTS:
      return action.payload;
    case GET_ALL_EVENTS:
      return action.payload;
    default:
      return state;
  }
};

export default eventReducer;
