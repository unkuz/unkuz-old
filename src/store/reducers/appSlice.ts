import { createSlice } from '@reduxjs/toolkit';

export enum SelectedMenu{
  HOME= "HOME",
  ABOUT ="ABOUT",
  ALLWORKS ="ALLWORKS"
}
interface AppState{
  showMenu:boolean;
  selectedSection:SelectedMenu
}

const initialState:AppState = {
  showMenu: false,
  selectedSection: SelectedMenu.HOME,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleShowMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    selected: (state, action) => {
      state.selectedSection = action.payload;
    },
  },
});
export const { toggleShowMenu,selected } = appSlice.actions;
export const appReducer = appSlice.reducer;
