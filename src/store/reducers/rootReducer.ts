import { appReducer } from '@/store/reducers/appSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  app: appReducer,
});
