import React from 'react'
import styled from 'styled-components'
import { SearchCharacters } from './SearchCharacters'
const images = ['https://i.ibb.co/MR5TbBp/rick-desktop.jpg', 'https://i.ibb.co/PjgZfwQ/rick-mobile.png', 'https://i.ibb.co/0Bywh29/rick-logo-1.png']

const HeroContainer = styled.main`
  display: flex;
  width: 100%;
  height: 70vh;
  margin-bottom: 2.5rem;
  `
const HeroImage = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${images[0]});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${images[1]});
    background-size: contain;
  }
`
const LogoRickContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  margin-bottom: 2.5rem;
  justify-content: center;
`
const LogoRick = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

export const HeroHomePage = () => {
  return (
      <HeroContainer>
        <HeroImage>
          <LogoRickContainer>
          <a href="/">
            <LogoRick src={images[2]}/>
          </a>
          </LogoRickContainer>
          <SearchCharacters/>
        </HeroImage>
      </HeroContainer>
  )
}
