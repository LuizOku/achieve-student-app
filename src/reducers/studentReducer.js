import { student } from '../actions/types';

const initialState = {
  me: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case student.setMe:
      return {
        ...state,
        me: action.payload,
      };

    case student.resetMe:
      return { ...state, me: initialState.me };

    default:
      return state;
  }
};

export default studentReducer;
