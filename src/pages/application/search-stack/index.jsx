import * as React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import SearchCourse from './search-course';

const Stack = createStackNavigator();

const SearchStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
      },
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen name="search-course" component={SearchCourse} />
  </Stack.Navigator>
);

export default SearchStack;
