import { configureStore } from '@reduxjs/toolkit';
import userReducer from './login/user';
import eventReducer from './event/event';
import reserveReducer from './reserve/reserve';

const store = configureStore({
  reducer: { user: userReducer, event: eventReducer, reserve: reserveReducer },
});

export default store;
