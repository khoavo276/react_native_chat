import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Platform,
  Dimensions,
} from 'react-native';
import {sizeWidth} from '../../ultils/SizeUltils';
import {COLORS} from '../../constants';

const LoadingView = () => {
  const size = Platform.OS === 'ios' ? 'large' : sizeWidth(34);
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        animating={true}
        size={size}
        color={COLORS.main}
      />
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

export default LoadingView;
