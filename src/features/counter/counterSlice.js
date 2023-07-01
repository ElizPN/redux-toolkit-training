import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
// invoking createSlice , and assigning to counterSlice.

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // actions and corresponding reduser functions are combined
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
        state.count = 0
    },
    incrementByAmount: (state, action) => {
        state.count += action.payload
    },
    multiplyByAmount: (state, action) => {
      state.count *= action.payload
    }
  },
});
// export actions
export const { increment, decrement, reset, incrementByAmount, multiplyByAmount } =
  counterSlice.actions;
// we need export whole reduser because store will need that
export default counterSlice.reducer;
