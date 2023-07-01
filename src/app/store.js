import { configureStore } from "@reduxjs/toolkit";
//  counterSlice.reducer, customersSlice.reducer default ecport
import counterReducer from "../features/counter/counterSlice";
import customerReduser from "../features/customers/customersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customers: customerReduser,
  },
});
