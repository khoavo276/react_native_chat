import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ItemDrawer from './ItemDrawer';
import {sizeHeight} from '../../ultils/SizeUltils';
import {AppStyles, COLORS} from '../../constants';
import {BOTTOM_BAR_HEIGHT} from '../../ultils/Constants';
import TextNormal from '../../components/common/TextNormal';

const DrawerMenu = () => {
  const ItemTop = [
    {
      icon: 'person',
      title: 'User',
      action: null,
    },
    {
      icon: 'folder',
      title: 'Document',
      action: null,
    },
    {
      icon: 'image',
      title: 'Category',
      action: null,
    },
  ];

  const ItemBottom = [
    {
      icon: 'information-circle',
      title: 'About',
      action: null,
    },
    {
      icon: 'settings',
      title: 'Settings',
      action: null,
    },
    {
      icon: 'log-out',
      title: 'Log out',
      action: null,
    },
  ];

  const renderItemMenuTop = (item) => {
    return (
      <View>
        <ItemDrawer
          name={item.item.icon}
          title={item.item.title}
          action={item.item.action}
        />
        {item.index !== ItemTop.length - 1 && <View style={styles.line} />}
      </View>
    );
  };

  const renderItemMenuBottom = (item) => {
    return (
      <View>
        <ItemDrawer
          name={item.item.icon}
          title={item.item.title}
          action={item.item.action}
        />
        {item.index !== ItemBottom.length - 1 && <View style={styles.line} />}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerHeader}>
          <TextNormal
            children={'Copy right Khoa Vo'}
            style={AppStyles.colorWhite}
          />
        </View>
        <FlatList
          data={ItemTop}
          renderItem={renderItemMenuTop}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.bottomMenu}>
        <FlatList
          data={ItemBottom}
          renderItem={renderItemMenuBottom}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  containerHeader: {
    height: sizeHeight(150),
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMenu: {
    marginBottom: BOTTOM_BAR_HEIGHT,
  },
  line: {
    height: sizeHeight(1),
    backgroundColor: COLORS.grey85,
  },
});
