import React from 'react'
import styled from 'styled-components'

import ArrowIcon from '../../images/chevron-down.svg'

const StandardSelect = styled.select`
  display: block;
  width: 40%;
  height: 40px;
  padding: 0 2rem 0 1rem;
  margin: 0 1.5rem 1.5rem 0;
  font-size: 16px;
  color: #555;
  border: 1px solid #888;
  border-radius: 8px;
  background-color: transparent;
  background-image: ${`url(${ArrowIcon})`};
  background-repeat: no-repeat;
  background-size: 18px 100%;
  background-position: right 8px top 12px;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1.2;
  cursor: pointer;
  transition: 0.5s all ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`

const Select = ({ options, text, handleSelect }) => (
  <StandardSelect onChange={(e) => handleSelect(e.target.value)}>
    <option>{text}</option>
    {options.map((option) => {
      return <option key={option}>{option}</option>
    })}
  </StandardSelect>
)

export default Select
