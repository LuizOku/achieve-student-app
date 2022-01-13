import React, { createRef, useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { registerRootComponent } from 'expo';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-gesture-handler';

import { setSnackbar } from './actions/appActions';
import { Snackbar } from './components';
import store from './config/store';
import Routes from './routes/Routes';

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./config/reactotron');
}

const navigationRef = createRef();

const App = ({ skipLoadingScreen }) => {
  const dispatch = useDispatch();
  const { snackbar } = useSelector((state) => state.app);

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        // Cache the images here:
        const images = [require('./assets/achieve-icon.png')];
        const cacheImages = images.map((image) =>
          Asset.fromModule(image).downloadAsync()
        );
        Promise.all(cacheImages);
        SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.log('Error trying to run the App', e);
      } finally {
        setLoadingComplete(true);
        setTimeout(SplashScreen.hideAsync, 100);
      }
    };

    loadResourcesAndDataAsync();
  }, [dispatch]);

  const closeSnackbar = () => dispatch(setSnackbar({ open: false }));

  if (!isLoadingComplete && !skipLoadingScreen) {
    return null;
  }

  return (
    <>
      <Routes containerRef={navigationRef} />
      {snackbar.open && (
        <Snackbar
          open={snackbar.open}
          type={snackbar.type}
          onPress={closeSnackbar}
        >
          {snackbar.text}
        </Snackbar>
      )}
    </>
  );
};

export default registerRootComponent((props) => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
));
