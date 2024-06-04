import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import FooterComponent from "./FooterComponent";
import DrawerComponent from "../components/home/productList/DrawerComponent";

function Layout({
  toggleClose,
  isOpen,
  query,
  setQuery,
  price,
  setPrice,
  handlePriceChange,
}) {
  return (
    <div>
      <Header
        toggleClose={toggleClose}
        query={query}
        setQuery={setQuery}
        price={price}
        setPrice={setPrice}
        handlePriceChange={handlePriceChange}
      />
      <Outlet />
      <FooterComponent />
      <DrawerComponent isOpen={isOpen} toggleClose={toggleClose} />
    </div>
  );
}

export default Layout;
