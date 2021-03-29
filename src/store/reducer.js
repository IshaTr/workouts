import * as types from './types'
import { workouts } from '../utils/workout'
import { getPageNumbers } from '../utils/helper'

const pageNumbers = getPageNumbers(workouts)

const defaultState = {
  currentWorkouts: workouts.slice(0, 20),
  allWorkouts: workouts,
  startDate: null,
  currentPage: 1,
  pageLimit: 20,
  upperBound: 20,
  lowerBound: 0,
  pageNumbers: pageNumbers,
  activePage: 1,
  detailPageActive: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FILTER_BY_CATEGORY:
      const filteredWorkouts = state.allWorkouts.filter((workout) =>
        workout.category.includes(action.payload)
      )
      return {
        ...state,
        currentWorkouts: [...filteredWorkouts],
        startDate: null
      }

    case types.FILTER_BY_START_DATE:
      const selectedDate = new Date(action.payload || '')
      const filteredWorkoutsByDate = state.allWorkouts.filter(
        (workout) =>
          new Date(workout.startDate).getTime() === selectedDate.getTime()
      )
      return {
        ...state,
        currentWorkouts: [...filteredWorkoutsByDate]
      }

    case types.NAVIGATE_NEXT_PAGE:
      const newUpperBound = state.upperBound + state.pageLimit
      const newLowerBound = state.lowerBound + state.pageLimit
      const newWorkoutsList = state.allWorkouts.slice(
        newLowerBound,
        newUpperBound
      )
      return {
        ...state,
        currentWorkouts: [...newWorkoutsList],
        upperBound: newUpperBound,
        lowerBound: newLowerBound,
        currentPage: state.currentPage + 1
      }

    case types.NAVIGATE_PREV_PAGE:
      const updatedUpperBound = state.upperBound - state.pageLimit
      const updatedLowerBound = state.lowerBound - state.pageLimit
      const updatedWorkoutsList = state.allWorkouts.slice(
        updatedLowerBound,
        updatedUpperBound
      )
      return {
        ...state,
        currentWorkouts: [...updatedWorkoutsList],
        upperBound: updatedUpperBound,
        lowerBound: updatedLowerBound,
        currentPage: state.currentPage - 1
      }

    case types.JUMP_TO_PAGE:
      const jumpUpperBound = action.payload * state.pageLimit
      const jumpLowerBound = jumpUpperBound - state.pageLimit
      const jumpedWorkoutsList = state.allWorkouts.slice(
        jumpLowerBound,
        jumpUpperBound
      )
      return {
        ...state,
        currentWorkouts: [...jumpedWorkoutsList],
        upperBound: jumpUpperBound,
        lowerBound: jumpLowerBound,
        currentPage: action.payload
      }

    default:
      return state
  }
}

export default reducer
