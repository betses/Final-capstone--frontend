import { configureStore } from '@reduxjs/toolkit';
import userReducer from './login/user';

const store = configureStore({
  reducer: { user: userReducer },
});

export default store;
