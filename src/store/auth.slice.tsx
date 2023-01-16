import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isVerified: false,
        isLoggedIn: false
    },
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