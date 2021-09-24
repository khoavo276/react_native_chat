import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import messageGift from '../assets/lottiefiles/message.json';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('SignInScreen');
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView source={messageGift} autoPlay resizeMode="contain" loop />
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

export default SplashScreen;
