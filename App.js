import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/router/RootNavigation';
import Root from './src/router/Root';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Root />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
