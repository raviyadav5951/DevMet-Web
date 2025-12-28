import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
//Step 1 : configureStore
const appStore = configureStore({
  reducer: {
    //Step 3: import userReducer and add here
    user: userReducer,
  },
});

export default appStore;
