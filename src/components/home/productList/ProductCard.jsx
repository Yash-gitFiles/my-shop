import { Button, Card } from "flowbite-react";
import React, { useEffect } from "react";
import { HiHeart, HiOutlineHeart, HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlices";
import Ratings from "./Ratings";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { addToWishList } from "../../../redux/slices/whishlistSlice";

function ProductCard(props) {
  const { product } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => {
    return store.wishlist;
  });

  console.log("wishlist", wishlist);

  useEffect(() => {
    Aos.init();
  }, []);

  function handleAddCart() {
    dispatch(addToCart({ ...product, qty: 1 }));
  }

  function handleDetails() {
    navigate(`details/${product.id}`);
  }

  function handleFavourite() {
    dispatch(addToWishList({ ...product, qty: 1 }));
  }

  return (
    <Card
      className="max-w-sm  mt-12"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={product.img}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <a href="#">
        <div>
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <Button onClick={handleFavourite}>
            {wishlist.wishlist.includes(product.id) ? (
              <HiHeart />
            ) : (
              <HiOutlineHeart />
            )}
          </Button>
        </div>
        <p className="line-clamp-2 tracking-tight text-gray-900 dark:text-white">
          {product.desc}
        </p>
      </a>
      <Ratings rating={product.rating} />
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white ">
          <div>${product.price}</div>
          <div className="flex gap-2">
            <div className="line-through text-sm">${product.oldPrice}</div>
            <div className="text-red-800">
              {Math.round((product.oldPrice * 100) / product.price - 100)}% off
            </div>
          </div>
        </span>
        <Button
          className="rounded"
          outline
          gradientDuoTone="cyanToBlue"
          onClick={handleAddCart}
        >
          <HiPlus className="mr-2 h-5 w-5" />
          Add to cart
        </Button>
        <Button onClick={handleDetails}>Go To Details</Button>
      </div>
    </Card>
  );
}

export default ProductCard;

//old price * 100 / price
