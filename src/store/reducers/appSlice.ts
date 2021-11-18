import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMenu: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleShowMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});
export const { toggleShowMenu } = appSlice.actions;
export const appReducer = appSlice.reducer;
