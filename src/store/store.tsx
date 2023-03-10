import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import itemReducer from './item.slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        items: itemReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;