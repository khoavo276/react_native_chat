import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name={'home'} size={50} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
