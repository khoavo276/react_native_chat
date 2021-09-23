import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppRouter from './AppRouter';
import DrawerMenu from '../components/common/DrawerMenu';

const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      screenOptions={{swipeEnabled: false}}
      drawerContent={() => <DrawerMenu />}
      drawerPosition="left">
      <Drawer.Screen name={'Main'} component={AppRouter} />
    </Drawer.Navigator>
  );
};

export default Root;
