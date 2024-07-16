import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/userSlice";
export const storeUser = configureStore({
    reducer:{
        user:userReducer,
    }
});