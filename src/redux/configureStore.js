import { configureStore } from '@reduxjs/toolkit';
import portfolio from './portfolio';

const store = configureStore({
  reducer: {
    portfolio,
  },
});

export default store;
