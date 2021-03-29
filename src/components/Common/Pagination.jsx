import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Button from './Button'

const Number = styled.div`
  background: ${(props) => (props.isActive ? '#ff7f66' : '#333')};
  border: ${(props) => (props.isActive ? '2px solid #ff7f66' : 'none')};
  color: #fff;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 2px;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: #565656;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding-top: 2rem;
`

const Pagination = ({
  goToPrevPage,
  goToNextPage,
  pageNumbers,
  jumpToPage
}) => {
  const currentPage = useSelector((state) => state.currentPage)
  return (
    <Wrapper>
      <Button
        text="Previous"
        handleClick={goToPrevPage}
        isDisabled={currentPage === 1}
      />
      {pageNumbers.map((number) => (
        <Number
          isActive={number === currentPage}
          key={number}
          onClick={() => jumpToPage(number)}
        >
          {number}
        </Number>
      ))}
      <Button
        text="Next"
        handleClick={goToNextPage}
        isDisabled={currentPage === pageNumbers.length}
      />
    </Wrapper>
  )
}

export default Pagination
