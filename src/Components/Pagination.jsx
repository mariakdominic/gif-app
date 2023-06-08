import React from "react";
import "../styles/pagination.scss";

/**
 * @param nPages Total number of pages
 * @param currentPage Current page number
 * @param setCurrentPage Hook to set the current page number
 * @returns Pagination with 25 items per page
 */


const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a className={`page-link ${currentPage === 1 ? "disabled" : ""} `} onClick={prevPage} href={`#`}>
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href={`#`}
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className={`page-link ${currentPage === nPages  ? "disabled" : ""} `} onClick={nextPage}href={`#`}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
