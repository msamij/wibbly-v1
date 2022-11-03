import { combineReducers } from 'redux';
import { fetchReducer } from './fetchProducts';

export default combineReducers({
  products: fetchReducer,
});
