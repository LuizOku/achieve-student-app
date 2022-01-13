import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import * as snackbar from '../config/snackbar';
import store from '../config/store';
import {
  AuthError,
  NetworkError,
  NotFoundError,
  ForbiddenError,
  InternalError,
  ValidationError,
} from './errors';

/**
 * Default error handling
 */
const handleError = (error) => {
  switch (error.constructor) {
    case AuthError:
      snackbar.show(store, error.message);
      break;

    case NetworkError:
      snackbar.show(store, 'Please, check your internet connection');
      break;

    case NotFoundError:
      snackbar.show(store, 'Resource was not found');
      break;

    case ForbiddenError:
      snackbar.show(store, error.message);
      break;

    case InternalError:
      snackbar.show(store, error.message);
      break;

    case ValidationError:
      snackbar.show(store, error.message);
      break;

    default:
      snackbar.show(store, 'An unexpected error happened');
      break;
  }
};

const api = axios.create();

api.interceptors.request.use(
  async (request) => {
    // Autenticação
    const authToken = await AsyncStorage.getItem('achieve-token');
    if (authToken) {
      const tokenInfo = JSON.parse(authToken);
      request.headers.authorization = `${tokenInfo}`;
    }
    const source = axios.CancelToken.source();
    const timeoutID = setTimeout(() => {
      source.cancel({ config: request });
    }, 60000);
    request.cancelToken = source.token;
    request.timeoutID = timeoutID;
    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const requestConfig = error.config;

    try {
      const status = error?.response?.status;
      const data = error?.response?.data;

      if (!status)
        throw new NetworkError('Please, check your internet connection');

      if (status >= 500) throw new InternalError(data.message);

      if (status === 404) throw new NotFoundError('Resource was not found');

      if (status === 403)
        throw new ForbiddenError('You do not have access to this resource');

      if (status === 400) throw new ValidationError(data.message);

      throw error;
    } catch (e) {
      if (requestConfig.handleError !== false) handleError(e);
      if (requestConfig.suppressError === false) throw e;
    }
  }
);

export default api;
