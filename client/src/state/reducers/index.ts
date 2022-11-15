import { authReducer } from '@reducers/auth';
import { fetchReducer } from '@reducers/fetch';
import { combineReducers } from 'redux';

export default combineReducers({
  products: fetchReducer,
  auth: authReducer,
});
