import * as React from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../../utils/colors';
import CourseStack from './course-stack';
import ProfileStack from './profile-stack';
import SearchStack from './search-stack';

const Tabs = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        lazy: true,
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
    >
      <Tabs.Screen
        name="courses-tab"
        options={() => ({
          headerShown: false,
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
        name="search-tab"
        options={() => ({
          headerShown: false,
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
        name="profile-tab"
        options={() => ({
          headerShown: false,
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
}

export default AppTabs;
