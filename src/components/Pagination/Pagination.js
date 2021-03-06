import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default ({ jump, currentPage, maxPage }) => {
  return (
    <div style={{ margin: 'auto' }}>
      <Pagination aria-label="Page navigation">
        <PaginationItem>
          <PaginationLink onClick={() => jump(1)} first />
        </PaginationItem>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink previous onClick={() => jump(currentPage - 1)} />
        </PaginationItem>
        {[...Array(maxPage)].map((_, each) => {
          return (
            <PaginationItem
              onClick={() => jump(each + 1)}
              key={each}
              active={currentPage === each + 1}
            >
              <PaginationLink>{each + 1}</PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem disabled={currentPage === maxPage}>
          <PaginationLink onClick={() => jump(currentPage + 1)} next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => jump(maxPage)} last />
        </PaginationItem>
      </Pagination>
    </div>
  );
};
