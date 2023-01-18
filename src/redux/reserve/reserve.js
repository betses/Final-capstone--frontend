const ADD_EVENT_RESERVE = 'ADD_EVENT_RESERVE';
const GET_EVENTS_RESERVE = 'GET_EVENTS_RESERVE';
const GET_AN_EVENTS_RESERVE = 'GET_AN_EVENTS_RESERVE';
const local = JSON.parse(localStorage.getItem('user'));
const reservation = [];

export const addReserve = (payload) => ({
  type: ADD_EVENT_RESERVE,
  payload,
});

export const getAllReservation = (payload) => ({
  type: GET_EVENTS_RESERVE,
  payload,
});

export const getAnReservation = (payload) => ({
  type: GET_AN_EVENTS_RESERVE,
  payload,
});

export const getAllReserve = () => async (dispatch) => {
  await fetch('https://eventifyhub.herokuapp.com/reserves').then(
    async (result) => {
      const res = await result.json();
      dispatch(getAllReservation(res));
    },
  );
};
const reserveurl = 'https://eventifyhub.herokuapp.com/reserves';
export const getAReserve = () => (dispatch) => {
  fetch(reserveurl).then(async (result) => {
    const res = await result.json();
    const me = res.filter((m) => m.user_id === local.id);
    dispatch(getAnReservation(me));
  });
};

export const createReserve = (data) => async (dispatch) => {
  const response = await fetch(
    'https://eventifyhub.herokuapp.com/reserves',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
  );
  if (response.status === 201) {
    dispatch(getAReserve());
    return { message: 'The event has been reserved', status: true };
  }
  return { message: 'The event has not been reserved', status: false };
};

export const deleteReserve = (data) => (dispatch) => {
  fetch(`https://eventifyhub.herokuapp.com/reserves/${data}`, {
    method: 'DELETE',
  }).then(async (response) => {
    if (response.status === 200) {
      dispatch(getAReserve());
    }
  });
};

const reserveReducer = (state = reservation, action) => {
  switch (action.type) {
    case ADD_EVENT_RESERVE:
      return [action.payload];
    case GET_EVENTS_RESERVE:
      return action.payload;
    case GET_AN_EVENTS_RESERVE:
      return action.payload;
    default:
      return state;
  }
};

export default reserveReducer;
