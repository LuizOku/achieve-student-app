import * as React from 'react';

import { Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../../utils/colors';
import ProfileStack from './profile-stack';
import SearchStack from './search-stack';
import CourseStack from './course-stack';

const Tabs = createBottomTabNavigator();

const AppTabs = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: colors.PRIMARY,
      labelStyle: { fontSize: 12 },
      style: { marginBottom: -1 },
    }}
    lazy={false}
  >
    <Tabs.Screen
      name="courses"
      options={() => ({
        tabBarVisible: true,
        title: 'Courses',
        tabBarIcon: ({ focused }) => (
          <FontAwesome
            name="graduation-cap"
            color={focused ? colors.PRIMARY : '#8c8d8e'}
            size={24}
          />
        ),
      })}
      component={CourseStack}
    />
    <Tabs.Screen
      name="search"
      options={() => ({
        tabBarVisible: true,
        title: 'Enroll',
        tabBarIcon: ({ focused }) => (
          <FontAwesome
            name="search"
            color={focused ? colors.PRIMARY : '#8c8d8e'}
            size={24}
          />
        ),
      })}
      component={SearchStack}
    />
    <Tabs.Screen
      name="profile"
      options={() => ({
        tabBarVisible: true,
        title: 'Perfil',
        tabBarIcon: ({ focused }) => (
          <FontAwesome
            name="user"
            color={focused ? colors.PRIMARY : '#8c8d8e'}
            size={24}
          />
        ),
      })}
      component={ProfileStack}
    />
  </Tabs.Navigator>
);

export default AppTabs;
