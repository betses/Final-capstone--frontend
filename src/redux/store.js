import { configureStore } from '@reduxjs/toolkit';
import userReducer from './login/user';
import eventReducer from './event/event';

const store = configureStore({
  reducer: { user: userReducer, event: eventReducer },
});

export default store;
