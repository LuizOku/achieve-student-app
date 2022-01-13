import { Keyboard } from 'react-native';

import { app } from '../actions/types';

const DEFAULT_OPTIONS = {
  type: 'ERROR',
  autoHide: true,
};

const calculateHideTime = (text) => {
  const words = text.split(' ').length;

  return 3000 + words * 250;
};

const getOption = (name, options) => {
  if (options[name] !== undefined) return options[name];
  return DEFAULT_OPTIONS[name];
};

const open = (dispatch, text, type) =>
  dispatch({
    type: app.setSnackbar,
    payload: {
      open: true,
      text,
      type,
    },
  });

const close = (dispatch) =>
  dispatch({
    type: app.setSnackbar,
    payload: {
      open: false,
    },
  });

const updateTimeoutId = (dispatch, timeoutId) =>
  dispatch({
    type: app.setSnackbar,
    payload: { timeoutId },
  });

export const show = (store, text, options = DEFAULT_OPTIONS) => {
  const { dispatch } = store;
  const { snackbar } = store.getState().app;
  Keyboard.dismiss();

  const type = getOption('type', options);
  const autoHide = getOption('type', options);

  if (snackbar.open) {
    close(dispatch);

    clearTimeout(snackbar.timeoutId);
    const id = setTimeout(() => open(dispatch, text, type), 300);
    updateTimeoutId(dispatch, id);
  } else {
    open(dispatch, text, type);
  }

  if (autoHide) {
    clearTimeout(snackbar.timeoutId);
    const id = setTimeout(() => close(dispatch), calculateHideTime(text));
    updateTimeoutId(dispatch, id);
  }
};

export const hide = (store) => close(store.dispatch);
