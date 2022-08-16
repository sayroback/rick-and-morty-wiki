import styled from 'styled-components'
import React from 'react'

const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
    height: 70px;
    padding: 26px 0 12px 0;
`
export const PaginationBox = ({ children }) => {
  return (
    <>
      <PaginationContainer>{children}</PaginationContainer>
    </>
  )
}
