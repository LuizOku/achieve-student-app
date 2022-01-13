import { app } from '../actions/types';

const initialState = {
  snackbar: {
    open: false,
    text: '',
    type: 'ERROR',
    timeoutId: null,
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case app.setSnackbar:
      return { ...state, snackbar: { ...state.snackbar, ...action.payload } };

    case app.resetSnackbar:
      return {
        ...state,
        snackbar: initialState.snackbar,
      };

    default:
      return state;
  }
};

export default appReducer;
