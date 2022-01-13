import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from './types';

export const setToken = (obj) => async (dispatch) => {
  AsyncStorage.setItem('achieve-token', JSON.stringify(obj));
  dispatch({
    type: auth.setToken,
    payload: obj,
  });
};

export const resetToken = () => async (dispatch) => {
  AsyncStorage.removeItem('achieve-token');
  dispatch({
    type: auth.resetToken,
  });
};
