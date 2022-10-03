
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productDetail: [],
    detailQuantity: 0
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        viewProduct(state, action){
            const  productDetail = [1]
            if(productDetail.length <= 1){
               state.productDetail.push(action.payload)
            } else {
               state.productDetail.splice(0,1,action.payload)
            }

        },
        clearProduct(state, action){
            state.productDetail = [];
        }
    },
});

export const { viewProduct, clearProduct } = detailSlice.actions;

export default detailSlice.reducer;