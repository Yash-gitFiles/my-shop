import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishList: (prevState, action) => {
      prevState.wishlist = [...prevState.wishlist, action.payload];
    },
    removeFromWishList: (prevState, action) => {
      prevState.wishlist = prevState.wishlist.filter((product) => {
        return product.id !== action.payload;
      });
    },
  },
});

export const { addToWishList, removeFromWishList } = wishlistSlice.actions;

const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;
