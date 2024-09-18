import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/counter/campsitesSlice';
import { commentsReducer } from '../features/comments/commentSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionSlice';
import { userReducer } from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user: userReducer
    },
    middleware: (getDefaultMiddeware) =>  getDefaultMiddeware().concat([logger])
  
});
