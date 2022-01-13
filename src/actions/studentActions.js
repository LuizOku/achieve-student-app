import AsyncStorage from '@react-native-async-storage/async-storage';

import { student } from './types';

export const setMe = (obj) => async (dispatch) => {
  AsyncStorage.setItem('achieve-me', JSON.stringify(obj));
  dispatch({
    type: student.setMe,
    payload: obj,
  });
};

export const resetMe = () => async (dispatch) => {
  AsyncStorage.removeItem('achieve-me');
  dispatch({
    type: student.resetMe,
  });
};
