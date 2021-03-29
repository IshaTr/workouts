import React from 'react'
import styled from 'styled-components'

import Logo from '../utils/Logo'

import bannerImg from '../images/banner-image.png'

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  height: 750px;
`

const HeaderContainer = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  float: none;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0 1rem 2.5rem;
  position: absolute;
  z-index: 10;
  width: 100%;
  max-width: 1350px;

  @media (max-width: 1024px) {
    width: unset;
  }
`

const LogoWrapper = styled.div`
  font-size: 24px;
  height: 30px;
  width: 115px;
`

const Banner = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.src})`};
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -30% center;
  z-index: 1;

  @media (max-width: 1024px) {
    background-position: center;
  }
`

const BannerOverlay = styled(Banner)`
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  padding: 0 0 0 2.5rem;
  font-weight: 400;
  padding-top: 260px;
  height: 65.5%;
  line-height: 1.1;
  width: unset;

  h1 {
    font-size: 70px;
    margin: 0;
  }

  span {
    margin: 1rem 0 3rem;
    color: #fff;
    font-size: 24px;
    font-family: Guillon, sans-serif;
    font-weight: 400;
    display: flex;
    flex-grow: 1;
    max-width: 550px;
    line-height: 1.4;
  }
`

const Header = (props) => (
  <HeaderWrapper id="header">
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </HeaderContainer>
    <Banner src={bannerImg}>
      <BannerOverlay>
        <h1>Get Fit & Happy</h1>
        <h1>at Home</h1>
        <span>
          Unlock your all-access membership to HIIT, Yoga and more, with over 30
          fitness programs & 300+ motivating workouts adapted to your fitness
          level & goals.
        </span>
      </BannerOverlay>
    </Banner>
  </HeaderWrapper>
)

export default Header
