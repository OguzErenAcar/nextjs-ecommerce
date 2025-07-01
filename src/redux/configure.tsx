import {configureStore} from "@reduxjs/toolkit"
import  authSlice  from "./stores/authStore";
import { ScreenSettingsSlice } from "./stores/screenSettStore";


export const store =configureStore({
    reducer:{
        auth:authSlice,
        screen:ScreenSettingsSlice.reducer
    }
});

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


