import * as types from './types'

export const filterByCategory = (category) => ({
  type: types.FILTER_BY_CATEGORY,
  payload: category
})

export const filterByDate = (startDate) => ({
  type: types.FILTER_BY_START_DATE,
  payload: startDate
})

export const goToNextPage = () => ({
  type: types.NAVIGATE_NEXT_PAGE
})

export const goToPrevPage = () => ({
  type: types.NAVIGATE_PREV_PAGE
})

export const jumpToPage = (pageNumber) => ({
  type: types.JUMP_TO_PAGE,
  payload: pageNumber
})
