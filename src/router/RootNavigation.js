import * as React from 'react';
import {
  StackActions,
  CommonActions,
  DrawerActions,
} from '@react-navigation/native';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const push = (name, params) => {
  navigationRef.current?.dispatch(StackActions.push(name, params));
};

export const reset = (name) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: name}],
    }),
  );
};

export const toggleDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};

export const openDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
};

export const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
};
