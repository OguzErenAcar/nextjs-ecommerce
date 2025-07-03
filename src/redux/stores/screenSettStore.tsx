import { createSlice,PayloadAction } from "@reduxjs/toolkit";



type StateType={
    width:number,
    height:number
}
 const initialState={
    width:0,
    height:0,
    settWidthUpdated:0
 }

export const ScreenSettingsSlice=createSlice({
    name:"ScreenSettings",
    initialState
    ,reducers:{
        settWidth:(state,action:PayloadAction<number>)=>{
            state.width=action.payload
        },
        settHeight:(state,action:PayloadAction<number>)=>{
            state.height=action.payload
        },
        settWidthUpdated:(state,action:PayloadAction<number>)=>{
            state.settWidthUpdated=action.payload 
        }
        
    }
})

export default ScreenSettingsSlice.reducer
export const {settWidth,settHeight,settWidthUpdated}=ScreenSettingsSlice.actions