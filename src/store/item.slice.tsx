import { createSlice } from "@reduxjs/toolkit";
import Item from "../models/item.model";

const initialState: Item[] = [{
    uuid: "1",
    name: "test",
    description: "These toggle buttons will be announced as “button”/“button pressed”. The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button."
}];

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
            return [...state, action.payload];
        },
        updateItem: (state, action) => {
            let itemIndex = state.findIndex(item => item.uuid === action.payload.uuid);
            state[itemIndex] = action.payload;
            return [...state];
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.uuid!== action.payload.uuid);
        },
    }
});


export const {addItem, updateItem, removeItem} = itemSlice.actions;

export default itemSlice.reducer;