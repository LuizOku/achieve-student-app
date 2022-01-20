import * as React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Courses from './courses';

const Stack = createStackNavigator();

function CourseStack() {
  return (
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
}

export default CourseStack;
