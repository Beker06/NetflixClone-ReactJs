import { createSlice } from '@reduxjs/toolkit';

export const priceSlice = createSlice({
    name: 'price',
    initialState: {
        value: 0,
    },
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload;
        },
    },
});

export const { setPrice } = priceSlice.actions;

export const selectPrice = state => state.price.price;

export default priceSlice.reducer;