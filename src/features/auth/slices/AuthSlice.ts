import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../interfaces/auth.interface';



const initialState: IAuthState = {
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
        }
    },
})


// Action creators are generated for each case reducer function
export const {
    setToken,
} = authSlice.actions

