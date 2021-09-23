import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {COLORS} from '../../constants';
import ToolBar from '../../components/common/ToolBar';
import {getUsers} from '../../api/Api';
import TextNormal from '../../components/common/TextNormal';
import LoadingView from '../../components/common/LoadingView';

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    handleGetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUsers = async () => {
    // props.showLoading();
    setLoading(true);
    try {
      let response = await getUsers();
      setUsers(response);
    } catch (e) {
      console.log('handle get users error', e);
    }
    // setLoading(false);
    setTimeout(() => {
      // props.hideLoading();
      setLoading(false);
    }, 250);
  };

  return (
    <View style={styles.container}>
      <ToolBar title={'Profile'} />
      {loading && <LoadingView />}
      <FlatList
        data={users}
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
    backgroundColor: COLORS.white,
  },
});

export default Profile;
