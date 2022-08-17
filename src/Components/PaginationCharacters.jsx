import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import { useScreen } from '../Hooks/useScreen'
import { PaginationBox } from '../Styles/components-styled'

export const PaginationCharacters = ({ index }) => {
  const { width } = useScreen()

  const goToTop = () => {
    document.body.scrollIntoView()
  }

  const nextPage = () => (console.log('Hola'))

  const handleChange = (page) => {
    nextPage(page)
    console.log(page)
    goToTop()
  }

  return (
    <PaginationBox>
      <Pagination
        count={0}
        page={index}
        shape='rounded'
        size={width > 425 ? 'large' : 'medium'}
        className='pagination'
        onChange={(_, page) => {
          handleChange(page)
        }}
      />
    </PaginationBox>
  )
}
