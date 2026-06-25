import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
// configureStore Sets up a Redux store in a single function call.

export const store=configureStore({
  reducer:{
    counter: counterReducer,
  },
});

// exporting types
export type RootState = ReturnType<typeof store.getState>;
