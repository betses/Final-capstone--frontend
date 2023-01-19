const url = 'https://eventifyhub.herokuapp.com/events';
const ADD_EVENT = 'ADD_EVENT';
const GET_EVENT = 'GET_EVENT';
const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
const initialState = {
  event: {},
  events: [],
  message: null,
};

export const addEvent = (payload) => ({
  type: ADD_EVENT,
  payload,
});

export const anEvent = (payload) => ({
  type: GET_EVENT,
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
export const getEvent = () => (dispatch) => {
  fetch(eventurl).then(async (result) => {
    const res = await result.json();
    const local = JSON.parse(localStorage.getItem('user'));
    const me = res.filter((m) => m.user_id === local.id);
    dispatch(allEvents(me));
  });
};

export const getEvents = () => async (dispatch) => {
  await fetch(eventurl).then(async (result) => {
    const res = await result.json();
    dispatch(allEvents(res));
  });
};

export const getAnEvent = (id) => async (dispatch) => {
  await fetch(`https://eventifyhub.herokuapp.com/events/${id}`).then(
    async (result) => {
      const res = await result.json();
      dispatch(anEvent(res));
    },
  );
};

export const removeAnEvent = () => (dispatch) => {
  const empity = {};
  dispatch(anEvent(empity));
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

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        message: [action.payload],
      };
    case GET_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
