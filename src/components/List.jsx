import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`

const List = ({ workouts }) => (
  <Container>
    {workouts.map((item, index) => {
      return (
        <Card
          item={item}
          index={index}
        />
      )
    })}
  </Container>
)

export default List
