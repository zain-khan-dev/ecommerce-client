import { configureStore, Store } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice"


export const store = configureStore({
    reducer:{
        'login': loginReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
