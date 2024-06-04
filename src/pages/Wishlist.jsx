import React from "react";
import { useSelector } from "react-redux";
import WishlistCard from "../components/home/productList/WishlistCard";

function Wishlist() {
  const store = useSelector((store) => {
    return store.wishlist;
  });

  console.log("store", store);

  if (!store) return null;
  return (
    <div>
      {/* {store?.map((value, index) => {
        return <WishlistCard key={index} product={value} />;
      })} */}
    </div>
  );
}

export default Wishlist;
