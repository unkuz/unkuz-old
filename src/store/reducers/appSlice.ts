import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SelectedMenu {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  ALLWORKS = 'ALLWORKS',
}
export enum Wheel {
  UP = 'UP',
  DOWN = 'DOWN',
  CANCEL = 'CANCEL',
}
interface AppState {
  showMenu: boolean;
  selectedSection: SelectedMenu;
  mainSection: boolean;
  userWheel: Wheel;
}

const initialState: AppState = {
  showMenu: false,
  selectedSection: SelectedMenu.HOME,
  mainSection: false,
  userWheel: Wheel.CANCEL,
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
    setWheel: (state, action: PayloadAction<Wheel>) => {
      state.userWheel = action.payload;
    },
    cancelWheel: (state) => {
      state.userWheel = Wheel.CANCEL;
    },
  },
});
export const { toggleShowMenu, selected, goMainSection, setWheel, cancelWheel } = appSlice.actions;
export const appReducer = appSlice.reducer;
