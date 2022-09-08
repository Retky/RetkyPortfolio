import { configureStore } from '@reduxjs/toolkit';
import works from './works/worksR';

const store = configureStore({
  reducer: {
    works,
  },
});

export default store;
