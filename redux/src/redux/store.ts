import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/counter/counterSlice";

export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

// export default reduxStore;
