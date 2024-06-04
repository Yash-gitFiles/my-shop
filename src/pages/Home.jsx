import React from "react";
import ProductList from "../components/home/productList/ProductList";

function Home({ query, setQuery, price }) {
  return (
    <div>
      <ProductList query={query} setQuery={setQuery} price={price} />
    </div>
  );
}

export default Home;
