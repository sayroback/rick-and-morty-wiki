import React from 'react'
import styled from 'styled-components'
import { SearchCharacters } from './SearchCharacters'
const images = ['https://i.ibb.co/MR5TbBp/rick-desktop.jpg', 'https://i.ibb.co/PjgZfwQ/rick-mobile.png', 'https://i.ibb.co/0Bywh29/rick-logo-1.png']

const HeroContainer = styled.main`
  display: flex;
  width: 100%;
  height: 700px;
  margin-bottom: 2.5rem;
    @media (max-width: 768px) {
  height: 550px;
  }
  `
const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${images[0]});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${images[1]});
    background-size: contain;
    margin-top: 20px;
  }
`
const LogoRickContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`
const LogoRick = styled.img`
  height: 50%;
  width: 50%;
  object-fit: contain;
  @media (min-width: 320px) {
    margin-bottom: 80%;
  }
  @media (min-width: 410px) {
    margin-bottom: 60%;
  }
  @media (min-width: 490px) {
    margin-bottom: 50%;
  }
  @media (min-width: 600px) {
    margin-bottom: 40%;
  }
  @media (min-width: 768px) {
    margin-bottom: 0%;
    width: 50%;
  }
`

export const HeroHomePage = () => {
  return (
    <HeroContainer>
        <HeroImage>
          <a href="/">
          <LogoRickContainer>
            <LogoRick src={images[2]}/>
          </LogoRickContainer>
          </a>
          <SearchCharacters/>
        </HeroImage>
      </HeroContainer>
  )
}
