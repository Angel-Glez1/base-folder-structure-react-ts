import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
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
