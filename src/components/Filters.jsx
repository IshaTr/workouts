import React from 'react'
import styled from 'styled-components'

import Select from './Common/Select'
import DatePicker from './Common/DatePicker'

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1318px;
  padding: 0 1rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 420px) {
    flex-wrap: wrap;
  }
`

const Header = styled.div`
  font-size: 24px;
  color: #555;
  line-height: 1.4;
  font-weight: bold;
  width: 150px;

  @media only screen and (max-width: 768px) {
    height: 72px;
    display: flex;
    align-items: flex-start;
  }

  @media only screen and (max-width: 420px) {
    height: unset;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`

const Filter = styled.div`
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 420px) {
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
  }
`

const Filters = ({ options, handleSelect, handleChange }) => (
  <FilterContainer>
    <Header>Programs</Header>
    <Filter>
      <Header>Filter by</Header>
      <Select text="Category" options={options} handleSelect={handleSelect} />
      <DatePicker text="Start Date" handleChange={handleChange} />
    </Filter>
  </FilterContainer>
)

export default Filters
