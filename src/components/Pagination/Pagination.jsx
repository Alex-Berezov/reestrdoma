import React, {useState} from 'react';
import './pagination.scss';

const Pagination = ({ rowsPerPage, totalHousesCount, paginate, currentPage }) => {
  let pagesCount = Math.ceil(totalHousesCount / rowsPerPage),
      pages = [],
      portionSize = 10,
      [portionNumber, setPortionNumber] = useState(1),
      portionCount = Math.ceil(pagesCount / portionSize),
      leftPortionPageNumber = (portionNumber - 1) * portionSize + 1,
      rightPortionPageNumber = portionNumber * portionSize;

  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {portionSize > 1 && 
          <span className="arrows" onClick={() => {setPortionNumber(portionNumber - 1)}}>{'<'}</span>}
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(number => {
          return <li key={number}>
            <span
              onClick={() => paginate(number)} 
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </span>
          </li>
          })}
        {portionCount > portionNumber && 
          <span className="arrows" onClick={() => {setPortionNumber(portionNumber + 1)}}>{'>'}</span>}
      </ul>
    </nav>
  );
};

export default Pagination;