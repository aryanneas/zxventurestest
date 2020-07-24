import React, { useState } from 'react'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const Pagination = ({ children, itemsPerPage, arrayItems }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [totalPages] = useState(
    Math.ceil((arrayItems.length || children.length) / itemsPerPage)
  )

  const paginate = (items, currentPage) => {
    if (items.length > 1) {
      const start = (currentPage - 1) * itemsPerPage
      const end = start + itemsPerPage

      return items.slice(start, end)
    } else return items
  }

  return (
    <Grid>
      <FlexComponent>
        {showPaginationItems(
          totalPages,
          currentPageNumber,
          setCurrentPageNumber
        )}
      </FlexComponent>
      <ChildrenWrapper>{paginate(children, currentPageNumber)}</ChildrenWrapper>
      <FlexComponent>
        {showPaginationItems(
          totalPages,
          currentPageNumber,
          setCurrentPageNumber
        )}
      </FlexComponent>
    </Grid>
  )
}

const showPaginationItems = (
  totalPages,
  currentPageNumber,
  setCurrentPageNumber
) => {
  return (
    <React.Fragment>
      <PaginationItem
        disabled={currentPageNumber <= 1}
        onClick={() => setCurrentPageNumber(1)}
      >
        <FontAwesomeIcon icon="angle-double-left" />
      </PaginationItem>
      <PaginationItem
        disabled={currentPageNumber <= 1}
        onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
      >
        <FontAwesomeIcon icon="angle-left" />
      </PaginationItem>
      {currentPageNumber !== 1 ? (
        <PaginationItem
          onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
        >
          {currentPageNumber - 1}
        </PaginationItem>
      ) : null}
      <PaginationItem active>{currentPageNumber}</PaginationItem>
      {currentPageNumber < totalPages ? (
        <PaginationItem
          onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
        >
          {currentPageNumber + 1}
        </PaginationItem>
      ) : null}
      <PaginationItem
        disabled={currentPageNumber >= totalPages}
        onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
      >
        <FontAwesomeIcon icon="angle-right" />
      </PaginationItem>
      <PaginationItem
        disabled={currentPageNumber >= totalPages}
        onClick={() => setCurrentPageNumber(totalPages)}
      >
        <FontAwesomeIcon icon="angle-double-right" />
      </PaginationItem>
    </React.Fragment>
  )
}

const ChildrenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 0em;
  grid-row-gap: 1em;
  margin: 5%;
`
const PaginationItem = styled.button.attrs(({ active }) => ({
  className: active ? 'active' : '',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #fff;
  border-color: #fff;
  padding: 10px 15px;
  color: #000;
  text-align: center;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  cursor: pointer;
  &:first-child {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-left: 1px solid #d3d3d3;
  }
  &:last-child {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
  &.active,
  &:hover {
    color: #fff;
    background-color: #ff5d3c;
    border-color: #ff5d3c;
  }

  &:disabled {
    color: #939393;
    background-color: #d3d3d3;
    border: none;
    cursor: not-allowed;
  }
`
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const FlexComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`
export default Pagination
