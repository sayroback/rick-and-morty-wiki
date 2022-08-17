import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import { useScreen } from '../Hooks/useScreen'
import { PaginationBox } from '../Styles/components-styled'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../Actions'

export const PaginationCharacters = () => {
  const info = useSelector(state => state.info)
  const index = useSelector(state => state.page)
  const dispatch = useDispatch()
  const { width } = useScreen()

  const handleChange = (page) => {
    dispatch(setPage(page))
  }

  return (
  <div>
    <PaginationBox>
      <Pagination
        count={info.pages}
        page={index}
        shape='rounded'
        size={width > 425 ? 'large' : 'medium'}
        className='pagination'
        onChange={(_, page) => {
          document.body.scrollIntoView()
          handleChange(page)
        }}
        />
    </PaginationBox>
  </div>
  )
}
