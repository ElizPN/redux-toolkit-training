import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: ["liza"],
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
  },
});
console.log(customersSlice.getInitialState());

export const { addCustomer } = customersSlice.actions;
export default customersSlice.reducer;
