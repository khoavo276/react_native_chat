import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/Feed';
import ProfileScreen from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';
import {sizeFont} from '../ultils/SizeUltils';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName, iconColor;

          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          iconColor = focused ? COLORS.main : COLORS.grey54;

          return <Ionicons name={iconName} size={25} color={iconColor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.main,
        inactiveTintColor: COLORS.grey54,
        labelStyle: {
          fontSize: sizeFont(12),
        },
      }}>
      <Tab.Screen name={'Feed'} component={FeedScreen} />
      <Tab.Screen name={'Profile'} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
