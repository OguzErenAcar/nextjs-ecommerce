import { createSlice,PayloadAction } from "@reduxjs/toolkit";



type StateType={
    width:number
}
 const initialState={
    width:0
 }

export const ScreenSettingsSlice=createSlice({
    name:"ScreenSettings",
    initialState
    ,reducers:{
        settWidth:(state,action:PayloadAction<number>)=>{
            state.width=action.payload
            console.log(state.width)
        }
    }
})

export default ScreenSettingsSlice.reducer
export const {settWidth}=ScreenSettingsSlice.actions