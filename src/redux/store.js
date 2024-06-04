import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";
import wishlistReducer from "./slices/whishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartSlices,
    wishlist: wishlistReducer,
  },
});

export default store;
