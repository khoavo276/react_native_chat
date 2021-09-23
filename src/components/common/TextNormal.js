import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {sizeFont} from '../../ultils/SizeUltils';

const TextNormal = ({style, children, multiline, numberOfLines, onPress}) => {
  return (
    <Text
      style={[styles.text, style]}
      onPress={onPress}
      numberOfLines={multiline ? numberOfLines : 1}>
      {children}
    </Text>
  );
};

TextNormal.propTypes = {
  style: PropTypes.any,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizeFont(14),
  },
});

export default TextNormal;
