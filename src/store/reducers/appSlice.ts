import { createSlice } from '@reduxjs/toolkit';

export enum SelectedMenu {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  ALLWORKS = 'ALLWORKS',
}
interface AppState {
  showMenu: boolean;
  selectedSection: SelectedMenu;
  mainSection: boolean;
}

const initialState: AppState = {
  showMenu: false,
  selectedSection: SelectedMenu.HOME,
  mainSection: false,
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
    goMainSection: (state) => {
      state.mainSection = true;
    },
  },
});
export const { toggleShowMenu, selected, goMainSection } = appSlice.actions;
export const appReducer = appSlice.reducer;
