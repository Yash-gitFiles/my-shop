import { Button } from "flowbite-react";
import React from "react";
import { HiMinus, HiPlus, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  decreseQty,
  increseQty,
  removeFromCart,
} from "../redux/slices/cartSlices";
import styles from "../styles/cart.module.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
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

  function handleProcessToBuy() {
    navigate("/processToBuy");
  }

  return (
    <div className={styles.container}>
      {cart.cartItems.map((value) => {
        return (
          <li className="flex justify-between gap-16">
            <div>
              <img
                src={value.img}
                alt="img"
                className="h-[200px] w-[200px] object-cover rounded-md"
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
      <div>
        <Button onClick={handleProcessToBuy}>Process To Buy</Button>
      </div>
      <div className="fixed top-[90px] left-[20px]">
        <li className="bottom-0 left-4 right-4 list-none ">
          <div className="flex items-center gap-4">
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
      </div>
    </div>
  );
}

export default Cart;
