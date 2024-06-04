import { createSlice } from "@reduxjs/toolkit";

function getLocalStroage(str) {
  return JSON.parse(localStorage.getItem(str));
}

function setLocalStroage(prevState) {
  localStorage.setItem("cartItems", JSON.stringify(prevState.cartItems));
  localStorage.setItem("subTotal", JSON.stringify(prevState.subTotal));
  localStorage.setItem("tax", JSON.stringify(prevState.tax));
  localStorage.setItem("total", JSON.stringify(prevState.total));
}

function setCartTotal(prevState) {
  prevState.subTotal = prevState.cartItems.reduce((acc, value) => {
    return (acc += value.price * value.qty);
  }, 0);

  prevState.tax = prevState.subTotal * (prevState.taxRate / 100);
  prevState.total = prevState.subTotal + prevState.tax;

  setLocalStroage(prevState);
  // let subTotal = 0;
  // let tax = 0;
  // let taxRate = 18;
  // let total = 0;

  // for (let products of prevState.cartItems) {
  //   subTotal += products.price * products.qty;
  //   tax = subTotal * (taxRate / 100);
  //   total = subTotal + tax;
  // }

  // prevState.subTotal = subTotal;
  // prevState.tax = tax;
  // prevState.total = total;
}

const initialState = {
  cartItems: getLocalStroage("cartItems") || [],
  subTotal: getLocalStroage("subTotal") || 0,
  taxRate: 18,
  tax: getLocalStroage("tax") || 0,
  total: getLocalStroage("total") || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (prevState, action) => {
      if (
        prevState.cartItems.find((value) => {
          return value.id === action.payload.id;
        })
      ) {
        const newArray = prevState.cartItems.map((value) => {
          if (value.id === action.payload.id) {
            return { ...value, qty: value.qty + 1 };
          } else {
            return value;
          }
        });
        prevState.cartItems = newArray;
      } else {
        prevState.cartItems.push(action.payload);
        setCartTotal(prevState);
      }
    },
    increseQty: (prevState, action) => {
      const newArray = prevState.cartItems.map((value) => {
        if (value.id === action.payload) {
          return { ...value, qty: value.qty + 1 };
        } else {
          return value;
        }
      });
      prevState.cartItems = newArray;
      setCartTotal(prevState);
    },
    decreseQty: (prevState, action) => {
      let newArray = prevState.cartItems
        .map((value) => {
          if (value.id === action.payload) {
            if (value.qty > 1) {
              return { ...value, qty: value.qty - 1 };
            } else {
              return null;
            }
          } else {
            return value;
          }
        })
        .filter((value) => {
          if (value !== null) {
            return true;
          }
          return false;
        });
      prevState.cartItems = newArray;
      setCartTotal(prevState);
    },
    removeFromCart: (prevState, action) => {
      let newCartList = prevState.cartItems.filter((value) => {
        return value.id !== action.payload;
      });
      prevState.cartItems = newCartList;
      setCartTotal(prevState);
    },
    clearCart: (prevState, action) => {
      prevState.cartItems = [];
      setCartTotal(prevState);
    },
  },
});

export const { addToCart, increseQty, decreseQty, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
