import { resetToken } from './authActions';
import { resetMe } from './studentActions';
import { app } from './types';

export const setSnackbar = (obj) => async (dispatch) =>
  dispatch({
    type: app.setSnackbar,
    payload: obj,
  });

export const resetSnackbar = () => async (dispatch) =>
  dispatch({
    type: app.resetSnackbar,
  });

export const resetApp = () => (dispatch) => {
  dispatch(resetSnackbar());
  dispatch(resetToken());
  dispatch(resetMe());
};
