import { createSlice } from "@reduxjs/toolkit";

const productList = createSlice({
    name: "products",
    initialState: {
        value: []
    },
    reducers: {
        addProductStore(state, action) {
            state.value = action.payload;
        }
    }
});

export const { addProductStore } = productList.actions;

export default productList.reducer;