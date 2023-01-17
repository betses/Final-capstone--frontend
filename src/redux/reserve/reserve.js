const ADD_EVENT_RESERVE = 'ADD_EVENT_RESERVE';
const GET_EVENTS_RESERVE = 'GET_EVENTS';
const reservation = [];

export const addReserve = (payload) => ({
  type: ADD_EVENT_RESERVE,
  payload,
});

export const getAllReservation = (payload) => ({
  type: GET_EVENTS_RESERVE,
  payload,
});

export const getAllReserve = (id) => async (dispatch) => {
  await fetch(`https://eventifyhub.herokuapp.com/events/${id}/reserves`).then(
    async (result) => {
      // const res = result.data;
      const res = await result.json();
      dispatch(getAllReservation(res));
    },
  );
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
    const final = await response.json();
    dispatch(addReserve(final));
    return { message: 'the event has been created', status: true };
  }
  return { message: 'the event has not been created', status: false };
};

const reserveReducer = (state = reservation, action) => {
  switch (action.type) {
    case ADD_EVENT_RESERVE:
      return [action.payload];
    case GET_EVENTS_RESERVE:
      return action.payload;
    default:
      return state;
  }
};

export default reserveReducer;
