import { authReducer } from '@reducers/auth';
import { fetchReducer } from '@reducers/fetch';
import { uiChangeReducer } from '@reducers/uiChange';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  fetchedData: fetchReducer,
  uiChange: uiChangeReducer,
});
