import React from 'react'
import styled from 'styled-components'

import { getIndex } from '../utils/helper'
import { cardColor, cardImages, color } from '../utils/helper'

const CardWrapper = styled.div`
  display: flex;
  padding: 0 1rem;
  margin-bottom: 2rem;
  flex-basis: 30%;
  position: relative;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    flex-basis: 46%;
  }

  @media only screen and (max-width: 768px) {
    flex-basis: 45%;
  }

  @media only screen and (max-width: 420px) {
    flex-basis: 100%;
    padding: 0;
  }
`

const CardContainer = styled.div`
  width: 100%;
  height: 240px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border-bottom: ${(props) => `5px solid ${color[props.colorIndex]}`};
  background: ${(props) => `${color[props.colorIndex]}`};
  z-index: 1;
  padding: 0 2rem 0 0;
  display: flex;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 28px;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  line-height: 1.1;
`

const CardContent = styled(Overlay)`
  position: relative;
  z-index: 1;
  background: transparent;
  transition: none;
`

const CardContentImage = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: ${(props) => `url(${props.imageIndex})`};
  transition: 0.5s all ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`

const Title = styled.h3`
  max-width: 200px;
  margin-bottom: ${(props) => props.bottom};
`

const Description = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
  position: relative;
  top: ${(props) => props.top};
`

const Card = ({ item, index}) => (
  <CardWrapper key={item.id}>
    <CardContainer colorIndex={getIndex(index, cardColor)} key={item.id}>
      <CardContentImage imageIndex={getIndex(index, cardImages)}>
        <Overlay>
          <Title bottom="80px">{item.name}</Title>
          <Description top="-72px">{item.description}</Description>
        </Overlay>
      </CardContentImage>
      <CardContent>
        <Title bottom="48px">{item.name}</Title>
        <Description top="-40px">{item.description}</Description>
      </CardContent>
    </CardContainer>
  </CardWrapper>
)

export default Card
