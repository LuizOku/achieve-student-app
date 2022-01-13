import * as React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import AppTabs from '../pages/application/AppTabs';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import colors from '../utils/colors';

const Stack = createStackNavigator();

const Routes = ({ containerRef, initialNavigationState }) => {
  const { token } = useSelector((state) => state.auth);
  return (
    <NavigationContainer
      ref={containerRef}
      initialState={initialNavigationState}
    >
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.WHITE,
          },
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        {!token ? (
          <>
            <Stack.Screen name="sign-in" component={SignIn} />
            <Stack.Screen name="sign-up" component={SignUp} />
          </>
        ) : (
          <Stack.Screen
            name="application"
            component={AppTabs}
            options={{ ...TransitionPresets.RevealFromBottomAndroid }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
