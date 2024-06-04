import React, { useState } from "react";
import { getProducts } from "../../../data/productsData";
import PaginationComponent from "../../PaginationComponent";
import ProductCard from "./ProductCard";

function ProductList({ query, price }) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  console.log(price, query, currentPage);
  const data = getProducts(currentPage, 10, query, price);
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4">
        {data?.map((value, index) => {
          return <ProductCard key={index} product={value} />;
        })}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default ProductList;
