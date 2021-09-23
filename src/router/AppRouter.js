import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './TabRouter';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={BottomTabs} />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppRouter;
