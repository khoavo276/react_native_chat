import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import PropTypes from 'prop-types';
import TextNormal from '../../components/common/TextNormal';
import {AppStyles, COLORS} from '../../constants';
import {TOOL_BAR_HEIGHT} from '../../ultils/Constants';
import {sizeHeight} from '../../ultils/SizeUltils';

const ToolBar = ({
  LeftComponent,
  CenterComponent,
  RightComponent,
  title,
  center,
  right,
}) => {
  if (title) {
    return (
      <View style={styles.toolBarContainer}>
        <TextNormal
          children={title}
          style={[AppStyles.colorWhite, AppStyles.size18]}
        />
      </View>
    );
  }

  return (
    <View style={styles.toolBarContainer}>
      <View style={styles.leftToolBar}>{LeftComponent}</View>
      <View style={styles.centerToolBar}>
        {center ? (
          <TextNormal
            children={center}
            style={[AppStyles.colorWhite, AppStyles.size18]}
          />
        ) : (
          CenterComponent
        )}
      </View>
      <View style={styles.rightToolBar}>
        {right ? (
          <TextNormal
            children={right}
            style={[AppStyles.colorWhite, AppStyles.size18]}
          />
        ) : (
          RightComponent
        )}
      </View>
    </View>
  );
};

ToolBar.propTypes = {
  LeftComponent: PropTypes.element,
  CenterComponent: PropTypes.element,
  RightComponent: PropTypes.element,
  title: PropTypes.string,
  center: PropTypes.string,
  right: PropTypes.string,
};

const styles = StyleSheet.create({
  toolBarContainer: {
    height: TOOL_BAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.main,
    paddingTop: Platform.OS === 'ios' ? sizeHeight(25) : 0,
  },
  leftToolBar: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightToolBar: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerToolBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToolBar;
