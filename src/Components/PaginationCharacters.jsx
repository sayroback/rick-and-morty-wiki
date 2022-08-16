import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import { useCharacters } from '../Services/useCharacters'
import { useScreen } from '../Hooks/useScreen'
import { PaginationBox } from '../Styles/components-styled'

export const PaginationCharacters = ({ nextPage, index }) => {
  const { state } = useCharacters()
  const { pages } = state
  const { width } = useScreen()

  const goToTop = () => {
    document.body.scrollIntoView()
  }

  const handleChange = (page) => {
    nextPage(page)
    console.log(page)
    goToTop()
  }

  return (
    <PaginationBox>
      <Pagination
        count={pages}
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
