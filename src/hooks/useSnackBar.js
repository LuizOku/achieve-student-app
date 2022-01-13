import { useStore } from 'react-redux';

import { show, hide } from '../config/snackbar';

const useSnackbar = () => {
  const store = useStore();

  return {
    show: (text, options) => show(store, text, options),
    hide: () => hide(store),
  };
};

export default useSnackbar;
