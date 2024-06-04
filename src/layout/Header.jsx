import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({ toggleClose, setQuery, price, handlePriceChange }) {
  const cart = useSelector((store) => {
    return store.cart;
  });

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <Navbar fluid rounded className="bg-[#e7e3e3]  w-full z-10">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="/images/trolley.png" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ShopSphere
          </span>
        </Navbar.Brand>
        <TextInput placeholder="Search Products" onChange={handleChange} />
        <div>
          <input
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={handlePriceChange}
          ></input>
        </div>
        <div className="flex md:order-2 gap-2">
          <Button outline gradientDuoTone="cyanToBlue" onClick={toggleClose}>
            <img
              src="images/cart-removebg-preview.png"
              alt=""
              className="mr-3 h-1 sm:h-9 relative"
            />
            <p className="text-xl absolute left-10 top-2">
              {cart.cartItems.length}
            </p>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="[&>ul]:text-xl">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <div>
            <HiOutlineHeart />
            <Link to="wishlist">Wishlist</Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
