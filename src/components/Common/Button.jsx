import React from 'react'
import styled from 'styled-components'

const PrimaryButton = styled.button`
  font-size: 12px;
  letter-spacing: 0.3px;
  min-height: 30px;
  line-height: 28px;
  padding: 0 1rem;
  position: relative;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0 8px;
  font-family: GuillonDemi, sans-serif;
  font-weight: 400;
  color: #fff;
  fill: #fff;
  border-radius: 8px;
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  max-width: 100%;
  border: 1px solid #ff7f66;
  background-color: #ff7f66;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 20%);
`

const Button = ({ text, handleClick, isDisabled }) => (
  <PrimaryButton onClick={() => handleClick()} disabled={isDisabled}>
    {text}
  </PrimaryButton>
)

export default Button
