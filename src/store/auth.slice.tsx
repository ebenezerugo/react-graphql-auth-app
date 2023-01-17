import { createSlice } from '@reduxjs/toolkit';
import User from '../models/user.model';

type AuthState = {
    isLoggedIn: boolean;
    token: string|null;
    user?: User;
}

const initialState: AuthState = {
    isLoggedIn: localStorage.getItem('token') !== null,
    token: localStorage.getItem('token') ? localStorage.getItem('token'): '',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || ''): null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signup: (state, action) => {
            const {token, user} = action.payload.signup;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            return {...state, isLoggedIn:true, token, user};
        },
        login: (state, action) => {
            const {token, user} = action.payload.login;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            return {...state, isLoggedIn:true, token, user};
        },
        logout: (state, action) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {...state, isLoggedIn:false, token: ''};
        },
        verifyMe: (state, action) => {

        }
    }
})

export const {login, signup, logout, verifyMe} = authSlice.actions;

export default authSlice.reducer;