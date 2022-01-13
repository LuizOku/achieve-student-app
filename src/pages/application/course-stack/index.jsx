import * as React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Courses from './courses';

const Stack = createStackNavigator();

const CourseStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white',
      },
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen name="courses" component={Courses} />
  </Stack.Navigator>
);

export default CourseStack;
