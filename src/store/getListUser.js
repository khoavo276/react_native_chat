import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../api/Api';

const slice = createSlice({
  name: 'users',
  initialState: {
    listUser: [],
    loading: true,
  },
  reducers: {
    getUserSuccess: (state, action) => {
      state.listUser = action.payload;
      state.loading = false;
    },
  },
});

export default slice.reducer;

// Actions

const {getUserSuccess} = slice.actions;

export const getListUser = () => async (dispatch) => {
  try {
    // await api.post("/api/auth/login/", { username, password });
    let response = await getUsers();

    dispatch(getUserSuccess(response));
  } catch (e) {
    return console.error(e.message);
  }
};
