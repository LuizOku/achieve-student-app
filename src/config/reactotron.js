import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ host: '192.168.18.125' })
  .useReactNative()
  .use(asyncStorage())
  .use(reactotronRedux())
  .connect();

tron.clear();

const nativeLog = console.log.bind(undefined);

console.log = (...args) => {
  nativeLog(...args);
  tron.log(...args);
};

export default tron;
