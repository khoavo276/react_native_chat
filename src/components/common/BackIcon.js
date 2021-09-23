import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../../router/RootNavigation';
import {sizeFont, sizeWidth} from '../../ultils/SizeUltils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import TextNormal from '../../components/common/TextNormal';

const BackIcon = ({iconName, style, text, onPress}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      RootNavigation.goBack();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      hitSlop={{top: 20, right: 20, left: 20, bottom: 20}}>
      <View style={[styles.backIconContainer, style]}>
        <Ionicons name={iconName} size={30} color={COLORS.white} />
        {text && <TextNormal style={styles.text} children={text} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backIconContainer: {
    padding: sizeWidth(7),
  },
  text: {
    fontSize: sizeFont(14),
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default BackIcon;
