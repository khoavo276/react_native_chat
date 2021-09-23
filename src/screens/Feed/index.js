/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ToolBar from '../../components/common/ToolBar';
import BackIcon from '../../components/common/BackIcon';
import * as RootNavigation from '../../router/RootNavigation';
import LoadingView from '../../components/common/LoadingView';
import TextNormal from '../../components/common/TextNormal';
import {useDispatch, useSelector} from 'react-redux';
import {getListUser} from '../../store/getListUser';

const Feed = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.users.loading);
  const listUser = useSelector((state) => state.users.listUser);

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  return (
    <View style={styles.container}>
      <ToolBar
        LeftComponent={
          <BackIcon
            iconName={'menu'}
            onPress={() => RootNavigation.toggleDrawer()}
          />
        }
        center={'Feed'}
      />
      {loading && <LoadingView />}
      {/* <Text>{listUser}</Text> */}
      <FlatList
        data={listUser}
        renderItem={(item) => {
          return <TextNormal>{item.item.login}</TextNormal>;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Feed;
