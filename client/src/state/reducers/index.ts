import { authReducer } from '@reducers/auth';
import { fetchReducer } from '@reducers/fetchProducts';
import { combineReducers } from 'redux';

export default combineReducers({
  products: fetchReducer,
  auth: authReducer,
});
