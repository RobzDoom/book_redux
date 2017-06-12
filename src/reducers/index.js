import { combineReducers } from 'redux';
import BooksReducer from './random_books'

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
