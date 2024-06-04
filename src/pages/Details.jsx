import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsData } from "../data/productsData";
import { addToCart, decreseQty, increseQty } from "../redux/slices/cartSlices";
import styles from "../styles/details.module.css";
import { useDispatch } from "react-redux";

function Details() {
  const paramas = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  console.log("paramas", paramas);
  console.log("productsData", productsData);

  const data = productsData.find((value) => {
    return value.id === paramas.id;
  });

  console.log("data", data);

  function decrese() {
    setQty(qty - 1);
  }
  function increse() {
    setQty(qty + 1);
  }

  function handleCart() {
    dispatch(addToCart({ ...data, qty: 1 }));
    navigate("/cart");
  }

  function handleShopping() {
    navigate("/");
  }

  if (!data) return null;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={`${data.img}`} alt="img" />
      </div>
      <div className={styles.descContainer}>
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <p>$&nbsp;{data.price}</p>
        <div className={styles.qty}>
          <Button onClick={decrese}>-</Button>
          <h3>{qty}</h3>
          <Button onClick={increse}>+</Button>
        </div>
        <p>{qty * data.price}</p>
        <Button onClick={handleCart}>Add To Cart</Button>
        <Button onClick={handleShopping}>Continue Shopping</Button>
      </div>
    </div>
  );
}

export default Details;
