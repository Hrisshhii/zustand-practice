import { createSlice } from "@reduxjs/toolkit";
// Replaces traditional switch statements.
// It allows you to write a single file that contains the initial state, reducers, and action creators all at once.

export const counterSlicer=createSlice({
  name:"counter",
  initialState:{value:0},
  reducers:{
    increment:(state)=>{state.value+=1},
    decrement:(state)=>{state.value-=1}
  }
});

export const {increment,decrement}=counterSlicer.actions;
export default counterSlicer.reducer;