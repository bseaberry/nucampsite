import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/counter/campsitesSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer
  },
});
