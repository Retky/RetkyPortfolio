import { configureStore } from '@reduxjs/toolkit';
import portfolio from './portfolio';
import projects from './projects';

const store = configureStore({
  reducer: {
    portfolio,
    projects,
  },
});

export default store;
