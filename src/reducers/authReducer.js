import { auth } from '../actions/types';

const initialState = {
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case auth.setToken:
      return {
        ...state,
        token: action.payload,
      };

    case auth.resetToken:
      return { ...state, token: initialState.token };

    default:
      return state;
  }
};

export default authReducer;
