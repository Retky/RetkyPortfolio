import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import works from './works/worksR';

const store = createStore(
  works,
  applyMiddleware(thunk),
);

export default store;
