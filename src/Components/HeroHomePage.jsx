import React from 'react'
import styled from 'styled-components'
const images = ['https://i.ibb.co/MR5TbBp/rick-desktop.jpg', 'https://i.ibb.co/PjgZfwQ/rick-mobile.png']

const HeroContainer = styled.div`
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

export const HeroHomePage = () => {
  return (
      <HeroContainer>
        <HeroImage />
      </HeroContainer>
  )
}
