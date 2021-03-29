import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import {
  filterByCategory,
  filterByDate,
  goToNextPage,
  goToPrevPage,
  jumpToPage
} from '../store/actions'

import List from './List'
import Header from './Header'
import Filters from './Filters'
import { categories } from '../utils/helper'
import Pagination from './Common/Pagination'

const Wrapper = styled.div`
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  float: none;
  padding: 5rem 2.5rem;
`

const Workouts = () => {
  const workouts = useSelector((state) => state.currentWorkouts)
  const pageNumbers = useSelector((state) => state.pageNumbers)
  const dispatch = useDispatch()
  const handleClickSelect = (option) => {
    dispatch(filterByCategory(option))
  }

  const handleDateChange = (date) => {
    dispatch(filterByDate(date))
  }

  const navigatePrev = () => {
    dispatch(goToPrevPage())
  }

  const navigateNext = () => {
    dispatch(goToNextPage())
  }

  const jumpToNewPage = (pageNumber) => {
    dispatch(jumpToPage(pageNumber))
  }

  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Filters
          options={categories}
          handleSelect={handleClickSelect}
          handleChange={handleDateChange}
        />
        <List workouts={workouts} />
        <Pagination
          goToPrevPage={navigatePrev}
          goToNextPage={navigateNext}
          pageNumbers={pageNumbers}
          jumpToPage={jumpToNewPage}
        />
      </Wrapper>
    </React.Fragment>
  )
}

export default Workouts
