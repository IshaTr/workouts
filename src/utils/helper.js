import Image1 from '../images/card-image-1.jpeg'
import Image2 from '../images/card-image-2.jpeg'
import Image3 from '../images/card-image-3.jpeg'
import Image4 from '../images/card-image-4.jpeg'

export const cardColor = {
  1: 'pink',
  2: 'brown',
  3: 'purple',
  4: 'teal'
}

export const color = {
  pink: '#f07580',
  brown: 'rgb(217, 153, 132)',
  purple: 'rgb(103, 124, 199)',
  teal: 'rgb(79, 184, 173)'
}

export const cardImages = {
  1: Image1,
  2: Image2,
  3: Image3,
  4: Image4
}

export const categories = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7']

export const getIndex = (indexValue, collection) => {
  if (collection) {
    if (indexValue % 10 === 1) {
      return collection[1]
    } else if (indexValue % 4 === 0) {
      return collection[4]
    } else if (indexValue % 3 === 0) {
      return collection[3]
    } else if (indexValue % 2 === 0) {
      return collection[2]
    }
    return collection[1]
  }
}

export const getPageNumbers = (workouts) => {
  const totalPages = Math.ceil(workouts.length / 20)
  const pageNumbers = []
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i + 1)
  }
  return pageNumbers
}
