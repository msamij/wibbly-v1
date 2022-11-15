import { authReducer } from '@reducers/auth';
import { fetchReducer } from '@reducers/fetch';
import { uiChangeReducer } from '@reducers/render';
import { combineReducers } from 'redux';

export default combineReducers({
  products: fetchReducer,
  auth: authReducer,
  render: uiChangeReducer,
});
