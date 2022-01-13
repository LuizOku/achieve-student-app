import { combineReducers } from 'redux';

import appReducer from './appReducer';
import authReducer from './authReducer';
import studentReducer from './studentReducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  student: studentReducer,
});
