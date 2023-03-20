import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addIte:(state, action)=>{
            state.items.push(action.payload);

        },
        removeItem:(state, action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[];
        },
    },
});

export const{addIte, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;