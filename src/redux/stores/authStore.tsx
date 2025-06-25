import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../configure' 
import { Profile } from '../../models/Profile';
import { act } from 'react';

 

export const authSlice=createSlice({
    name:"auth",
    initialState:{},
    reducers:{
         setProfile:(state,action)=>{ 
         },
         Logout:(state)=>{ 
         }
    }

});

export const {setProfile}=authSlice.actions;
export default authSlice.reducer;