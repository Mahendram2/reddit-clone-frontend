import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate, pageNum }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <nav>
      <ul className='pagination'>
        {pageNum !== '1' ? (
          <Link to={`/${pageNum - 1}`} onClick={() => paginate(pageNum - 1)}>
            {'<<<'}
          </Link>
        ) : null}
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <Link
              onClick={() => paginate(number)}
              to={`/${number}`}
              className='page-link'
            >
              {number}
            </Link>
          </li>
        ))}
        {pageNum != pageNumbers.length ? (
          <Link
            to={`/${parseInt(pageNum, 10) + 1}`}
            onClick={() => paginate(parseInt(pageNum, 10) + 1)}
          >
            {'>>>'}
          </Link>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
