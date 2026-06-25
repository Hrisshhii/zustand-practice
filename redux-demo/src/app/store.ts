import {configureStore} from '@reduxjs/toolkit';
import { counterSlicer } from './features/counter/counterSlice';
// configureStore Sets up a Redux store in a single function call.

export const store=configureStore({
  reducer:{
    counter: counterSlicer.reducer,
  },
});
