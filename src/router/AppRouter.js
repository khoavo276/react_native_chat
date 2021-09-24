import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './TabRouter';
import DetailsScreen from '../screens/Details';
import SignInScreen from '../screens/Authen/SignInScreen';
import SignUpScreen from '../screens/Authen/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
       <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'Home'} component={BottomTabs} />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppRouter;
