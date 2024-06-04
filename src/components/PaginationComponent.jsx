import { Pagination } from "flowbite-react";
import React from "react";
import { TOTAL_PAGES } from "../consts";

function PaginationComponent({ currentPage, onPageChange }) {
  return (
    <div className="flex overflow-x-auto sm:justify-center p-4">
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default PaginationComponent;
