import React from "react";
import styles from "../../../styles/wishlistCard.module.css";

function WishlistCard({ product }) {
  console.log("product", product);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src="https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className={styles.descContainer}>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className={styles.priceContainer}>
          <p>100</p>
          <p>200</p>
          <p>50% off</p>
        </div>
        <button className={styles.btn}>Continue Shopping</button>
      </div>
    </div>
  );
}

export default WishlistCard;
