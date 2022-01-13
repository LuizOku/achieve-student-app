import * as React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Profile from './profile';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
      },
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen name="profile" component={Profile} />
  </Stack.Navigator>
);

export default ProfileStack;
