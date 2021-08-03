import { createSlice } from '@reduxjs/toolkit';
import { status } from '../../util';

const initialState = {
  data: null,
  userStatus: status.idle,
};

const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    setUserStatus: (state, action) => {
      state.userStatus = action.payload;
    },
  },
});

export const { setUser, setUserStatus } = user.actions;
export const userSelector = (state) => state.user.data;
export const userStatusSelector = (state) => state.user.userStatus;
export default user.reducer;
