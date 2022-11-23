import { authReducer } from '@reducers/auth';
import { fetchReducer } from '@reducers/httpGet';
import { postReducer } from '@reducers/httpPost';
import { uiChangeReducer } from '@reducers/uiChange';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  postData: postReducer,
  fetchedData: fetchReducer,
  uiChange: uiChangeReducer,
});
