// const userlocal = JSON.parse(localStorage.getItem('user'));
// const userID = userlocal.id;

// export const createEvent = (data) => (dispatch) => {
//   fetch(`http://127.0.0.1:3000/users/${userID}/events`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   }).then(async (response) => {
//     if (response.status === 201) {
//       const final = await response.json();
//       dispatch(signUp(final));
//     }
//   });
// };

// export default createEvent;
