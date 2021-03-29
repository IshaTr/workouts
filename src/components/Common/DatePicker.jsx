import React from 'react'
import styled from 'styled-components'

const DatePicker = styled.input`
  display: block;
  width: 50%;
  height: 40px;
  padding: 0 1rem 0 1rem;
  margin: 0 1.5rem 1.5rem 0;
  font-size: 16px;
  color: #555;
  border: 1px solid #888;
  border-radius: 8px;
  background-color: transparent;
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

const Button = ({ handleChange }) => (
  <DatePicker type="date" onChange={(e) => handleChange(e.target.value)} />
)

export default Button
