import { createSlice } from '@reduxjs/toolkit';
// import User from '../models/user.model';

type AuthState = {
    isVerified: boolean;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    isVerified: false,
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {

        },
        verify: (state, action) => {

        }
    }
})

export const {login, logout, verify} = authSlice.actions;

export default authSlice.reducer;