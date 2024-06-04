import { Button, Drawer } from "flowbite-react";
import React from "react";
import { HiMinus, HiPlus, HiShoppingCart, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreseQty,
  increseQty,
  removeFromCart,
} from "../../../redux/slices/cartSlices";

function DrawerComponent({ toggleClose, isOpen }) {
  const cart = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  function handleDelete(value) {
    dispatch(removeFromCart(value.id));
  }

  function handleIncrease(id) {
    dispatch(increseQty(id));
  }

  function handleDecrese(id) {
    dispatch(decreseQty(id));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <Drawer open={isOpen} onClose={toggleClose} position="right">
      <Drawer.Header
        title="Cart"
        titleIcon={() => {
          return <HiShoppingCart className="mr-2 h-5 w-5" />;
        }}
      />
      {cart.cartItems.length > 0 && (
        <Button
          onClick={handleClearCart}
          outline
          gradientDuoTone="cyanToBlue"
          size="xs"
          className="mr-10 mb-3"
        >
          Clear Cart
        </Button>
      )}
      <Drawer.Items>
        <ul className="flex flex-col gap-3">
          {cart?.cartItems?.map((value, index) => {
            return (
              <li key={index} className="flex justify-between">
                <div>
                  <img
                    src={value.img}
                    alt="img"
                    className="h-14 w-14 object-cover rounded-md"
                  />
                </div>
                <div>
                  <p>{value.title}</p>
                  <p>{value.price * value.qty}$</p>
                </div>
                <div>
                  <div className="flex gap-2">
                    <Button size="base" onClick={() => handleDecrese(value.id)}>
                      <HiMinus />
                    </Button>
                    <p>{value.qty}</p>
                    <Button
                      size="base"
                      onClick={() => {
                        handleIncrease(value.id);
                      }}
                    >
                      <HiPlus />
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Button size="base" onClick={() => handleDelete(value)}>
                      <HiTrash />
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
          {cart.cartItems.length > 0 && (
            <li className="bottom-0 left-4 right-4">
              <div className="flex items-center">
                <p className="grow-[1] font-medium">Subtotal</p>
                <p>{Math.round(cart.subTotal)}$</p>
              </div>
              <div className="flex items-center">
                <p className="grow-[1] font-medium">Tax</p>
                <p>{Math.round(cart.tax)}$</p>
              </div>
              <div className="flex items-center">
                <p className="grow-[1] font-medium">Total</p>
                <p>{Math.round(cart.total)}$</p>
              </div>
            </li>
          )}
        </ul>
      </Drawer.Items>
    </Drawer>
  );
}

export default DrawerComponent;
