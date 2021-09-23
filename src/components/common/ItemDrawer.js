import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {sizeHeight, sizeWidth} from '../../ultils/SizeUltils';
import {AppStyles, COLORS} from '../../constants';
import TextNormal from '../../components/common/TextNormal';

const ItemDrawer = ({name, title, action}) => {
  return (
    <TouchableOpacity style={styles.containerItemDrawer} onPress={action}>
      <View style={styles.containerIcon}>
        <Icon name={name} size={30} color={COLORS.main} />
      </View>
      <TextNormal
        style={[styles.textContainer]}
        children={title}
      />
    </TouchableOpacity>
  );
};

ItemDrawer.propTypes = {
  action: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  containerItemDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: sizeWidth(10),
    color: COLORS.black,
  },
  containerIcon: {
    width: sizeWidth(40),
    height: sizeHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemDrawer;
