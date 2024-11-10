import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { getProducts, setCategory } = cartSlice.actions;

export default cartSlice.reducer;
