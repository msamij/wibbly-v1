import { fetchReducer } from '@reducers/fetchProducts';
import { combineReducers } from 'redux';

export default combineReducers({
  products: fetchReducer,
});
